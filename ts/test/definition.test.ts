import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "city",
    "accessor": "City",
    "op": "create",
    "method": "POST",
    "path": "/countries/population/cities/filter",
    "action": "filter",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "error": true,
      "msg": "x",
      "data": [
        {
          "city": "x",
          "country": "x",
          "populationCounts": [
            {
              "year": "x",
              "value": "x",
              "sex": "x",
              "reliabilty": "x"
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "city",
    "accessor": "City",
    "op": "list",
    "method": "GET",
    "path": "/countries/population/cities",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "error": true,
      "msg": "x",
      "data": [
        {
          "city": "x",
          "country": "x",
          "populationCounts": [
            {
              "year": "x",
              "value": "x",
              "sex": "x",
              "reliabilty": "x"
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "country",
    "accessor": "Country",
    "op": "create",
    "method": "POST",
    "path": "/countries/capital",
    "action": "capital",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "error": true,
      "msg": "x",
      "data": {
        "name": "x",
        "capital": "x",
        "iso2": "x",
        "iso3": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "country",
    "accessor": "Country",
    "op": "create",
    "method": "POST",
    "path": "/countries/currency",
    "action": "currency",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "error": true,
      "msg": "x",
      "data": {
        "name": "x",
        "currency": "x",
        "iso2": "x",
        "iso3": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "country",
    "accessor": "Country",
    "op": "create",
    "method": "POST",
    "path": "/countries/flag/images",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "error": true,
      "msg": "x",
      "data": {
        "name": "x",
        "flag": "x",
        "iso2": "x",
        "iso3": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "country",
    "accessor": "Country",
    "op": "create",
    "method": "POST",
    "path": "/countries/iso",
    "action": "iso",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "error": true,
      "msg": "x",
      "data": {
        "name": "x",
        "Iso2": "x",
        "Iso3": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "country",
    "accessor": "Country",
    "op": "create",
    "method": "POST",
    "path": "/countries/population",
    "action": "population",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "error": true,
      "msg": "x",
      "data": {
        "country": "x",
        "code": "x",
        "iso3": "x",
        "populationCounts": [
          {
            "year": 1,
            "value": 1
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "country",
    "accessor": "Country",
    "op": "create",
    "method": "POST",
    "path": "/countries/positions",
    "action": "position",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "error": true,
      "msg": "x",
      "data": {
        "name": "x",
        "iso2": "x",
        "long": 1,
        "lat": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "country",
    "accessor": "Country",
    "op": "create",
    "method": "POST",
    "path": "/countries/states",
    "action": "state",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "error": true,
      "msg": "x",
      "data": {
        "name": "x",
        "iso3": "x",
        "states": [
          {
            "name": "x",
            "state_code": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "country",
    "accessor": "Country",
    "op": "list",
    "method": "GET",
    "path": "/countries/codes",
    "action": "code",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "error": true,
      "msg": "x",
      "data": [
        {
          "name": "x",
          "code": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "country",
    "accessor": "Country",
    "op": "list",
    "method": "GET",
    "path": "/countries/population",
    "action": "population",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "error": true,
      "msg": "x",
      "data": [
        {
          "country": "x",
          "code": "x",
          "iso3": "x",
          "populationCounts": [
            {
              "year": 1,
              "value": 1
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "country",
    "accessor": "Country",
    "op": "list",
    "method": "GET",
    "path": "/countries/positions",
    "action": "position",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "error": true,
      "msg": "x",
      "data": [
        {
          "name": "x",
          "iso2": "x",
          "long": 1,
          "lat": 1
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
