-- Typed models for the CountriesAndCities SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class City
---@field city? string
---@field country? string
---@field data? table
---@field error? boolean
---@field limit? number
---@field msg? string
---@field order? string
---@field orderBy? string
---@field populationCounts? table
---@field state string

---@class CityListMatch
---@field city? string
---@field country? string
---@field data? table
---@field error? boolean
---@field limit? number
---@field msg? string
---@field order? string
---@field orderBy? string
---@field populationCounts? table
---@field state? string

---@class CityCreateData
---@field city? string
---@field country? string
---@field data? table
---@field error? boolean
---@field limit? number
---@field msg? string
---@field order? string
---@field orderBy? string
---@field populationCounts? table
---@field state string

---@class Country
---@field Iso2? string
---@field Iso3? string
---@field capital? string
---@field cities? table
---@field code? string
---@field country string
---@field currency? string
---@field flag? string
---@field iso2? string
---@field iso3? string
---@field lat? number
---@field long? number
---@field name? string
---@field populationCounts? table
---@field states? table

---@class CountryListMatch
---@field Iso2? string
---@field Iso3? string
---@field capital? string
---@field cities? table
---@field code? string
---@field country? string
---@field currency? string
---@field flag? string
---@field iso2? string
---@field iso3? string
---@field lat? number
---@field long? number
---@field name? string
---@field populationCounts? table
---@field states? table

---@class CountryCreateData
---@field Iso2? string
---@field Iso3? string
---@field capital? string
---@field cities? table
---@field code? string
---@field country string
---@field currency? string
---@field flag? string
---@field iso2? string
---@field iso3? string
---@field lat? number
---@field long? number
---@field name? string
---@field populationCounts? table
---@field states? table

local M = {}

return M
