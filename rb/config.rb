# CountriesAndCities SDK configuration

module CountriesAndCitiesConfig
  def self.make_config
    {
      "main" => {
        "name" => "CountriesAndCities",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://countriesnow.space/api/v0.1",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "city" => {},
          "country" => {},
        },
      },
      "entity" => {
        "city" => {
          "fields" => [
            {
              "active" => true,
              "name" => "city",
              "op" => {
                "list" => {
                  "req" => false,
                  "type" => "`$STRING`",
                },
              },
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "country",
              "op" => {
                "list" => {
                  "req" => false,
                  "type" => "`$STRING`",
                },
              },
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "data",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "error",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "index$" => 3,
            },
            {
              "active" => true,
              "name" => "limit",
              "req" => false,
              "type" => "`$INTEGER`",
              "index$" => 4,
            },
            {
              "active" => true,
              "name" => "msg",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 5,
            },
            {
              "active" => true,
              "name" => "order",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 6,
            },
            {
              "active" => true,
              "name" => "order_by",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 7,
            },
            {
              "active" => true,
              "name" => "population_count",
              "req" => false,
              "type" => "`$ARRAY`",
              "index$" => 8,
            },
            {
              "active" => true,
              "name" => "state",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 9,
            },
          ],
          "name" => "city",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/countries/population/cities",
                  "parts" => [
                    "countries",
                    "population",
                    "cities",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/countries/population/cities/filter",
                  "parts" => [
                    "countries",
                    "population",
                    "cities",
                    "filter",
                  ],
                  "select" => {
                    "$action" => "filter",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 1,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/countries/state/cities",
                  "parts" => [
                    "countries",
                    "state",
                    "cities",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 2,
                },
              ],
              "key$" => "create",
            },
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "active" => true,
                  "args" => {},
                  "method" => "GET",
                  "orig" => "/countries/population/cities",
                  "parts" => [
                    "countries",
                    "population",
                    "cities",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "country" => {
          "fields" => [
            {
              "active" => true,
              "name" => "city",
              "req" => false,
              "type" => "`$ARRAY`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "code",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "country",
              "op" => {
                "list" => {
                  "req" => false,
                  "type" => "`$STRING`",
                },
              },
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "data",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 3,
            },
            {
              "active" => true,
              "name" => "error",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "index$" => 4,
            },
            {
              "active" => true,
              "name" => "flag",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 5,
            },
            {
              "active" => true,
              "name" => "iso2",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 6,
            },
            {
              "active" => true,
              "name" => "iso3",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 7,
            },
            {
              "active" => true,
              "name" => "lat",
              "req" => false,
              "type" => "`$NUMBER`",
              "index$" => 8,
            },
            {
              "active" => true,
              "name" => "long",
              "req" => false,
              "type" => "`$NUMBER`",
              "index$" => 9,
            },
            {
              "active" => true,
              "name" => "msg",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 10,
            },
            {
              "active" => true,
              "name" => "name",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 11,
            },
            {
              "active" => true,
              "name" => "population_count",
              "req" => false,
              "type" => "`$ARRAY`",
              "index$" => 12,
            },
          ],
          "name" => "country",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/countries/capital",
                  "parts" => [
                    "countries",
                    "capital",
                  ],
                  "select" => {
                    "$action" => "capital",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/countries/currency",
                  "parts" => [
                    "countries",
                    "currency",
                  ],
                  "select" => {
                    "$action" => "currency",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 1,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/countries/flag/images",
                  "parts" => [
                    "countries",
                    "flag",
                    "images",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 2,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/countries/iso",
                  "parts" => [
                    "countries",
                    "iso",
                  ],
                  "select" => {
                    "$action" => "iso",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 3,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/countries/population",
                  "parts" => [
                    "countries",
                    "population",
                  ],
                  "select" => {
                    "$action" => "population",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 4,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/countries/positions",
                  "parts" => [
                    "countries",
                    "positions",
                  ],
                  "select" => {
                    "$action" => "position",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 5,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/countries/states",
                  "parts" => [
                    "countries",
                    "states",
                  ],
                  "select" => {
                    "$action" => "state",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 6,
                },
              ],
              "key$" => "create",
            },
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "active" => true,
                  "args" => {},
                  "method" => "GET",
                  "orig" => "/countries",
                  "parts" => [
                    "countries",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "GET",
                  "orig" => "/countries/codes",
                  "parts" => [
                    "countries",
                    "codes",
                  ],
                  "select" => {
                    "$action" => "code",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 1,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "GET",
                  "orig" => "/countries/flag/images",
                  "parts" => [
                    "countries",
                    "flag",
                    "images",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 2,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "GET",
                  "orig" => "/countries/population",
                  "parts" => [
                    "countries",
                    "population",
                  ],
                  "select" => {
                    "$action" => "population",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 3,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "GET",
                  "orig" => "/countries/positions",
                  "parts" => [
                    "countries",
                    "positions",
                  ],
                  "select" => {
                    "$action" => "position",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 4,
                },
              ],
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    CountriesAndCitiesFeatures.make_feature(name)
  end
end
