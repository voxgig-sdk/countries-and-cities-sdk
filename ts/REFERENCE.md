# CountriesAndCities TypeScript SDK Reference

Complete API reference for the CountriesAndCities TypeScript SDK.


## CountriesAndCitiesSDK

### Constructor

```ts
new CountriesAndCitiesSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CountriesAndCitiesSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CountriesAndCitiesSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CountriesAndCitiesSDK` instance in test mode.


### Instance Methods

#### `City(data?: object)`

Create a new `City` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CityEntity` instance.

#### `Country(data?: object)`

Create a new `Country` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CountryEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CountriesAndCitiesSDK.test()`.

**Returns:** `CountriesAndCitiesSDK` instance in test mode.


---

## CityEntity

```ts
const city = client.City()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `city` | `string` | No | City name |
| `country` | `string` | No | Country name |
| `data` | `any[]` | No |  |
| `error` | `boolean` | No |  |
| `limit` | `number` | No |  |
| `msg` | `string` | No |  |
| `order` | `string` | No |  |
| `orderBy` | `string` | No |  |
| `populationCounts` | `any[]` | No |  |
| `state` | `string` | Yes |  |

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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `filter` | `/countries/population/cities/filter` | `client.City().create({ $action: 'filter', ... })` |

An action returns that action's OWN response, which is not necessarily a
City record — check the API definition for its shape.

```ts
const result = await client.City().create({
  $action: 'filter',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.City().create({
  state: 'example_state',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.City().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CityEntity` instance with the same client and
options.

#### `client()`

Return the parent `CountriesAndCitiesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CountryEntity

```ts
const country = client.Country()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `Iso2` | `string` | No |  |
| `Iso3` | `string` | No |  |
| `capital` | `string` | No |  |
| `cities` | `any[]` | No | List of cities in the country |
| `code` | `string` | No | Country code |
| `country` | `string` | Yes | Country name |
| `currency` | `string` | No |  |
| `flag` | `string` | No | URL to the country flag image |
| `iso2` | `string` | No | ISO 3166-1 alpha-2 code |
| `iso3` | `string` | No | ISO 3166-1 alpha-3 code |
| `lat` | `number` | No | Latitude |
| `long` | `number` | No | Longitude |
| `name` | `string` | No | Country name |
| `populationCounts` | `any[]` | No |  |
| `states` | `any[]` | No |  |

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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `capital` | `/countries/capital` | `client.Country().create({ $action: 'capital', ... })` |
| `currency` | `/countries/currency` | `client.Country().create({ $action: 'currency', ... })` |
| `iso` | `/countries/iso` | `client.Country().create({ $action: 'iso', ... })` |
| `population` | `/countries/population` | `client.Country().create({ $action: 'population', ... })` |
| `position` | `/countries/positions` | `client.Country().create({ $action: 'position', ... })` |
| `state` | `/countries/states` | `client.Country().create({ $action: 'state', ... })` |
| `code` | `/countries/codes` | `client.Country().list({ $action: 'code', ... })` |
| `population` | `/countries/population` | `client.Country().list({ $action: 'population', ... })` |
| `position` | `/countries/positions` | `client.Country().list({ $action: 'position', ... })` |

An action returns that action's OWN response, which is not necessarily a
Country record — check the API definition for its shape.

```ts
const result = await client.Country().create({
  $action: 'capital',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Country().create({
  country: 'example_country',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Country().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CountryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CountriesAndCitiesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new CountriesAndCitiesSDK({
  feature: {
    test: { active: true },
  }
})
```

