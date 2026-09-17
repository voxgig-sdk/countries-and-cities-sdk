# CountriesAndCities SDK configuration

module CountriesAndCitiesConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "CountriesAndCities",
        "slug" => "countries-and-cities",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
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
              "name" => "city",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
              "short" => "City name",
              "type" => "`$STRING`",
            },
            {
              "name" => "country",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
              "short" => "Country name",
              "type" => "`$STRING`",
            },
            {
              "name" => "data",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "error",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "msg",
              "type" => "`$STRING`",
            },
            {
              "name" => "populationCounts",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "state",
              "req" => true,
              "type" => "`$STRING`",
            },
          ],
          "name" => "city",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/countries/population/cities",
                  "segments" => [
                    {
                      "lit" => "countries",
                    },
                    {
                      "lit" => "population",
                    },
                    {
                      "lit" => "cities",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => {
                      "city" => "`reqdata`",
                    },
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "countries",
                    "population",
                    "cities",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/countries/population/cities/filter",
                  "segments" => [
                    {
                      "lit" => "countries",
                    },
                    {
                      "lit" => "population",
                    },
                    {
                      "lit" => "cities",
                    },
                    {
                      "lit" => "filter",
                    },
                  ],
                  "select" => {
                    "$action" => "filter",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "countries",
                    "population",
                    "cities",
                    "filter",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/countries/state/cities",
                  "segments" => [
                    {
                      "lit" => "countries",
                    },
                    {
                      "lit" => "state",
                    },
                    {
                      "lit" => "cities",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "countries",
                    "state",
                    "cities",
                  ],
                },
              ],
            },
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/countries/population/cities",
                  "segments" => [
                    {
                      "lit" => "countries",
                    },
                    {
                      "lit" => "population",
                    },
                    {
                      "lit" => "cities",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "countries",
                    "population",
                    "cities",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "country" => {
          "fields" => [
            {
              "name" => "cities",
              "short" => "List of cities in the country",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "country",
              "op" => {
                "list" => {
                  "type" => "`$STRING`",
                },
              },
              "req" => true,
              "short" => "Country name",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "flag",
              "short" => "URL to the country flag image",
              "type" => "`$STRING`",
            },
            {
              "name" => "iso2",
              "short" => "ISO 3166-1 alpha-2 code",
              "type" => "`$STRING`",
            },
            {
              "name" => "iso3",
              "short" => "ISO 3166-1 alpha-3 code",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "short" => "Country name",
              "type" => "`$STRING`",
            },
          ],
          "name" => "country",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/countries/capital",
                  "segments" => [
                    {
                      "lit" => "countries",
                    },
                    {
                      "lit" => "capital",
                    },
                  ],
                  "select" => {
                    "$action" => "capital",
                  },
                  "transform" => {
                    "req" => {
                      "country" => "`reqdata`",
                    },
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "countries",
                    "capital",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/countries/currency",
                  "segments" => [
                    {
                      "lit" => "countries",
                    },
                    {
                      "lit" => "currency",
                    },
                  ],
                  "select" => {
                    "$action" => "currency",
                  },
                  "transform" => {
                    "req" => {
                      "country" => "`reqdata`",
                    },
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "countries",
                    "currency",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/countries/flag/images",
                  "segments" => [
                    {
                      "lit" => "countries",
                    },
                    {
                      "lit" => "flag",
                    },
                    {
                      "lit" => "images",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => {
                      "country" => "`reqdata`",
                    },
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "countries",
                    "flag",
                    "images",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/countries/iso",
                  "segments" => [
                    {
                      "lit" => "countries",
                    },
                    {
                      "lit" => "iso",
                    },
                  ],
                  "select" => {
                    "$action" => "iso",
                  },
                  "transform" => {
                    "req" => {
                      "country" => "`reqdata`",
                    },
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "countries",
                    "iso",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/countries/population",
                  "segments" => [
                    {
                      "lit" => "countries",
                    },
                    {
                      "lit" => "population",
                    },
                  ],
                  "select" => {
                    "$action" => "population",
                  },
                  "transform" => {
                    "req" => {
                      "country" => "`reqdata`",
                    },
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "countries",
                    "population",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/countries/positions",
                  "segments" => [
                    {
                      "lit" => "countries",
                    },
                    {
                      "lit" => "positions",
                    },
                  ],
                  "select" => {
                    "$action" => "position",
                  },
                  "transform" => {
                    "req" => {
                      "country" => "`reqdata`",
                    },
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "countries",
                    "positions",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/countries/states",
                  "segments" => [
                    {
                      "lit" => "countries",
                    },
                    {
                      "lit" => "states",
                    },
                  ],
                  "select" => {
                    "$action" => "state",
                  },
                  "transform" => {
                    "req" => {
                      "country" => "`reqdata`",
                    },
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "countries",
                    "states",
                  ],
                },
              ],
            },
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/countries",
                  "segments" => [
                    {
                      "lit" => "countries",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "countries",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/countries/codes",
                  "segments" => [
                    {
                      "lit" => "countries",
                    },
                    {
                      "lit" => "codes",
                    },
                  ],
                  "select" => {
                    "$action" => "code",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "countries",
                    "codes",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/countries/flag/images",
                  "segments" => [
                    {
                      "lit" => "countries",
                    },
                    {
                      "lit" => "flag",
                    },
                    {
                      "lit" => "images",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "countries",
                    "flag",
                    "images",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/countries/population",
                  "segments" => [
                    {
                      "lit" => "countries",
                    },
                    {
                      "lit" => "population",
                    },
                  ],
                  "select" => {
                    "$action" => "population",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "countries",
                    "population",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/countries/positions",
                  "segments" => [
                    {
                      "lit" => "countries",
                    },
                    {
                      "lit" => "positions",
                    },
                  ],
                  "select" => {
                    "$action" => "position",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "countries",
                    "positions",
                  ],
                },
              ],
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
