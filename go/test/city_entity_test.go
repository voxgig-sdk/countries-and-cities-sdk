package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/countries-and-cities-sdk/go"
	"github.com/voxgig-sdk/countries-and-cities-sdk/go/core"

	vs "github.com/voxgig-sdk/countries-and-cities-sdk/go/utility/struct"
)

func TestCityEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.City(nil)
		if ent == nil {
			t.Fatal("expected non-nil CityEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := cityBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "city." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set COUNTRIESANDCITIES_TEST_CITY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		cityRef01Ent := client.City(nil)
		cityRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "city"}, setup.data), "city_ref01"))

		cityRef01DataResult, err := cityRef01Ent.Create(cityRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		cityRef01Data = core.ToMapAny(cityRef01DataResult)
		if cityRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		cityRef01Match := map[string]any{}

		cityRef01ListResult, err := cityRef01Ent.List(cityRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		cityRef01List, cityRef01ListOk := cityRef01ListResult.([]any)
		if !cityRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", cityRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(cityRef01List), map[string]any{"id": cityRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

	})
}

func cityBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "city", "CityTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read city test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse city test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"city01", "city02", "city03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("COUNTRIESANDCITIES_TEST_CITY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"COUNTRIESANDCITIES_TEST_CITY_ENTID": idmap,
		"COUNTRIESANDCITIES_TEST_LIVE":      "FALSE",
		"COUNTRIESANDCITIES_TEST_EXPLAIN":   "FALSE",
		"COUNTRIESANDCITIES_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["COUNTRIESANDCITIES_TEST_CITY_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["COUNTRIESANDCITIES_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["COUNTRIESANDCITIES_APIKEY"],
			},
			extra,
		})
		client = sdk.NewCountriesAndCitiesSDK(core.ToMapAny(mergedOpts))
	}

	live := env["COUNTRIESANDCITIES_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["COUNTRIESANDCITIES_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
