-- City entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("countries-and-cities_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("CityEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:City(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = city_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "city." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set COUNTRIESANDCITIES_TEST_CITY_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local city_ref01_ent = client:City(nil)
    local city_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.city"), "city_ref01"))

    local city_ref01_data_result, err = city_ref01_ent:create(city_ref01_data, nil)
    assert.is_nil(err)
    city_ref01_data = helpers.to_map(city_ref01_data_result)
    assert.is_not_nil(city_ref01_data)

    -- LIST
    local city_ref01_match = {}

    local city_ref01_list_result, err = city_ref01_ent:list(city_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(city_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(city_ref01_list_result),
      { id = city_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

  end)
end)

function city_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/city/CityTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read city test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "city01", "city02", "city03" },
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
  local entid_env_raw = os.getenv("COUNTRIESANDCITIES_TEST_CITY_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["COUNTRIESANDCITIES_TEST_CITY_ENTID"] = idmap,
    ["COUNTRIESANDCITIES_TEST_LIVE"] = "FALSE",
    ["COUNTRIESANDCITIES_TEST_EXPLAIN"] = "FALSE",
    ["COUNTRIESANDCITIES_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["COUNTRIESANDCITIES_TEST_CITY_ENTID"])
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
