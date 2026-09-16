"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'CountriesAndCities',
        slug: "countries-and-cities",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
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
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://countriesnow.space/api/v0.1",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            city: {},
            country: {},
        }
    };
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
                    "short": "City name",
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
                    "short": "Country name",
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
                            "segments": [
                                {
                                    "lit": "countries"
                                },
                                {
                                    "lit": "population"
                                },
                                {
                                    "lit": "cities"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": {
                                    "city": "`reqdata`"
                                },
                                "res": "`body.data`"
                            },
                            "parts": [
                                "countries",
                                "population",
                                "cities"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/countries/population/cities/filter",
                            "segments": [
                                {
                                    "lit": "countries"
                                },
                                {
                                    "lit": "population"
                                },
                                {
                                    "lit": "cities"
                                },
                                {
                                    "lit": "filter"
                                }
                            ],
                            "select": {
                                "$action": "filter"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "countries",
                                "population",
                                "cities",
                                "filter"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/countries/state/cities",
                            "segments": [
                                {
                                    "lit": "countries"
                                },
                                {
                                    "lit": "state"
                                },
                                {
                                    "lit": "cities"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "countries",
                                "state",
                                "cities"
                            ]
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
                            "segments": [
                                {
                                    "lit": "countries"
                                },
                                {
                                    "lit": "population"
                                },
                                {
                                    "lit": "cities"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "countries",
                                "population",
                                "cities"
                            ]
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
                    "short": "List of cities in the country",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "code",
                    "short": "Country code",
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
                    "short": "Country name",
                    "type": "`$STRING`"
                },
                {
                    "name": "currency",
                    "type": "`$STRING`"
                },
                {
                    "format": "uri",
                    "name": "flag",
                    "short": "URL to the country flag image",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso2",
                    "short": "ISO 3166-1 alpha-2 code",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso3",
                    "short": "ISO 3166-1 alpha-3 code",
                    "type": "`$STRING`"
                },
                {
                    "format": "double",
                    "name": "lat",
                    "short": "Latitude",
                    "type": "`$NUMBER`"
                },
                {
                    "format": "double",
                    "name": "long",
                    "short": "Longitude",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "name",
                    "short": "Country name",
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
                            "segments": [
                                {
                                    "lit": "countries"
                                },
                                {
                                    "lit": "capital"
                                }
                            ],
                            "select": {
                                "$action": "capital"
                            },
                            "transform": {
                                "req": {
                                    "country": "`reqdata`"
                                },
                                "res": "`body.data`"
                            },
                            "parts": [
                                "countries",
                                "capital"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/countries/currency",
                            "segments": [
                                {
                                    "lit": "countries"
                                },
                                {
                                    "lit": "currency"
                                }
                            ],
                            "select": {
                                "$action": "currency"
                            },
                            "transform": {
                                "req": {
                                    "country": "`reqdata`"
                                },
                                "res": "`body.data`"
                            },
                            "parts": [
                                "countries",
                                "currency"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/countries/flag/images",
                            "segments": [
                                {
                                    "lit": "countries"
                                },
                                {
                                    "lit": "flag"
                                },
                                {
                                    "lit": "images"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": {
                                    "country": "`reqdata`"
                                },
                                "res": "`body.data`"
                            },
                            "parts": [
                                "countries",
                                "flag",
                                "images"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/countries/iso",
                            "segments": [
                                {
                                    "lit": "countries"
                                },
                                {
                                    "lit": "iso"
                                }
                            ],
                            "select": {
                                "$action": "iso"
                            },
                            "transform": {
                                "req": {
                                    "country": "`reqdata`"
                                },
                                "res": "`body.data`"
                            },
                            "parts": [
                                "countries",
                                "iso"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/countries/population",
                            "segments": [
                                {
                                    "lit": "countries"
                                },
                                {
                                    "lit": "population"
                                }
                            ],
                            "select": {
                                "$action": "population"
                            },
                            "transform": {
                                "req": {
                                    "country": "`reqdata`"
                                },
                                "res": "`body.data`"
                            },
                            "parts": [
                                "countries",
                                "population"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/countries/positions",
                            "segments": [
                                {
                                    "lit": "countries"
                                },
                                {
                                    "lit": "positions"
                                }
                            ],
                            "select": {
                                "$action": "position"
                            },
                            "transform": {
                                "req": {
                                    "country": "`reqdata`"
                                },
                                "res": "`body.data`"
                            },
                            "parts": [
                                "countries",
                                "positions"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/countries/states",
                            "segments": [
                                {
                                    "lit": "countries"
                                },
                                {
                                    "lit": "states"
                                }
                            ],
                            "select": {
                                "$action": "state"
                            },
                            "transform": {
                                "req": {
                                    "country": "`reqdata`"
                                },
                                "res": "`body.data`"
                            },
                            "parts": [
                                "countries",
                                "states"
                            ]
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
                            "segments": [
                                {
                                    "lit": "countries"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "countries"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/countries/codes",
                            "segments": [
                                {
                                    "lit": "countries"
                                },
                                {
                                    "lit": "codes"
                                }
                            ],
                            "select": {
                                "$action": "code"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "countries",
                                "codes"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/countries/flag/images",
                            "segments": [
                                {
                                    "lit": "countries"
                                },
                                {
                                    "lit": "flag"
                                },
                                {
                                    "lit": "images"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "countries",
                                "flag",
                                "images"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/countries/population",
                            "segments": [
                                {
                                    "lit": "countries"
                                },
                                {
                                    "lit": "population"
                                }
                            ],
                            "select": {
                                "$action": "population"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "countries",
                                "population"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/countries/positions",
                            "segments": [
                                {
                                    "lit": "countries"
                                },
                                {
                                    "lit": "positions"
                                }
                            ],
                            "select": {
                                "$action": "position"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "countries",
                                "positions"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map