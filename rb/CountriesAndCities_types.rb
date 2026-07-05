# frozen_string_literal: true

# Typed models for the CountriesAndCities SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# City entity data model.
#
# @!attribute [rw] city
#   @return [String]
#
# @!attribute [rw] country
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] error
#   @return [Boolean, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] msg
#   @return [String, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] population_count
#   @return [Array, nil]
#
# @!attribute [rw] state
#   @return [String]
City = Struct.new(
  :city,
  :country,
  :data,
  :error,
  :limit,
  :msg,
  :order,
  :order_by,
  :population_count,
  :state,
  keyword_init: true
)

# Request payload for City#list.
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] error
#   @return [Boolean, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] msg
#   @return [String, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] population_count
#   @return [Array, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
CityListMatch = Struct.new(
  :city,
  :country,
  :data,
  :error,
  :limit,
  :msg,
  :order,
  :order_by,
  :population_count,
  :state,
  keyword_init: true
)

# Request payload for City#create.
#
# @!attribute [rw] city
#   @return [String]
#
# @!attribute [rw] country
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] error
#   @return [Boolean, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] msg
#   @return [String, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] population_count
#   @return [Array, nil]
#
# @!attribute [rw] state
#   @return [String]
CityCreateData = Struct.new(
  :city,
  :country,
  :data,
  :error,
  :limit,
  :msg,
  :order,
  :order_by,
  :population_count,
  :state,
  keyword_init: true
)

# Country entity data model.
#
# @!attribute [rw] city
#   @return [Array, nil]
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] error
#   @return [Boolean, nil]
#
# @!attribute [rw] flag
#   @return [String, nil]
#
# @!attribute [rw] iso2
#   @return [String, nil]
#
# @!attribute [rw] iso3
#   @return [String, nil]
#
# @!attribute [rw] lat
#   @return [Float, nil]
#
# @!attribute [rw] long
#   @return [Float, nil]
#
# @!attribute [rw] msg
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] population_count
#   @return [Array, nil]
Country = Struct.new(
  :city,
  :code,
  :country,
  :data,
  :error,
  :flag,
  :iso2,
  :iso3,
  :lat,
  :long,
  :msg,
  :name,
  :population_count,
  keyword_init: true
)

# Request payload for Country#list.
#
# @!attribute [rw] city
#   @return [Array, nil]
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] error
#   @return [Boolean, nil]
#
# @!attribute [rw] flag
#   @return [String, nil]
#
# @!attribute [rw] iso2
#   @return [String, nil]
#
# @!attribute [rw] iso3
#   @return [String, nil]
#
# @!attribute [rw] lat
#   @return [Float, nil]
#
# @!attribute [rw] long
#   @return [Float, nil]
#
# @!attribute [rw] msg
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] population_count
#   @return [Array, nil]
CountryListMatch = Struct.new(
  :city,
  :code,
  :country,
  :data,
  :error,
  :flag,
  :iso2,
  :iso3,
  :lat,
  :long,
  :msg,
  :name,
  :population_count,
  keyword_init: true
)

# Request payload for Country#create.
#
# @!attribute [rw] city
#   @return [Array, nil]
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] error
#   @return [Boolean, nil]
#
# @!attribute [rw] flag
#   @return [String, nil]
#
# @!attribute [rw] iso2
#   @return [String, nil]
#
# @!attribute [rw] iso3
#   @return [String, nil]
#
# @!attribute [rw] lat
#   @return [Float, nil]
#
# @!attribute [rw] long
#   @return [Float, nil]
#
# @!attribute [rw] msg
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] population_count
#   @return [Array, nil]
CountryCreateData = Struct.new(
  :city,
  :code,
  :country,
  :data,
  :error,
  :flag,
  :iso2,
  :iso3,
  :lat,
  :long,
  :msg,
  :name,
  :population_count,
  keyword_init: true
)

