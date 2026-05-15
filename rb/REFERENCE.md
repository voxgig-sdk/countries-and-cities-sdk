# CountriesAndCities Ruby SDK Reference

Complete API reference for the CountriesAndCities Ruby SDK.


## CountriesAndCitiesSDK

### Constructor

```ruby
require_relative 'countries-and-cities_sdk'

client = CountriesAndCitiesSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CountriesAndCitiesSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = CountriesAndCitiesSDK.test
```


### Instance Methods

#### `City(data = nil)`

Create a new `City` entity instance. Pass `nil` for no initial data.

#### `Country(data = nil)`

Create a new `Country` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash, err`

#### `prepare(fetchargs = {}) -> Hash, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Hash, err`


---

## CityEntity

```ruby
city = client.City
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

#### `create(reqdata, ctrl = nil) -> result, err`

Create a new entity with the given data.

```ruby
result, err = client.City.create({
  "city" => # `$STRING`,
  "country" => # `$STRING`,
  "state" => # `$STRING`,
})
```

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.City.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CountryEntity

```ruby
country = client.Country
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

#### `create(reqdata, ctrl = nil) -> result, err`

Create a new entity with the given data.

```ruby
result, err = client.Country.create({
  "country" => # `$STRING`,
})
```

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Country.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CountryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = CountriesAndCitiesSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

