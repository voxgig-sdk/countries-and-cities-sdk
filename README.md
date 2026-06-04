# CountriesAndCities SDK

Free JSON API for country and city data — populations, capitals, currencies, flags, and geolocation

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Countries & Cities API

[CountriesNow](https://countriesnow.space/) is a community-run, open API that returns country- and city-level reference data as plain JSON. It is designed as a drop-in replacement for hardcoded country lookup tables in apps and dashboards.

What you get from the API:

- Country records with names, ISO codes, capitals, currencies and dial codes
- Cities grouped by country, with state/region context where available
- Population figures for countries and cities
- Geographic data including latitude/longitude and flag images

Operational notes: no API key is required and CORS is enabled, so the endpoints can be called directly from a browser. The community catalogue lists an average response time of around 745 ms with no published rate limit. Full endpoint reference is maintained as Postman documentation linked from the project homepage.

## Try it

**TypeScript**
```bash
npm install countries-and-cities
```

**Python**
```bash
pip install countries-and-cities-sdk
```

**PHP**
```bash
composer require voxgig/countries-and-cities-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/countries-and-cities-sdk/go
```

**Ruby**
```bash
gem install countries-and-cities-sdk
```

**Lua**
```bash
luarocks install countries-and-cities-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { CountriesAndCitiesSDK } from 'countries-and-cities'

const client = new CountriesAndCitiesSDK({})

// List all citys
const citys = await client.City().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o countries-and-cities-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "countries-and-cities": {
      "command": "/abs/path/to/countries-and-cities-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **City** | A populated place within a country, typically returned with its parent country and (where known) state/region, via paths such as `/countries/cities` and `/countries/population/cities`. | `/countries/population/cities` |
| **Country** | A sovereign country record exposing names, ISO codes, capitals, currencies, dial codes, flags, populations and geolocation; served under paths such as `/countries`, `/countries/population`, `/countries/capital`, `/countries/currency` and `/countries/flag/images`. | `/countries/capital` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from countriesandcities_sdk import CountriesAndCitiesSDK

client = CountriesAndCitiesSDK({})

# List all citys
citys, err = client.City(None).list(None, None)
```

### PHP

```php
<?php
require_once 'countriesandcities_sdk.php';

$client = new CountriesAndCitiesSDK([]);

// List all citys
[$citys, $err] = $client->City(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/countries-and-cities-sdk/go"

client := sdk.NewCountriesAndCitiesSDK(map[string]any{})

// List all citys
citys, err := client.City(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "CountriesAndCities_sdk"

client = CountriesAndCitiesSDK.new({})

# List all citys
citys, err = client.City(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("countries-and-cities_sdk")

local client = sdk.new({})

-- List all citys
local citys, err = client:City(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = CountriesAndCitiesSDK.test()
const result = await client.City().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = CountriesAndCitiesSDK.test(None, None)
result, err = client.City(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = CountriesAndCitiesSDK::test(null, null);
[$result, $err] = $client->City(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.City(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = CountriesAndCitiesSDK.test(nil, nil)
result, err = client.City(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:City(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Countries & Cities API

- Upstream: [https://countriesnow.space/](https://countriesnow.space/)
- API docs: [https://documenter.getpostman.com/view/1134062/T1LJjU52](https://documenter.getpostman.com/view/1134062/T1LJjU52)

- No licence is stated on the API homepage or community catalogue.
- The service runs without authentication and is offered free of charge.
- Confirm acceptable use with the upstream project before bundling the data into a product.

---

Generated from the Countries & Cities API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
