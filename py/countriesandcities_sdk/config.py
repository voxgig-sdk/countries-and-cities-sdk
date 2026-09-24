# CountriesAndCities SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "CountriesAndCities",
            "slug": "countries-and-cities",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://countriesnow.space/api/v0.1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "city": {},
                "country": {},
            },
        },
        "entity": {
      "city": {
        "fields": [
          {
            "name": "city",
            "title": "City",
            "type": "`$STRING`",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "short": "City name",
          },
          {
            "name": "country",
            "title": "Country",
            "type": "`$STRING`",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "short": "Country name",
          },
          {
            "name": "data",
            "title": "Data",
            "type": "`$ARRAY`",
          },
          {
            "name": "error",
            "title": "Error",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "msg",
            "title": "Msg",
            "type": "`$STRING`",
          },
          {
            "name": "populationCounts",
            "title": "Population Counts",
            "type": "`$ARRAY`",
          },
          {
            "name": "state",
            "title": "State",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "name": "city",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/countries/population/cities",
                "segments": [
                  {
                    "lit": "countries",
                  },
                  {
                    "lit": "population",
                  },
                  {
                    "lit": "cities",
                  },
                ],
                "parts": [
                  "countries",
                  "population",
                  "cities",
                ],
                "rename": {},
                "transform": {
                  "req": {
                    "city": "`reqdata`",
                  },
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/countries/population/cities/filter",
                "segments": [
                  {
                    "lit": "countries",
                  },
                  {
                    "lit": "population",
                  },
                  {
                    "lit": "cities",
                  },
                  {
                    "lit": "filter",
                  },
                ],
                "parts": [
                  "countries",
                  "population",
                  "cities",
                  "filter",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {
                  "$action": "filter",
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/countries/state/cities",
                "segments": [
                  {
                    "lit": "countries",
                  },
                  {
                    "lit": "state",
                  },
                  {
                    "lit": "cities",
                  },
                ],
                "parts": [
                  "countries",
                  "state",
                  "cities",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/countries/population/cities",
                "segments": [
                  {
                    "lit": "countries",
                  },
                  {
                    "lit": "population",
                  },
                  {
                    "lit": "cities",
                  },
                ],
                "parts": [
                  "countries",
                  "population",
                  "cities",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "country": {
        "fields": [
          {
            "name": "cities",
            "title": "Cities",
            "type": "`$ARRAY`",
            "short": "List of cities in the country",
          },
          {
            "name": "country",
            "title": "Country",
            "type": "`$STRING`",
            "req": True,
            "op": {
              "list": {
                "type": "`$STRING`",
              },
            },
            "short": "Country name",
          },
          {
            "name": "flag",
            "title": "Flag",
            "type": "`$STRING`",
            "short": "URL to the country flag image",
            "format": "uri",
          },
          {
            "name": "iso2",
            "title": "Iso2",
            "type": "`$STRING`",
            "short": "ISO 3166-1 alpha-2 code",
          },
          {
            "name": "iso3",
            "title": "Iso3",
            "type": "`$STRING`",
            "short": "ISO 3166-1 alpha-3 code",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "Country name",
          },
        ],
        "name": "country",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/countries/capital",
                "segments": [
                  {
                    "lit": "countries",
                  },
                  {
                    "lit": "capital",
                  },
                ],
                "parts": [
                  "countries",
                  "capital",
                ],
                "rename": {},
                "transform": {
                  "req": {
                    "country": "`reqdata`",
                  },
                  "res": "`body.data`",
                },
                "args": {},
                "select": {
                  "$action": "capital",
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/countries/currency",
                "segments": [
                  {
                    "lit": "countries",
                  },
                  {
                    "lit": "currency",
                  },
                ],
                "parts": [
                  "countries",
                  "currency",
                ],
                "rename": {},
                "transform": {
                  "req": {
                    "country": "`reqdata`",
                  },
                  "res": "`body.data`",
                },
                "args": {},
                "select": {
                  "$action": "currency",
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/countries/flag/images",
                "segments": [
                  {
                    "lit": "countries",
                  },
                  {
                    "lit": "flag",
                  },
                  {
                    "lit": "images",
                  },
                ],
                "parts": [
                  "countries",
                  "flag",
                  "images",
                ],
                "rename": {},
                "transform": {
                  "req": {
                    "country": "`reqdata`",
                  },
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/countries/iso",
                "segments": [
                  {
                    "lit": "countries",
                  },
                  {
                    "lit": "iso",
                  },
                ],
                "parts": [
                  "countries",
                  "iso",
                ],
                "rename": {},
                "transform": {
                  "req": {
                    "country": "`reqdata`",
                  },
                  "res": "`body.data`",
                },
                "args": {},
                "select": {
                  "$action": "iso",
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/countries/population",
                "segments": [
                  {
                    "lit": "countries",
                  },
                  {
                    "lit": "population",
                  },
                ],
                "parts": [
                  "countries",
                  "population",
                ],
                "rename": {},
                "transform": {
                  "req": {
                    "country": "`reqdata`",
                  },
                  "res": "`body.data`",
                },
                "args": {},
                "select": {
                  "$action": "population",
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/countries/positions",
                "segments": [
                  {
                    "lit": "countries",
                  },
                  {
                    "lit": "positions",
                  },
                ],
                "parts": [
                  "countries",
                  "positions",
                ],
                "rename": {},
                "transform": {
                  "req": {
                    "country": "`reqdata`",
                  },
                  "res": "`body.data`",
                },
                "args": {},
                "select": {
                  "$action": "position",
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/countries/states",
                "segments": [
                  {
                    "lit": "countries",
                  },
                  {
                    "lit": "states",
                  },
                ],
                "parts": [
                  "countries",
                  "states",
                ],
                "rename": {},
                "transform": {
                  "req": {
                    "country": "`reqdata`",
                  },
                  "res": "`body.data`",
                },
                "args": {},
                "select": {
                  "$action": "state",
                },
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/countries",
                "segments": [
                  {
                    "lit": "countries",
                  },
                ],
                "parts": [
                  "countries",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/countries/codes",
                "segments": [
                  {
                    "lit": "countries",
                  },
                  {
                    "lit": "codes",
                  },
                ],
                "parts": [
                  "countries",
                  "codes",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {
                  "$action": "code",
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/countries/flag/images",
                "segments": [
                  {
                    "lit": "countries",
                  },
                  {
                    "lit": "flag",
                  },
                  {
                    "lit": "images",
                  },
                ],
                "parts": [
                  "countries",
                  "flag",
                  "images",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {},
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/countries/population",
                "segments": [
                  {
                    "lit": "countries",
                  },
                  {
                    "lit": "population",
                  },
                ],
                "parts": [
                  "countries",
                  "population",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {
                  "$action": "population",
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/countries/positions",
                "segments": [
                  {
                    "lit": "countries",
                  },
                  {
                    "lit": "positions",
                  },
                ],
                "parts": [
                  "countries",
                  "positions",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {},
                "select": {
                  "$action": "position",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
