-- Country entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("countries-and-cities_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("CountryEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Country(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = country_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "country." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set COUNTRIESANDCITIES_TEST_COUNTRY_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local country_ref01_ent = client:Country(nil)
    local country_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.country"), "country_ref01"))

    local country_ref01_data_result, err = country_ref01_ent:create(country_ref01_data, nil)
    assert.is_nil(err)
    country_ref01_data = helpers.to_map(country_ref01_data_result)
    assert.is_not_nil(country_ref01_data)

    -- LIST
    local country_ref01_match = {}

    local country_ref01_list_result, err = country_ref01_ent:list(country_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(country_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(country_ref01_list_result),
      { id = country_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

  end)
end)

function country_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/country/CountryTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read country test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "country01", "country02", "country03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("COUNTRIESANDCITIES_TEST_COUNTRY_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["COUNTRIESANDCITIES_TEST_COUNTRY_ENTID"] = idmap,
    ["COUNTRIESANDCITIES_TEST_LIVE"] = "FALSE",
    ["COUNTRIESANDCITIES_TEST_EXPLAIN"] = "FALSE",
    ["COUNTRIESANDCITIES_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["COUNTRIESANDCITIES_TEST_COUNTRY_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["COUNTRIESANDCITIES_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      {
        apikey = env["COUNTRIESANDCITIES_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["COUNTRIESANDCITIES_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["COUNTRIESANDCITIES_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
