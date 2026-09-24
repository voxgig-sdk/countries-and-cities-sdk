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
						"title": "City",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "City name",
					},
					map[string]any{
						"name": "country",
						"title": "Country",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Country name",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "error",
						"title": "Error",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "msg",
						"title": "Msg",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "populationCounts",
						"title": "Population Counts",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "city",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"countries",
									"population",
									"cities",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"city": "`reqdata`",
									},
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"countries",
									"population",
									"cities",
									"filter",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "filter",
								},
							},
							map[string]any{
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
								"parts": []any{
									"countries",
									"state",
									"cities",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"countries",
									"population",
									"cities",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Cities",
						"type": "`$ARRAY`",
						"short": "List of cities in the country",
					},
					map[string]any{
						"name": "country",
						"title": "Country",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Country name",
					},
					map[string]any{
						"name": "flag",
						"title": "Flag",
						"type": "`$STRING`",
						"short": "URL to the country flag image",
						"format": "uri",
					},
					map[string]any{
						"name": "iso2",
						"title": "Iso2",
						"type": "`$STRING`",
						"short": "ISO 3166-1 alpha-2 code",
					},
					map[string]any{
						"name": "iso3",
						"title": "Iso3",
						"type": "`$STRING`",
						"short": "ISO 3166-1 alpha-3 code",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Country name",
					},
				},
				"name": "country",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"countries",
									"capital",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"country": "`reqdata`",
									},
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "capital",
								},
							},
							map[string]any{
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
								"parts": []any{
									"countries",
									"currency",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"country": "`reqdata`",
									},
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "currency",
								},
							},
							map[string]any{
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
								"parts": []any{
									"countries",
									"flag",
									"images",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"country": "`reqdata`",
									},
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"countries",
									"iso",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"country": "`reqdata`",
									},
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "iso",
								},
							},
							map[string]any{
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
								"parts": []any{
									"countries",
									"population",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"country": "`reqdata`",
									},
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "population",
								},
							},
							map[string]any{
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
								"parts": []any{
									"countries",
									"positions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"country": "`reqdata`",
									},
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "position",
								},
							},
							map[string]any{
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
								"parts": []any{
									"countries",
									"states",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"country": "`reqdata`",
									},
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "state",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/countries",
								"segments": []any{
									map[string]any{
										"lit": "countries",
									},
								},
								"parts": []any{
									"countries",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"countries",
									"codes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "code",
								},
							},
							map[string]any{
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
								"parts": []any{
									"countries",
									"flag",
									"images",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"countries",
									"population",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "population",
								},
							},
							map[string]any{
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
								"parts": []any{
									"countries",
									"positions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "position",
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
