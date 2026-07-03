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

func TestCountryEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Country(nil)
		if ent == nil {
			t.Fatal("expected non-nil CountryEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := countryBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "country." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set COUNTRIESANDCITIES_TEST_COUNTRY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		countryRef01Ent := client.Country(nil)
		countryRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "country"}, setup.data), "country_ref01"))

		countryRef01DataResult, err := countryRef01Ent.Create(countryRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		countryRef01Data = core.ToMapAny(countryRef01DataResult)
		if countryRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		countryRef01Match := map[string]any{}

		countryRef01ListResult, err := countryRef01Ent.List(countryRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		countryRef01List, countryRef01ListOk := countryRef01ListResult.([]any)
		if !countryRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", countryRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(countryRef01List), map[string]any{"id": countryRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

	})
}

func countryBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "country", "CountryTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read country test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse country test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"country01", "country02", "country03"},
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
	entidEnvRaw := os.Getenv("COUNTRIESANDCITIES_TEST_COUNTRY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"COUNTRIESANDCITIES_TEST_COUNTRY_ENTID": idmap,
		"COUNTRIESANDCITIES_TEST_LIVE":      "FALSE",
		"COUNTRIESANDCITIES_TEST_EXPLAIN":   "FALSE",
		"COUNTRIESANDCITIES_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["COUNTRIESANDCITIES_TEST_COUNTRY_ENTID"])
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
