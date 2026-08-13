# CountriesAndCities SDK configuration


def make_config():
    return {
        "main": {
            "name": "CountriesAndCities",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
            "active": True,
            "name": "city",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "country",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "data",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "error",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "limit",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "msg",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "order",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "orderBy",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "populationCounts",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "state",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
        ],
        "name": "city",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/countries/population/cities",
                "parts": [
                  "countries",
                  "population",
                  "cities",
                ],
                "select": {},
                "transform": {
                  "req": {
                    "city": "`reqdata`",
                  },
                  "res": "`body.data`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/countries/population/cities/filter",
                "parts": [
                  "countries",
                  "population",
                  "cities",
                  "filter",
                ],
                "select": {
                  "$action": "filter",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/countries/state/cities",
                "parts": [
                  "countries",
                  "state",
                  "cities",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 2,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/countries/population/cities",
                "parts": [
                  "countries",
                  "population",
                  "cities",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "country": {
        "fields": [
          {
            "active": True,
            "name": "Iso2",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "Iso3",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "capital",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "cities",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "code",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "country",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "list": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "currency",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "flag",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "iso2",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "iso3",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "lat",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "long",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "populationCounts",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "states",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 14,
          },
        ],
        "name": "country",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/countries/capital",
                "parts": [
                  "countries",
                  "capital",
                ],
                "select": {
                  "$action": "capital",
                },
                "transform": {
                  "req": {
                    "country": "`reqdata`",
                  },
                  "res": "`body.data`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/countries/currency",
                "parts": [
                  "countries",
                  "currency",
                ],
                "select": {
                  "$action": "currency",
                },
                "transform": {
                  "req": {
                    "country": "`reqdata`",
                  },
                  "res": "`body.data`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/countries/flag/images",
                "parts": [
                  "countries",
                  "flag",
                  "images",
                ],
                "select": {},
                "transform": {
                  "req": {
                    "country": "`reqdata`",
                  },
                  "res": "`body.data`",
                },
                "index$": 2,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/countries/iso",
                "parts": [
                  "countries",
                  "iso",
                ],
                "select": {
                  "$action": "iso",
                },
                "transform": {
                  "req": {
                    "country": "`reqdata`",
                  },
                  "res": "`body.data`",
                },
                "index$": 3,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/countries/population",
                "parts": [
                  "countries",
                  "population",
                ],
                "select": {
                  "$action": "population",
                },
                "transform": {
                  "req": {
                    "country": "`reqdata`",
                  },
                  "res": "`body.data`",
                },
                "index$": 4,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/countries/positions",
                "parts": [
                  "countries",
                  "positions",
                ],
                "select": {
                  "$action": "position",
                },
                "transform": {
                  "req": {
                    "country": "`reqdata`",
                  },
                  "res": "`body.data`",
                },
                "index$": 5,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/countries/states",
                "parts": [
                  "countries",
                  "states",
                ],
                "select": {
                  "$action": "state",
                },
                "transform": {
                  "req": {
                    "country": "`reqdata`",
                  },
                  "res": "`body.data`",
                },
                "index$": 6,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/countries",
                "parts": [
                  "countries",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/countries/codes",
                "parts": [
                  "countries",
                  "codes",
                ],
                "select": {
                  "$action": "code",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/countries/flag/images",
                "parts": [
                  "countries",
                  "flag",
                  "images",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 2,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/countries/population",
                "parts": [
                  "countries",
                  "population",
                ],
                "select": {
                  "$action": "population",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 3,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/countries/positions",
                "parts": [
                  "countries",
                  "positions",
                ],
                "select": {
                  "$action": "position",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 4,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
