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
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
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
                    "title": "City",
                    "type": "`$STRING`",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "City name"
                },
                {
                    "name": "country",
                    "title": "Country",
                    "type": "`$STRING`",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "Country name"
                },
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "error",
                    "title": "Error",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "msg",
                    "title": "Msg",
                    "type": "`$STRING`"
                },
                {
                    "name": "populationCounts",
                    "title": "Population Counts",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "state",
                    "title": "State",
                    "type": "`$STRING`",
                    "req": true
                }
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
                                    "lit": "countries"
                                },
                                {
                                    "lit": "population"
                                },
                                {
                                    "lit": "cities"
                                }
                            ],
                            "parts": [
                                "countries",
                                "population",
                                "cities"
                            ],
                            "rename": {},
                            "transform": {
                                "req": {
                                    "city": "`reqdata`"
                                },
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
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
                            "parts": [
                                "countries",
                                "population",
                                "cities",
                                "filter"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {
                                "$action": "filter"
                            }
                        },
                        {
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
                            "parts": [
                                "countries",
                                "state",
                                "cities"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
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
                                    "lit": "countries"
                                },
                                {
                                    "lit": "population"
                                },
                                {
                                    "lit": "cities"
                                }
                            ],
                            "parts": [
                                "countries",
                                "population",
                                "cities"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
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
                    "name": "cities",
                    "title": "Cities",
                    "type": "`$ARRAY`",
                    "short": "List of cities in the country"
                },
                {
                    "name": "country",
                    "title": "Country",
                    "type": "`$STRING`",
                    "req": true,
                    "op": {
                        "list": {
                            "type": "`$STRING`"
                        }
                    },
                    "short": "Country name"
                },
                {
                    "name": "flag",
                    "title": "Flag",
                    "type": "`$STRING`",
                    "short": "URL to the country flag image",
                    "format": "uri"
                },
                {
                    "name": "iso2",
                    "title": "Iso2",
                    "type": "`$STRING`",
                    "short": "ISO 3166-1 alpha-2 code"
                },
                {
                    "name": "iso3",
                    "title": "Iso3",
                    "type": "`$STRING`",
                    "short": "ISO 3166-1 alpha-3 code"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "short": "Country name"
                }
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
                                    "lit": "countries"
                                },
                                {
                                    "lit": "capital"
                                }
                            ],
                            "parts": [
                                "countries",
                                "capital"
                            ],
                            "rename": {},
                            "transform": {
                                "req": {
                                    "country": "`reqdata`"
                                },
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {
                                "$action": "capital"
                            }
                        },
                        {
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
                            "parts": [
                                "countries",
                                "currency"
                            ],
                            "rename": {},
                            "transform": {
                                "req": {
                                    "country": "`reqdata`"
                                },
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {
                                "$action": "currency"
                            }
                        },
                        {
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
                            "parts": [
                                "countries",
                                "flag",
                                "images"
                            ],
                            "rename": {},
                            "transform": {
                                "req": {
                                    "country": "`reqdata`"
                                },
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
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
                            "parts": [
                                "countries",
                                "iso"
                            ],
                            "rename": {},
                            "transform": {
                                "req": {
                                    "country": "`reqdata`"
                                },
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {
                                "$action": "iso"
                            }
                        },
                        {
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
                            "parts": [
                                "countries",
                                "population"
                            ],
                            "rename": {},
                            "transform": {
                                "req": {
                                    "country": "`reqdata`"
                                },
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {
                                "$action": "population"
                            }
                        },
                        {
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
                            "parts": [
                                "countries",
                                "positions"
                            ],
                            "rename": {},
                            "transform": {
                                "req": {
                                    "country": "`reqdata`"
                                },
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {
                                "$action": "position"
                            }
                        },
                        {
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
                            "parts": [
                                "countries",
                                "states"
                            ],
                            "rename": {},
                            "transform": {
                                "req": {
                                    "country": "`reqdata`"
                                },
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {
                                "$action": "state"
                            }
                        }
                    ]
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
                                    "lit": "countries"
                                }
                            ],
                            "parts": [
                                "countries"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
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
                            "parts": [
                                "countries",
                                "codes"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {
                                "$action": "code"
                            }
                        },
                        {
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
                            "parts": [
                                "countries",
                                "flag",
                                "images"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
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
                            "parts": [
                                "countries",
                                "population"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {
                                "$action": "population"
                            }
                        },
                        {
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
                            "parts": [
                                "countries",
                                "positions"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {
                                "$action": "position"
                            }
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