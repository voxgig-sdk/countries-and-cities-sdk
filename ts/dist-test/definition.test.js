"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
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
        "query": [],
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
                            "reliabilty": "x",
                            "sex": "x",
                            "value": "x",
                            "year": "x"
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
        "query": [],
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
                            "reliabilty": "x",
                            "sex": "x",
                            "value": "x",
                            "year": "x"
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
        "query": [],
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
        "query": [],
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
        "query": [],
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
        "query": [],
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
        "query": [],
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
                        "value": 1,
                        "year": 1
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
        "query": [],
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
        "query": [],
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
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "error": true,
            "msg": "x",
            "data": [
                {
                    "code": "x",
                    "name": "x"
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
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "error": true,
            "msg": "x",
            "data": [
                {
                    "code": "x",
                    "country": "x",
                    "iso3": "x",
                    "populationCounts": [
                        {
                            "value": 1,
                            "year": 1
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
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "error": true,
            "msg": "x",
            "data": [
                {
                    "iso2": "x",
                    "lat": 1,
                    "long": 1,
                    "name": "x"
                }
            ]
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map