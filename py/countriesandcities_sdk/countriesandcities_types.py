# Typed models for the CountriesAndCities SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class CityRequired(TypedDict):
    state: str


class City(CityRequired, total=False):
    city: str
    country: str
    data: list
    error: bool
    limit: int
    msg: str
    order: str
    orderBy: str
    populationCounts: list


class CityListMatch(TypedDict, total=False):
    city: str
    country: str
    data: list
    error: bool
    limit: int
    msg: str
    order: str
    orderBy: str
    populationCounts: list
    state: str


class CityCreateDataRequired(TypedDict):
    state: str


class CityCreateData(CityCreateDataRequired, total=False):
    city: str
    country: str
    data: list
    error: bool
    limit: int
    msg: str
    order: str
    orderBy: str
    populationCounts: list


class CountryRequired(TypedDict):
    country: str


class Country(CountryRequired, total=False):
    Iso2: str
    Iso3: str
    capital: str
    cities: list
    code: str
    currency: str
    flag: str
    iso2: str
    iso3: str
    lat: float
    long: float
    name: str
    populationCounts: list
    states: list


class CountryListMatch(TypedDict, total=False):
    Iso2: str
    Iso3: str
    capital: str
    cities: list
    code: str
    country: str
    currency: str
    flag: str
    iso2: str
    iso3: str
    lat: float
    long: float
    name: str
    populationCounts: list
    states: list


class CountryCreateDataRequired(TypedDict):
    country: str


class CountryCreateData(CountryCreateDataRequired, total=False):
    Iso2: str
    Iso3: str
    capital: str
    cities: list
    code: str
    currency: str
    flag: str
    iso2: str
    iso3: str
    lat: float
    long: float
    name: str
    populationCounts: list
    states: list
