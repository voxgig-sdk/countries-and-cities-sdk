// Typed models for the CountriesAndCities SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// City is the typed data model for the city entity.
type City struct {
	City string `json:"city"`
	Country string `json:"country"`
	Data *map[string]any `json:"data,omitempty"`
	Error *bool `json:"error,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Msg *string `json:"msg,omitempty"`
	Order *string `json:"order,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	PopulationCount *[]any `json:"population_count,omitempty"`
	State string `json:"state"`
}

// CityListMatch is the typed request payload for City.ListTyped.
type CityListMatch struct {
	City *string `json:"city,omitempty"`
	Country *string `json:"country,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Error *bool `json:"error,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Msg *string `json:"msg,omitempty"`
	Order *string `json:"order,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	PopulationCount *[]any `json:"population_count,omitempty"`
	State *string `json:"state,omitempty"`
}

// CityCreateData is the typed request payload for City.CreateTyped.
type CityCreateData struct {
	City string `json:"city"`
	Country string `json:"country"`
	Data *map[string]any `json:"data,omitempty"`
	Error *bool `json:"error,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Msg *string `json:"msg,omitempty"`
	Order *string `json:"order,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	PopulationCount *[]any `json:"population_count,omitempty"`
	State string `json:"state"`
}

// Country is the typed data model for the country entity.
type Country struct {
	City *[]any `json:"city,omitempty"`
	Code *string `json:"code,omitempty"`
	Country string `json:"country"`
	Data *map[string]any `json:"data,omitempty"`
	Error *bool `json:"error,omitempty"`
	Flag *string `json:"flag,omitempty"`
	Iso2 *string `json:"iso2,omitempty"`
	Iso3 *string `json:"iso3,omitempty"`
	Lat *float64 `json:"lat,omitempty"`
	Long *float64 `json:"long,omitempty"`
	Msg *string `json:"msg,omitempty"`
	Name *string `json:"name,omitempty"`
	PopulationCount *[]any `json:"population_count,omitempty"`
}

// CountryListMatch is the typed request payload for Country.ListTyped.
type CountryListMatch struct {
	City *[]any `json:"city,omitempty"`
	Code *string `json:"code,omitempty"`
	Country *string `json:"country,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Error *bool `json:"error,omitempty"`
	Flag *string `json:"flag,omitempty"`
	Iso2 *string `json:"iso2,omitempty"`
	Iso3 *string `json:"iso3,omitempty"`
	Lat *float64 `json:"lat,omitempty"`
	Long *float64 `json:"long,omitempty"`
	Msg *string `json:"msg,omitempty"`
	Name *string `json:"name,omitempty"`
	PopulationCount *[]any `json:"population_count,omitempty"`
}

// CountryCreateData is the typed request payload for Country.CreateTyped.
type CountryCreateData struct {
	City *[]any `json:"city,omitempty"`
	Code *string `json:"code,omitempty"`
	Country string `json:"country"`
	Data *map[string]any `json:"data,omitempty"`
	Error *bool `json:"error,omitempty"`
	Flag *string `json:"flag,omitempty"`
	Iso2 *string `json:"iso2,omitempty"`
	Iso3 *string `json:"iso3,omitempty"`
	Lat *float64 `json:"lat,omitempty"`
	Long *float64 `json:"long,omitempty"`
	Msg *string `json:"msg,omitempty"`
	Name *string `json:"name,omitempty"`
	PopulationCount *[]any `json:"population_count,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
