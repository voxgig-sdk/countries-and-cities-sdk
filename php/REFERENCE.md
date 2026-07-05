# CountriesAndCities PHP SDK Reference

Complete API reference for the CountriesAndCities PHP SDK.


## CountriesAndCitiesSDK

### Constructor

```php
require_once __DIR__ . '/countriesandcities_sdk.php';

$client = new CountriesAndCitiesSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CountriesAndCitiesSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = CountriesAndCitiesSDK::test();
```


### Instance Methods

#### `City($data = null)`

Create a new `CityEntity` instance. Pass `null` for no initial data.

#### `Country($data = null)`

Create a new `CountryEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): CountriesAndCitiesUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## CityEntity

```php
$city = $client->City();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `city` | `string` | Yes |  |
| `country` | `string` | Yes |  |
| `data` | `array` | No |  |
| `error` | `bool` | No |  |
| `limit` | `int` | No |  |
| `msg` | `string` | No |  |
| `order` | `string` | No |  |
| `order_by` | `string` | No |  |
| `population_count` | `array` | No |  |
| `state` | `string` | Yes |  |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `city` | Yes | - |
| `country` | Yes | - |
| `data` | - | - |
| `error` | - | - |
| `limit` | - | - |
| `msg` | - | - |
| `order` | - | - |
| `order_by` | - | - |
| `population_count` | - | - |
| `state` | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->City()->create([
  "city" => null, // string
  "country" => null, // string
  "state" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->City()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CityEntity`

Create a new `CityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CountryEntity

```php
$country = $client->Country();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `city` | `array` | No |  |
| `code` | `string` | No |  |
| `country` | `string` | Yes |  |
| `data` | `array` | No |  |
| `error` | `bool` | No |  |
| `flag` | `string` | No |  |
| `iso2` | `string` | No |  |
| `iso3` | `string` | No |  |
| `lat` | `float` | No |  |
| `long` | `float` | No |  |
| `msg` | `string` | No |  |
| `name` | `string` | No |  |
| `population_count` | `array` | No |  |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `city` | - | - |
| `code` | - | - |
| `country` | Yes | - |
| `data` | - | - |
| `error` | - | - |
| `flag` | - | - |
| `iso2` | - | - |
| `iso3` | - | - |
| `lat` | - | - |
| `long` | - | - |
| `msg` | - | - |
| `name` | - | - |
| `population_count` | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Country()->create([
  "country" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Country()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CountryEntity`

Create a new `CountryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new CountriesAndCitiesSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

