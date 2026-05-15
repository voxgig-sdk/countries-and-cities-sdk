
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://countriesnow.space/api/v0.1',

    auth: {
      prefix: 'Bearer',
    },

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
            "list": {
              "req": false,
              "type": "`$STRING`"
            }
          },
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "country",
          "op": {
            "list": {
              "req": false,
              "type": "`$STRING`"
            }
          },
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "data",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 2
        },
        {
          "name": "error",
          "req": false,
          "type": "`$BOOLEAN`",
          "active": true,
          "index$": 3
        },
        {
          "name": "limit",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 4
        },
        {
          "name": "msg",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 5
        },
        {
          "name": "order",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 6
        },
        {
          "name": "order_by",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 7
        },
        {
          "name": "population_count",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 8
        },
        {
          "name": "state",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 9
        }
      ],
      "name": "city",
      "op": {
        "create": {
          "name": "create",
          "points": [
            {
              "method": "POST",
              "orig": "/countries/population/cities",
              "parts": [
                "countries",
                "population",
                "cities"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 0
            },
            {
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
              },
              "active": true,
              "args": {},
              "index$": 1
            },
            {
              "method": "POST",
              "orig": "/countries/state/cities",
              "parts": [
                "countries",
                "state",
                "cities"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 2
            }
          ],
          "input": "data",
          "key$": "create"
        },
        "list": {
          "name": "list",
          "points": [
            {
              "method": "GET",
              "orig": "/countries/population/cities",
              "parts": [
                "countries",
                "population",
                "cities"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "country": {
      "fields": [
        {
          "name": "city",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 0
        },
        {
          "name": "code",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "country",
          "op": {
            "list": {
              "req": false,
              "type": "`$STRING`"
            }
          },
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "data",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 3
        },
        {
          "name": "error",
          "req": false,
          "type": "`$BOOLEAN`",
          "active": true,
          "index$": 4
        },
        {
          "name": "flag",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 5
        },
        {
          "name": "iso2",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 6
        },
        {
          "name": "iso3",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 7
        },
        {
          "name": "lat",
          "req": false,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 8
        },
        {
          "name": "long",
          "req": false,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 9
        },
        {
          "name": "msg",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 10
        },
        {
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 11
        },
        {
          "name": "population_count",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 12
        }
      ],
      "name": "country",
      "op": {
        "create": {
          "name": "create",
          "points": [
            {
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
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "index$": 0
            },
            {
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
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "index$": 1
            },
            {
              "method": "POST",
              "orig": "/countries/flag/images",
              "parts": [
                "countries",
                "flag",
                "images"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 2
            },
            {
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
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "index$": 3
            },
            {
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
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "index$": 4
            },
            {
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
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "index$": 5
            },
            {
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
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "index$": 6
            }
          ],
          "input": "data",
          "key$": "create"
        },
        "list": {
          "name": "list",
          "points": [
            {
              "method": "GET",
              "orig": "/countries",
              "parts": [
                "countries"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 0
            },
            {
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
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "index$": 1
            },
            {
              "method": "GET",
              "orig": "/countries/flag/images",
              "parts": [
                "countries",
                "flag",
                "images"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 2
            },
            {
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
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "index$": 3
            },
            {
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
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "index$": 4
            }
          ],
          "input": "data",
          "key$": "list"
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

