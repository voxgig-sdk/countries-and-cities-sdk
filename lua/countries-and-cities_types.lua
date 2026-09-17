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
---@field msg? string
---@field populationCounts? table
---@field state string

---@class CityListMatch
---@field city? string
---@field country? string
---@field data? table
---@field error? boolean
---@field msg? string
---@field populationCounts? table
---@field state? string

---@class CityCreateData
---@field city? string
---@field country? string
---@field data? table
---@field error? boolean
---@field msg? string
---@field populationCounts? table
---@field state string

---@class Country
---@field cities? table
---@field country string
---@field flag? string
---@field iso2? string
---@field iso3? string
---@field name? string

---@class CountryListMatch
---@field cities? table
---@field country? string
---@field flag? string
---@field iso2? string
---@field iso3? string
---@field name? string

---@class CountryCreateData
---@field cities? table
---@field country string
---@field flag? string
---@field iso2? string
---@field iso3? string
---@field name? string

local M = {}

return M
