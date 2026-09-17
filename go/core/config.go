package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "CountriesAndCities",
			"slug": "countries-and-cities",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://countriesnow.space/api/v0.1",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"city": map[string]any{},
				"country": map[string]any{},
			},
		},
		"entity": map[string]any{
			"city": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "city",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "City name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "country",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Country name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "error",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "msg",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "populationCounts",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "state",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "city",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/countries/population/cities",
								"segments": []any{
									map[string]any{
										"lit": "countries",
									},
									map[string]any{
										"lit": "population",
									},
									map[string]any{
										"lit": "cities",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"city": "`reqdata`",
									},
									"res": "`body.data`",
								},
								"parts": []any{
									"countries",
									"population",
									"cities",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/countries/population/cities/filter",
								"segments": []any{
									map[string]any{
										"lit": "countries",
									},
									map[string]any{
										"lit": "population",
									},
									map[string]any{
										"lit": "cities",
									},
									map[string]any{
										"lit": "filter",
									},
								},
								"select": map[string]any{
									"$action": "filter",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"countries",
									"population",
									"cities",
									"filter",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/countries/state/cities",
								"segments": []any{
									map[string]any{
										"lit": "countries",
									},
									map[string]any{
										"lit": "state",
									},
									map[string]any{
										"lit": "cities",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"countries",
									"state",
									"cities",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/countries/population/cities",
								"segments": []any{
									map[string]any{
										"lit": "countries",
									},
									map[string]any{
										"lit": "population",
									},
									map[string]any{
										"lit": "cities",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"countries",
									"population",
									"cities",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"country": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cities",
						"short": "List of cities in the country",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "country",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "Country name",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "flag",
						"short": "URL to the country flag image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "iso2",
						"short": "ISO 3166-1 alpha-2 code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "iso3",
						"short": "ISO 3166-1 alpha-3 code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Country name",
						"type": "`$STRING`",
					},
				},
				"name": "country",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/countries/capital",
								"segments": []any{
									map[string]any{
										"lit": "countries",
									},
									map[string]any{
										"lit": "capital",
									},
								},
								"select": map[string]any{
									"$action": "capital",
								},
								"transform": map[string]any{
									"req": map[string]any{
										"country": "`reqdata`",
									},
									"res": "`body.data`",
								},
								"parts": []any{
									"countries",
									"capital",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/countries/currency",
								"segments": []any{
									map[string]any{
										"lit": "countries",
									},
									map[string]any{
										"lit": "currency",
									},
								},
								"select": map[string]any{
									"$action": "currency",
								},
								"transform": map[string]any{
									"req": map[string]any{
										"country": "`reqdata`",
									},
									"res": "`body.data`",
								},
								"parts": []any{
									"countries",
									"currency",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/countries/flag/images",
								"segments": []any{
									map[string]any{
										"lit": "countries",
									},
									map[string]any{
										"lit": "flag",
									},
									map[string]any{
										"lit": "images",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"country": "`reqdata`",
									},
									"res": "`body.data`",
								},
								"parts": []any{
									"countries",
									"flag",
									"images",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/countries/iso",
								"segments": []any{
									map[string]any{
										"lit": "countries",
									},
									map[string]any{
										"lit": "iso",
									},
								},
								"select": map[string]any{
									"$action": "iso",
								},
								"transform": map[string]any{
									"req": map[string]any{
										"country": "`reqdata`",
									},
									"res": "`body.data`",
								},
								"parts": []any{
									"countries",
									"iso",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/countries/population",
								"segments": []any{
									map[string]any{
										"lit": "countries",
									},
									map[string]any{
										"lit": "population",
									},
								},
								"select": map[string]any{
									"$action": "population",
								},
								"transform": map[string]any{
									"req": map[string]any{
										"country": "`reqdata`",
									},
									"res": "`body.data`",
								},
								"parts": []any{
									"countries",
									"population",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/countries/positions",
								"segments": []any{
									map[string]any{
										"lit": "countries",
									},
									map[string]any{
										"lit": "positions",
									},
								},
								"select": map[string]any{
									"$action": "position",
								},
								"transform": map[string]any{
									"req": map[string]any{
										"country": "`reqdata`",
									},
									"res": "`body.data`",
								},
								"parts": []any{
									"countries",
									"positions",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/countries/states",
								"segments": []any{
									map[string]any{
										"lit": "countries",
									},
									map[string]any{
										"lit": "states",
									},
								},
								"select": map[string]any{
									"$action": "state",
								},
								"transform": map[string]any{
									"req": map[string]any{
										"country": "`reqdata`",
									},
									"res": "`body.data`",
								},
								"parts": []any{
									"countries",
									"states",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/countries",
								"segments": []any{
									map[string]any{
										"lit": "countries",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"countries",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/countries/codes",
								"segments": []any{
									map[string]any{
										"lit": "countries",
									},
									map[string]any{
										"lit": "codes",
									},
								},
								"select": map[string]any{
									"$action": "code",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"countries",
									"codes",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/countries/flag/images",
								"segments": []any{
									map[string]any{
										"lit": "countries",
									},
									map[string]any{
										"lit": "flag",
									},
									map[string]any{
										"lit": "images",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"countries",
									"flag",
									"images",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/countries/population",
								"segments": []any{
									map[string]any{
										"lit": "countries",
									},
									map[string]any{
										"lit": "population",
									},
								},
								"select": map[string]any{
									"$action": "population",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"countries",
									"population",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/countries/positions",
								"segments": []any{
									map[string]any{
										"lit": "countries",
									},
									map[string]any{
										"lit": "positions",
									},
								},
								"select": map[string]any{
									"$action": "position",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"countries",
									"positions",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
