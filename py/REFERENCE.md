# CountriesAndCities Python SDK Reference

Complete API reference for the CountriesAndCities Python SDK.


## CountriesAndCitiesSDK

### Constructor

```python
from countries-and-cities_sdk import CountriesAndCitiesSDK

client = CountriesAndCitiesSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CountriesAndCitiesSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = CountriesAndCitiesSDK.test()
```


### Instance Methods

#### `City(data=None)`

Create a new `CityEntity` instance. Pass `None` for no initial data.

#### `Country(data=None)`

Create a new `CountryEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> tuple`

Make a direct HTTP request to any API endpoint. Returns `(result, err)`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `(result_dict, err)`

#### `prepare(fetchargs=None) -> tuple`

Prepare a fetch definition without sending. Returns `(fetchdef, err)`.


---

## CityEntity

```python
city = client.City()
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

#### `create(reqdata, ctrl=None) -> tuple`

Create a new entity with the given data.

```python
result, err = client.City().create({
    "city": # `$STRING`,
    "country": # `$STRING`,
    "state": # `$STRING`,
})
```

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.City().list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CountryEntity

```python
country = client.Country()
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

#### `create(reqdata, ctrl=None) -> tuple`

Create a new entity with the given data.

```python
result, err = client.Country().create({
    "country": # `$STRING`,
})
```

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Country().list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CountryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = CountriesAndCitiesSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

