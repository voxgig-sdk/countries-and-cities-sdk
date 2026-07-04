# Typed models for the CountriesAndCities SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class City:
    city: str
    country: str
    state: str
    data: Optional[dict] = None
    error: Optional[bool] = None
    limit: Optional[int] = None
    msg: Optional[str] = None
    order: Optional[str] = None
    order_by: Optional[str] = None
    population_count: Optional[list] = None


@dataclass
class CityListMatch:
    city: Optional[str] = None
    country: Optional[str] = None
    data: Optional[dict] = None
    error: Optional[bool] = None
    limit: Optional[int] = None
    msg: Optional[str] = None
    order: Optional[str] = None
    order_by: Optional[str] = None
    population_count: Optional[list] = None
    state: Optional[str] = None


@dataclass
class CityCreateData:
    city: Optional[str] = None
    country: Optional[str] = None
    data: Optional[dict] = None
    error: Optional[bool] = None
    limit: Optional[int] = None
    msg: Optional[str] = None
    order: Optional[str] = None
    order_by: Optional[str] = None
    population_count: Optional[list] = None
    state: Optional[str] = None


@dataclass
class Country:
    country: str
    city: Optional[list] = None
    code: Optional[str] = None
    data: Optional[dict] = None
    error: Optional[bool] = None
    flag: Optional[str] = None
    iso2: Optional[str] = None
    iso3: Optional[str] = None
    lat: Optional[float] = None
    long: Optional[float] = None
    msg: Optional[str] = None
    name: Optional[str] = None
    population_count: Optional[list] = None


@dataclass
class CountryListMatch:
    city: Optional[list] = None
    code: Optional[str] = None
    country: Optional[str] = None
    data: Optional[dict] = None
    error: Optional[bool] = None
    flag: Optional[str] = None
    iso2: Optional[str] = None
    iso3: Optional[str] = None
    lat: Optional[float] = None
    long: Optional[float] = None
    msg: Optional[str] = None
    name: Optional[str] = None
    population_count: Optional[list] = None


@dataclass
class CountryCreateData:
    city: Optional[list] = None
    code: Optional[str] = None
    country: Optional[str] = None
    data: Optional[dict] = None
    error: Optional[bool] = None
    flag: Optional[str] = None
    iso2: Optional[str] = None
    iso3: Optional[str] = None
    lat: Optional[float] = None
    long: Optional[float] = None
    msg: Optional[str] = None
    name: Optional[str] = None
    population_count: Optional[list] = None

