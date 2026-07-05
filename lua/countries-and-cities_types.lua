-- Typed models for the CountriesAndCities SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class City
---@field city string
---@field country string
---@field data? table
---@field error? boolean
---@field limit? number
---@field msg? string
---@field order? string
---@field order_by? string
---@field population_count? table
---@field state string

---@class CityListMatch
---@field city? string
---@field country? string
---@field data? table
---@field error? boolean
---@field limit? number
---@field msg? string
---@field order? string
---@field order_by? string
---@field population_count? table
---@field state? string

---@class CityCreateData
---@field city string
---@field country string
---@field data? table
---@field error? boolean
---@field limit? number
---@field msg? string
---@field order? string
---@field order_by? string
---@field population_count? table
---@field state string

---@class Country
---@field city? table
---@field code? string
---@field country string
---@field data? table
---@field error? boolean
---@field flag? string
---@field iso2? string
---@field iso3? string
---@field lat? number
---@field long? number
---@field msg? string
---@field name? string
---@field population_count? table

---@class CountryListMatch
---@field city? table
---@field code? string
---@field country? string
---@field data? table
---@field error? boolean
---@field flag? string
---@field iso2? string
---@field iso3? string
---@field lat? number
---@field long? number
---@field msg? string
---@field name? string
---@field population_count? table

---@class CountryCreateData
---@field city? table
---@field code? string
---@field country string
---@field data? table
---@field error? boolean
---@field flag? string
---@field iso2? string
---@field iso3? string
---@field lat? number
---@field long? number
---@field msg? string
---@field name? string
---@field population_count? table

local M = {}

return M
