-- CountriesAndCities SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "CountriesAndCities",
      slug = "countries-and-cities",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://countriesnow.space/api/v0.1",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["city"] = {},
        ["country"] = {},
      },
    },
    entity = {
      ["city"] = {
        ["fields"] = {
          {
            ["name"] = "city",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "City name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "country",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "Country name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "data",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "error",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "limit",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "msg",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "order",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "orderBy",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "populationCounts",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "state",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "city",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/countries/population/cities",
                ["parts"] = {
                  "countries",
                  "population",
                  "cities",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = {
                    ["city"] = "`reqdata`",
                  },
                  ["res"] = "`body.data`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/countries/population/cities/filter",
                ["parts"] = {
                  "countries",
                  "population",
                  "cities",
                  "filter",
                },
                ["select"] = {
                  ["$action"] = "filter",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/countries/state/cities",
                ["parts"] = {
                  "countries",
                  "state",
                  "cities",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/countries/population/cities",
                ["parts"] = {
                  "countries",
                  "population",
                  "cities",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["country"] = {
        ["fields"] = {
          {
            ["name"] = "Iso2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "Iso3",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "capital",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "cities",
            ["short"] = "List of cities in the country",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "code",
            ["short"] = "Country code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "country",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$STRING`",
              },
              ["list"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["short"] = "Country name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "currency",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "flag",
            ["short"] = "URL to the country flag image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "iso2",
            ["short"] = "ISO 3166-1 alpha-2 code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "iso3",
            ["short"] = "ISO 3166-1 alpha-3 code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "lat",
            ["short"] = "Latitude",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "long",
            ["short"] = "Longitude",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "name",
            ["short"] = "Country name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "populationCounts",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "states",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "country",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/countries/capital",
                ["parts"] = {
                  "countries",
                  "capital",
                },
                ["select"] = {
                  ["$action"] = "capital",
                },
                ["transform"] = {
                  ["req"] = {
                    ["country"] = "`reqdata`",
                  },
                  ["res"] = "`body.data`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/countries/currency",
                ["parts"] = {
                  "countries",
                  "currency",
                },
                ["select"] = {
                  ["$action"] = "currency",
                },
                ["transform"] = {
                  ["req"] = {
                    ["country"] = "`reqdata`",
                  },
                  ["res"] = "`body.data`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/countries/flag/images",
                ["parts"] = {
                  "countries",
                  "flag",
                  "images",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = {
                    ["country"] = "`reqdata`",
                  },
                  ["res"] = "`body.data`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/countries/iso",
                ["parts"] = {
                  "countries",
                  "iso",
                },
                ["select"] = {
                  ["$action"] = "iso",
                },
                ["transform"] = {
                  ["req"] = {
                    ["country"] = "`reqdata`",
                  },
                  ["res"] = "`body.data`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/countries/population",
                ["parts"] = {
                  "countries",
                  "population",
                },
                ["select"] = {
                  ["$action"] = "population",
                },
                ["transform"] = {
                  ["req"] = {
                    ["country"] = "`reqdata`",
                  },
                  ["res"] = "`body.data`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/countries/positions",
                ["parts"] = {
                  "countries",
                  "positions",
                },
                ["select"] = {
                  ["$action"] = "position",
                },
                ["transform"] = {
                  ["req"] = {
                    ["country"] = "`reqdata`",
                  },
                  ["res"] = "`body.data`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/countries/states",
                ["parts"] = {
                  "countries",
                  "states",
                },
                ["select"] = {
                  ["$action"] = "state",
                },
                ["transform"] = {
                  ["req"] = {
                    ["country"] = "`reqdata`",
                  },
                  ["res"] = "`body.data`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/countries",
                ["parts"] = {
                  "countries",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/countries/codes",
                ["parts"] = {
                  "countries",
                  "codes",
                },
                ["select"] = {
                  ["$action"] = "code",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/countries/flag/images",
                ["parts"] = {
                  "countries",
                  "flag",
                  "images",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/countries/population",
                ["parts"] = {
                  "countries",
                  "population",
                },
                ["select"] = {
                  ["$action"] = "population",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/countries/positions",
                ["parts"] = {
                  "countries",
                  "positions",
                },
                ["select"] = {
                  ["$action"] = "position",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
