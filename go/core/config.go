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
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
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
						"name": "limit",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "msg",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "order",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "orderBy",
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
								"parts": []any{
									"countries",
									"population",
									"cities",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"city": "`reqdata`",
									},
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/countries/population/cities/filter",
								"parts": []any{
									"countries",
									"population",
									"cities",
									"filter",
								},
								"select": map[string]any{
									"$action": "filter",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/countries/state/cities",
								"parts": []any{
									"countries",
									"state",
									"cities",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
								"parts": []any{
									"countries",
									"population",
									"cities",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
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
						"name": "Iso2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "Iso3",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "capital",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cities",
						"short": "List of cities in the country",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "code",
						"short": "Country code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "country",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "Country name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currency",
						"type": "`$STRING`",
					},
					map[string]any{
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
						"name": "lat",
						"short": "Latitude",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "long",
						"short": "Longitude",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "name",
						"short": "Country name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "populationCounts",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "states",
						"type": "`$ARRAY`",
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
								"parts": []any{
									"countries",
									"capital",
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
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/countries/currency",
								"parts": []any{
									"countries",
									"currency",
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
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/countries/flag/images",
								"parts": []any{
									"countries",
									"flag",
									"images",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"country": "`reqdata`",
									},
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/countries/iso",
								"parts": []any{
									"countries",
									"iso",
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
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/countries/population",
								"parts": []any{
									"countries",
									"population",
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
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/countries/positions",
								"parts": []any{
									"countries",
									"positions",
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
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/countries/states",
								"parts": []any{
									"countries",
									"states",
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
								"parts": []any{
									"countries",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/countries/codes",
								"parts": []any{
									"countries",
									"codes",
								},
								"select": map[string]any{
									"$action": "code",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/countries/flag/images",
								"parts": []any{
									"countries",
									"flag",
									"images",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/countries/population",
								"parts": []any{
									"countries",
									"population",
								},
								"select": map[string]any{
									"$action": "population",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/countries/positions",
								"parts": []any{
									"countries",
									"positions",
								},
								"select": map[string]any{
									"$action": "position",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
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
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
