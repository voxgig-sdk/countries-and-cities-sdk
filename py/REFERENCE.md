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
| `city` | `str` | No | City name |
| `country` | `str` | No | Country name |
| `data` | `list` | No |  |
| `error` | `bool` | No |  |
| `limit` | `int` | No |  |
| `msg` | `str` | No |  |
| `order` | `str` | No |  |
| `orderBy` | `str` | No |  |
| `populationCounts` | `list` | No |  |
| `state` | `str` | Yes |  |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `city` | - | Yes |
| `country` | - | Yes |
| `data` | - | - |
| `error` | - | - |
| `limit` | - | - |
| `msg` | - | - |
| `order` | - | - |
| `orderBy` | - | - |
| `populationCounts` | - | - |
| `state` | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.City().create({
    "state": "example_state",  # str
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
| `Iso2` | `str` | No |  |
| `Iso3` | `str` | No |  |
| `capital` | `str` | No |  |
| `cities` | `list` | No | List of cities in the country |
| `code` | `str` | No | Country code |
| `country` | `str` | Yes | Country name |
| `currency` | `str` | No |  |
| `flag` | `str` | No | URL to the country flag image |
| `iso2` | `str` | No | ISO 3166-1 alpha-2 code |
| `iso3` | `str` | No | ISO 3166-1 alpha-3 code |
| `lat` | `float` | No | Latitude |
| `long` | `float` | No | Longitude |
| `name` | `str` | No | Country name |
| `populationCounts` | `list` | No |  |
| `states` | `list` | No |  |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `Iso2` | - | - |
| `Iso3` | - | - |
| `capital` | - | - |
| `cities` | - | - |
| `code` | - | - |
| `country` | Yes | Yes |
| `currency` | - | - |
| `flag` | - | - |
| `iso2` | - | - |
| `iso3` | - | - |
| `lat` | - | - |
| `long` | - | - |
| `name` | - | - |
| `populationCounts` | - | - |
| `states` | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Country().create({
    "country": "example_country",  # str
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


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

