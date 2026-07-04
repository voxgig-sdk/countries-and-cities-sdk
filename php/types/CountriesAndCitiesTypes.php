<?php
declare(strict_types=1);

// Typed models for the CountriesAndCities SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** City entity data model. */
class City
{
    public string $city;
    public string $country;
    public ?array $data = null;
    public ?bool $error = null;
    public ?int $limit = null;
    public ?string $msg = null;
    public ?string $order = null;
    public ?string $order_by = null;
    public ?array $population_count = null;
    public string $state;
}

/** Match filter for City#list (any subset of City fields). */
class CityListMatch
{
    public ?string $city = null;
    public ?string $country = null;
    public ?array $data = null;
    public ?bool $error = null;
    public ?int $limit = null;
    public ?string $msg = null;
    public ?string $order = null;
    public ?string $order_by = null;
    public ?array $population_count = null;
    public ?string $state = null;
}

/** Match filter for City#create (any subset of City fields). */
class CityCreateData
{
    public ?string $city = null;
    public ?string $country = null;
    public ?array $data = null;
    public ?bool $error = null;
    public ?int $limit = null;
    public ?string $msg = null;
    public ?string $order = null;
    public ?string $order_by = null;
    public ?array $population_count = null;
    public ?string $state = null;
}

/** Country entity data model. */
class Country
{
    public ?array $city = null;
    public ?string $code = null;
    public string $country;
    public ?array $data = null;
    public ?bool $error = null;
    public ?string $flag = null;
    public ?string $iso2 = null;
    public ?string $iso3 = null;
    public ?float $lat = null;
    public ?float $long = null;
    public ?string $msg = null;
    public ?string $name = null;
    public ?array $population_count = null;
}

/** Match filter for Country#list (any subset of Country fields). */
class CountryListMatch
{
    public ?array $city = null;
    public ?string $code = null;
    public ?string $country = null;
    public ?array $data = null;
    public ?bool $error = null;
    public ?string $flag = null;
    public ?string $iso2 = null;
    public ?string $iso3 = null;
    public ?float $lat = null;
    public ?float $long = null;
    public ?string $msg = null;
    public ?string $name = null;
    public ?array $population_count = null;
}

/** Match filter for Country#create (any subset of Country fields). */
class CountryCreateData
{
    public ?array $city = null;
    public ?string $code = null;
    public ?string $country = null;
    public ?array $data = null;
    public ?bool $error = null;
    public ?string $flag = null;
    public ?string $iso2 = null;
    public ?string $iso3 = null;
    public ?float $lat = null;
    public ?float $long = null;
    public ?string $msg = null;
    public ?string $name = null;
    public ?array $population_count = null;
}

