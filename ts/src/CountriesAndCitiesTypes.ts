// Typed models for the CountriesAndCities SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface City {
  city: string
  country: string
  data?: Record<string, any>
  error?: boolean
  limit?: number
  msg?: string
  order?: string
  order_by?: string
  population_count?: any[]
  state: string
}

export interface CityListMatch {
  city?: string
  country?: string
  data?: Record<string, any>
  error?: boolean
  limit?: number
  msg?: string
  order?: string
  order_by?: string
  population_count?: any[]
  state?: string
}

export interface CityCreateData {
  city: string
  country: string
  data?: Record<string, any>
  error?: boolean
  limit?: number
  msg?: string
  order?: string
  order_by?: string
  population_count?: any[]
  state: string
}

export interface Country {
  city?: any[]
  code?: string
  country: string
  data?: Record<string, any>
  error?: boolean
  flag?: string
  iso2?: string
  iso3?: string
  lat?: number
  long?: number
  msg?: string
  name?: string
  population_count?: any[]
}

export interface CountryListMatch {
  city?: any[]
  code?: string
  country?: string
  data?: Record<string, any>
  error?: boolean
  flag?: string
  iso2?: string
  iso3?: string
  lat?: number
  long?: number
  msg?: string
  name?: string
  population_count?: any[]
}

export interface CountryCreateData {
  city?: any[]
  code?: string
  country: string
  data?: Record<string, any>
  error?: boolean
  flag?: string
  iso2?: string
  iso3?: string
  lat?: number
  long?: number
  msg?: string
  name?: string
  population_count?: any[]
}

