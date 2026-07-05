# CountriesAndCities Python SDK Reference

Complete API reference for the CountriesAndCities Python SDK.


## CountriesAndCitiesSDK

### Constructor

```python
from countriesandcities_sdk import CountriesAndCitiesSDK

client = CountriesAndCitiesSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
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

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## CityEntity

```python
city = client.City()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `city` | `str` | Yes |  |
| `country` | `str` | Yes |  |
| `data` | `dict` | No |  |
| `error` | `bool` | No |  |
| `limit` | `int` | No |  |
| `msg` | `str` | No |  |
| `order` | `str` | No |  |
| `order_by` | `str` | No |  |
| `population_count` | `list` | No |  |
| `state` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.City().create({
    "city": "example",  # str
    "country": "example",  # str
    "state": "example",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.City().list()
for city in results:
    print(city)
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
| `city` | `list` | No |  |
| `code` | `str` | No |  |
| `country` | `str` | Yes |  |
| `data` | `dict` | No |  |
| `error` | `bool` | No |  |
| `flag` | `str` | No |  |
| `iso2` | `str` | No |  |
| `iso3` | `str` | No |  |
| `lat` | `float` | No |  |
| `long` | `float` | No |  |
| `msg` | `str` | No |  |
| `name` | `str` | No |  |
| `population_count` | `list` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Country().create({
    "country": "example",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Country().list()
for country in results:
    print(country)
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

