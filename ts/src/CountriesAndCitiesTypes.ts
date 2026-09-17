// Typed models for the CountriesAndCities SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface City {
  city?: string
  country?: string
  data?: any[]
  error?: boolean
  msg?: string
  populationCounts?: any[]
  state: string
}

export interface CityListMatch {
  city?: string
  country?: string
  data?: any[]
  error?: boolean
  msg?: string
  populationCounts?: any[]
  state?: string
}

export interface CityCreateData {
  city?: string
  country?: string
  data?: any[]
  error?: boolean
  msg?: string
  populationCounts?: any[]
  state: string

  // Selects a custom action instead of the plain create:
  //   'filter'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Country {
  cities?: any[]
  country: string
  flag?: string
  iso2?: string
  iso3?: string
  name?: string
}

export interface CountryListMatch {
  cities?: any[]
  country?: string
  flag?: string
  iso2?: string
  iso3?: string
  name?: string

  // Selects a custom action instead of the plain list:
  //   'code' | 'population' | 'position'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CountryCreateData {
  cities?: any[]
  country: string
  flag?: string
  iso2?: string
  iso3?: string
  name?: string

  // Selects a custom action instead of the plain create:
  //   'capital' | 'currency' | 'iso' | 'population' | 'position' | 'state'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

