
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'CountriesAndCities',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://countriesnow.space/api/v0.1",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      city: {
      },

      country: {
      },

    }
  }


  entity = {
    "city": {
      "fields": [
        {
          "name": "city",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "type": "`$STRING`"
        },
        {
          "name": "country",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "type": "`$STRING`"
        },
        {
          "name": "data",
          "type": "`$ARRAY`"
        },
        {
          "name": "error",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "limit",
          "type": "`$INTEGER`"
        },
        {
          "name": "msg",
          "type": "`$STRING`"
        },
        {
          "name": "order",
          "type": "`$STRING`"
        },
        {
          "name": "orderBy",
          "type": "`$STRING`"
        },
        {
          "name": "populationCounts",
          "type": "`$ARRAY`"
        },
        {
          "name": "state",
          "req": true,
          "type": "`$STRING`"
        }
      ],
      "name": "city",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/countries/population/cities",
              "parts": [
                "countries",
                "population",
                "cities"
              ],
              "select": {},
              "transform": {
                "req": {
                  "city": "`reqdata`"
                },
                "res": "`body.data`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/countries/population/cities/filter",
              "parts": [
                "countries",
                "population",
                "cities",
                "filter"
              ],
              "select": {
                "$action": "filter"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/countries/state/cities",
              "parts": [
                "countries",
                "state",
                "cities"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/countries/population/cities",
              "parts": [
                "countries",
                "population",
                "cities"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "country": {
      "fields": [
        {
          "name": "Iso2",
          "type": "`$STRING`"
        },
        {
          "name": "Iso3",
          "type": "`$STRING`"
        },
        {
          "name": "capital",
          "type": "`$STRING`"
        },
        {
          "name": "cities",
          "type": "`$ARRAY`"
        },
        {
          "name": "code",
          "type": "`$STRING`"
        },
        {
          "name": "country",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "list": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "currency",
          "type": "`$STRING`"
        },
        {
          "name": "flag",
          "type": "`$STRING`"
        },
        {
          "name": "iso2",
          "type": "`$STRING`"
        },
        {
          "name": "iso3",
          "type": "`$STRING`"
        },
        {
          "name": "lat",
          "type": "`$NUMBER`"
        },
        {
          "name": "long",
          "type": "`$NUMBER`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "populationCounts",
          "type": "`$ARRAY`"
        },
        {
          "name": "states",
          "type": "`$ARRAY`"
        }
      ],
      "name": "country",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/countries/capital",
              "parts": [
                "countries",
                "capital"
              ],
              "select": {
                "$action": "capital"
              },
              "transform": {
                "req": {
                  "country": "`reqdata`"
                },
                "res": "`body.data`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/countries/currency",
              "parts": [
                "countries",
                "currency"
              ],
              "select": {
                "$action": "currency"
              },
              "transform": {
                "req": {
                  "country": "`reqdata`"
                },
                "res": "`body.data`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/countries/flag/images",
              "parts": [
                "countries",
                "flag",
                "images"
              ],
              "select": {},
              "transform": {
                "req": {
                  "country": "`reqdata`"
                },
                "res": "`body.data`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/countries/iso",
              "parts": [
                "countries",
                "iso"
              ],
              "select": {
                "$action": "iso"
              },
              "transform": {
                "req": {
                  "country": "`reqdata`"
                },
                "res": "`body.data`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/countries/population",
              "parts": [
                "countries",
                "population"
              ],
              "select": {
                "$action": "population"
              },
              "transform": {
                "req": {
                  "country": "`reqdata`"
                },
                "res": "`body.data`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/countries/positions",
              "parts": [
                "countries",
                "positions"
              ],
              "select": {
                "$action": "position"
              },
              "transform": {
                "req": {
                  "country": "`reqdata`"
                },
                "res": "`body.data`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/countries/states",
              "parts": [
                "countries",
                "states"
              ],
              "select": {
                "$action": "state"
              },
              "transform": {
                "req": {
                  "country": "`reqdata`"
                },
                "res": "`body.data`"
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/countries",
              "parts": [
                "countries"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/countries/codes",
              "parts": [
                "countries",
                "codes"
              ],
              "select": {
                "$action": "code"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/countries/flag/images",
              "parts": [
                "countries",
                "flag",
                "images"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/countries/population",
              "parts": [
                "countries",
                "population"
              ],
              "select": {
                "$action": "population"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/countries/positions",
              "parts": [
                "countries",
                "positions"
              ],
              "select": {
                "$action": "position"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

