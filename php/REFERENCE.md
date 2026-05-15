# CountriesAndCities PHP SDK Reference

Complete API reference for the CountriesAndCities PHP SDK.


## CountriesAndCitiesSDK

### Constructor

```php
require_once __DIR__ . '/countries-and-cities_sdk.php';

$client = new CountriesAndCitiesSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
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

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. Returns `[$result, $err]`.

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

**Returns:** `array [$result, $err]`

#### `prepare(array $fetchargs = []): array`

Prepare a fetch definition without sending the request. Returns `[$fetchdef, $err]`.


---

## CityEntity

```php
$city = $client->City();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `city` | ``$STRING`` | Yes |  |
| `country` | ``$STRING`` | Yes |  |
| `data` | ``$OBJECT`` | No |  |
| `error` | ``$BOOLEAN`` | No |  |
| `limit` | ``$INTEGER`` | No |  |
| `msg` | ``$STRING`` | No |  |
| `order` | ``$STRING`` | No |  |
| `order_by` | ``$STRING`` | No |  |
| `population_count` | ``$ARRAY`` | No |  |
| `state` | ``$STRING`` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `city` | - | Yes | - | - | - |
| `country` | - | Yes | - | - | - |
| `data` | - | - | - | - | - |
| `error` | - | - | - | - | - |
| `limit` | - | - | - | - | - |
| `msg` | - | - | - | - | - |
| `order` | - | - | - | - | - |
| `order_by` | - | - | - | - | - |
| `population_count` | - | - | - | - | - |
| `state` | - | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): array`

Create a new entity with the given data.

```php
[$result, $err] = $client->City()->create([
  "city" => /* `$STRING` */,
  "country" => /* `$STRING` */,
  "state" => /* `$STRING` */,
]);
```

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->City()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): CityEntity`

Create a new `CityEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## CountryEntity

```php
$country = $client->Country();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `city` | ``$ARRAY`` | No |  |
| `code` | ``$STRING`` | No |  |
| `country` | ``$STRING`` | Yes |  |
| `data` | ``$OBJECT`` | No |  |
| `error` | ``$BOOLEAN`` | No |  |
| `flag` | ``$STRING`` | No |  |
| `iso2` | ``$STRING`` | No |  |
| `iso3` | ``$STRING`` | No |  |
| `lat` | ``$NUMBER`` | No |  |
| `long` | ``$NUMBER`` | No |  |
| `msg` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `population_count` | ``$ARRAY`` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `city` | - | - | - | - | - |
| `code` | - | - | - | - | - |
| `country` | - | Yes | - | - | - |
| `data` | - | - | - | - | - |
| `error` | - | - | - | - | - |
| `flag` | - | - | - | - | - |
| `iso2` | - | - | - | - | - |
| `iso3` | - | - | - | - | - |
| `lat` | - | - | - | - | - |
| `long` | - | - | - | - | - |
| `msg` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `population_count` | - | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): array`

Create a new entity with the given data.

```php
[$result, $err] = $client->Country()->create([
  "country" => /* `$STRING` */,
]);
```

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Country()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): CountryEntity`

Create a new `CountryEntity` instance with the same client and
options.

#### `getName(): string`

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

