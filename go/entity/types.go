// Typed models for the CountriesAndCities SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/countries-and-cities-sdk/go/core"
)

// City is the typed data model for the city entity.
type City struct {
	City *string `json:"city,omitempty"`
	Country *string `json:"country,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Error *bool `json:"error,omitempty"`
	Msg *string `json:"msg,omitempty"`
	PopulationCounts *[]any `json:"populationCounts,omitempty"`
	State string `json:"state"`
}

// CityListMatch is the typed request payload for City.ListTyped.
type CityListMatch struct {
	City *string `json:"city,omitempty"`
	Country *string `json:"country,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Error *bool `json:"error,omitempty"`
	Msg *string `json:"msg,omitempty"`
	PopulationCounts *[]any `json:"populationCounts,omitempty"`
	State *string `json:"state,omitempty"`
}

// CityCreateData is the typed request payload for City.CreateTyped.
type CityCreateData struct {
	City *string `json:"city,omitempty"`
	Country *string `json:"country,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Error *bool `json:"error,omitempty"`
	Msg *string `json:"msg,omitempty"`
	PopulationCounts *[]any `json:"populationCounts,omitempty"`
	State string `json:"state"`
}

// Country is the typed data model for the country entity.
type Country struct {
	Cities *[]any `json:"cities,omitempty"`
	Country string `json:"country"`
	Flag *string `json:"flag,omitempty"`
	Iso2 *string `json:"iso2,omitempty"`
	Iso3 *string `json:"iso3,omitempty"`
	Name *string `json:"name,omitempty"`
}

// CountryListMatch is the typed request payload for Country.ListTyped.
type CountryListMatch struct {
	Cities *[]any `json:"cities,omitempty"`
	Country *string `json:"country,omitempty"`
	Flag *string `json:"flag,omitempty"`
	Iso2 *string `json:"iso2,omitempty"`
	Iso3 *string `json:"iso3,omitempty"`
	Name *string `json:"name,omitempty"`
}

// CountryCreateData is the typed request payload for Country.CreateTyped.
type CountryCreateData struct {
	Cities *[]any `json:"cities,omitempty"`
	Country string `json:"country"`
	Flag *string `json:"flag,omitempty"`
	Iso2 *string `json:"iso2,omitempty"`
	Iso3 *string `json:"iso3,omitempty"`
	Name *string `json:"name,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
