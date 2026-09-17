"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CountryEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when COUNTRIES_AND_CITIES_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('COUNTRIES_AND_CITIES_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CountriesAndCitiesSDK.test();
        const ent = testsdk.Country();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.COUNTRIES_AND_CITIES_TEST_LIVE;
        for (const op of ['create', 'list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'country.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "cities", "req": false, "short": "List of cities in the country", "type": "`$ARRAY`", "index$": 0 }, { "active": true, "name": "country", "op": { "list": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "Country name", "type": "`$STRING`", "index$": 1 }, { "active": true, "format": "uri", "name": "flag", "req": false, "short": "URL to the country flag image", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "iso2", "req": false, "short": "ISO 3166-1 alpha-2 code", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "iso3", "req": false, "short": "ISO 3166-1 alpha-3 code", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "name", "req": false, "short": "Country name", "type": "`$STRING`", "index$": 5 }], "name": "country", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /countries/capital", "json": "{\"operationId\":\"getCountryCapital\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"country\":{\"example\":\"Nigeria\",\"type\":\"string\"}},\"required\":[\"country\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"capital\":{\"type\":\"string\"},\"iso2\":{\"type\":\"string\"},\"iso3\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"type\":\"object\"},\"error\":{\"type\":\"boolean\"},\"msg\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/countries/capital", "segments": [{ "lit": "countries" }, { "lit": "capital" }], "select": { "$action": "capital" }, "transform": { "req": { "country": "`reqdata`" }, "res": "`body.data`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "POST /countries/currency", "json": "{\"operationId\":\"getCountryCurrency\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"country\":{\"example\":\"Nigeria\",\"type\":\"string\"}},\"required\":[\"country\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"currency\":{\"type\":\"string\"},\"iso2\":{\"type\":\"string\"},\"iso3\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"type\":\"object\"},\"error\":{\"type\":\"boolean\"},\"msg\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/countries/currency", "segments": [{ "lit": "countries" }, { "lit": "currency" }], "select": { "$action": "currency" }, "transform": { "req": { "country": "`reqdata`" }, "res": "`body.data`" }, "index$": 1 }, { "active": true, "args": {}, "contract": { "id": "POST /countries/flag/images", "json": "{\"operationId\":\"getCountryFlag\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"country\":{\"example\":\"Nigeria\",\"type\":\"string\"}},\"required\":[\"country\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"flag\":{\"description\":\"URL to the country flag image\",\"format\":\"uri\",\"type\":\"string\"},\"iso2\":{\"description\":\"ISO 3166-1 alpha-2 code\",\"type\":\"string\"},\"iso3\":{\"description\":\"ISO 3166-1 alpha-3 code\",\"type\":\"string\"},\"name\":{\"description\":\"Country name\",\"type\":\"string\"}},\"type\":\"object\"},\"error\":{\"type\":\"boolean\"},\"msg\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/countries/flag/images", "segments": [{ "lit": "countries" }, { "lit": "flag" }, { "lit": "images" }], "select": {}, "transform": { "req": { "country": "`reqdata`" }, "res": "`body.data`" }, "index$": 2 }, { "active": true, "args": {}, "contract": { "id": "POST /countries/iso", "json": "{\"operationId\":\"getCountryISO\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"country\":{\"example\":\"Nigeria\",\"type\":\"string\"}},\"required\":[\"country\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"Iso2\":{\"type\":\"string\"},\"Iso3\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"type\":\"object\"},\"error\":{\"type\":\"boolean\"},\"msg\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/countries/iso", "segments": [{ "lit": "countries" }, { "lit": "iso" }], "select": { "$action": "iso" }, "transform": { "req": { "country": "`reqdata`" }, "res": "`body.data`" }, "index$": 3 }, { "active": true, "args": {}, "contract": { "id": "POST /countries/population", "json": "{\"operationId\":\"getCountryPopulation\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"country\":{\"example\":\"Nigeria\",\"type\":\"string\"}},\"required\":[\"country\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"code\":{\"description\":\"Country code\",\"type\":\"string\"},\"country\":{\"description\":\"Country name\",\"type\":\"string\"},\"iso3\":{\"description\":\"ISO 3166-1 alpha-3 code\",\"type\":\"string\"},\"populationCounts\":{\"items\":{\"properties\":{\"value\":{\"type\":\"integer\"},\"year\":{\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"error\":{\"type\":\"boolean\"},\"msg\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/countries/population", "segments": [{ "lit": "countries" }, { "lit": "population" }], "select": { "$action": "population" }, "transform": { "req": { "country": "`reqdata`" }, "res": "`body.data`" }, "index$": 4 }, { "active": true, "args": {}, "contract": { "id": "POST /countries/positions", "json": "{\"operationId\":\"getCountryPosition\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"country\":{\"example\":\"Nigeria\",\"type\":\"string\"}},\"required\":[\"country\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"iso2\":{\"description\":\"ISO 3166-1 alpha-2 code\",\"type\":\"string\"},\"lat\":{\"description\":\"Latitude\",\"format\":\"double\",\"type\":\"number\"},\"long\":{\"description\":\"Longitude\",\"format\":\"double\",\"type\":\"number\"},\"name\":{\"description\":\"Country name\",\"type\":\"string\"}},\"type\":\"object\"},\"error\":{\"type\":\"boolean\"},\"msg\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/countries/positions", "segments": [{ "lit": "countries" }, { "lit": "positions" }], "select": { "$action": "position" }, "transform": { "req": { "country": "`reqdata`" }, "res": "`body.data`" }, "index$": 5 }, { "active": true, "args": {}, "contract": { "id": "POST /countries/states", "json": "{\"operationId\":\"getCountryStates\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"country\":{\"example\":\"Nigeria\",\"type\":\"string\"}},\"required\":[\"country\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"iso3\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"states\":{\"items\":{\"properties\":{\"name\":{\"type\":\"string\"},\"state_code\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"error\":{\"type\":\"boolean\"},\"msg\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/countries/states", "segments": [{ "lit": "countries" }, { "lit": "states" }], "select": { "$action": "state" }, "transform": { "req": { "country": "`reqdata`" }, "res": "`body.data`" }, "index$": 6 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /countries", "json": "{\"operationId\":\"getAllCountries\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"cities\":{\"description\":\"List of cities in the country\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"country\":{\"description\":\"Country name\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"error\":{\"type\":\"boolean\"},\"msg\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/countries", "segments": [{ "lit": "countries" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "GET /countries/codes", "json": "{\"operationId\":\"getAllCountryCodes\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"code\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"error\":{\"type\":\"boolean\"},\"msg\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/countries/codes", "segments": [{ "lit": "countries" }, { "lit": "codes" }], "select": { "$action": "code" }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 1 }, { "active": true, "args": {}, "contract": { "id": "GET /countries/flag/images", "json": "{\"operationId\":\"getAllCountryFlags\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"flag\":{\"description\":\"URL to the country flag image\",\"format\":\"uri\",\"type\":\"string\"},\"iso2\":{\"description\":\"ISO 3166-1 alpha-2 code\",\"type\":\"string\"},\"iso3\":{\"description\":\"ISO 3166-1 alpha-3 code\",\"type\":\"string\"},\"name\":{\"description\":\"Country name\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"error\":{\"type\":\"boolean\"},\"msg\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/countries/flag/images", "segments": [{ "lit": "countries" }, { "lit": "flag" }, { "lit": "images" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 2 }, { "active": true, "args": {}, "contract": { "id": "GET /countries/population", "json": "{\"operationId\":\"getCountriesPopulation\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"code\":{\"description\":\"Country code\",\"type\":\"string\"},\"country\":{\"description\":\"Country name\",\"type\":\"string\"},\"iso3\":{\"description\":\"ISO 3166-1 alpha-3 code\",\"type\":\"string\"},\"populationCounts\":{\"items\":{\"properties\":{\"value\":{\"type\":\"integer\"},\"year\":{\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"},\"error\":{\"type\":\"boolean\"},\"msg\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/countries/population", "segments": [{ "lit": "countries" }, { "lit": "population" }], "select": { "$action": "population" }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 3 }, { "active": true, "args": {}, "contract": { "id": "GET /countries/positions", "json": "{\"operationId\":\"getAllCountryPositions\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"iso2\":{\"description\":\"ISO 3166-1 alpha-2 code\",\"type\":\"string\"},\"lat\":{\"description\":\"Latitude\",\"format\":\"double\",\"type\":\"number\"},\"long\":{\"description\":\"Longitude\",\"format\":\"double\",\"type\":\"number\"},\"name\":{\"description\":\"Country name\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"error\":{\"type\":\"boolean\"},\"msg\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/countries/positions", "segments": [{ "lit": "countries" }, { "lit": "positions" }], "select": { "$action": "position" }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 4 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "country", "name__orig": "country", "Name": "Country", "name_": "country", "name-": "country", "NAME": "COUNTRY", "index$": 1 }, { "active": true, "entity": "country", "key$": "BasicCountryFlow", "kind": "basic", "name": "BasicCountryFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "country_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "country_ref01" } }], "index$": 1 }] }, 'Country');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const country_ref01_ent = client.Country();
        let country_ref01_data = setup.data.new.country['country_ref01'];
        country_ref01_data = (await country_ref01_ent.create(country_ref01_data)).data();
        (0, node_assert_1.default)(null != country_ref01_data);
        // LIST
        const country_ref01_match = {};
        const country_ref01_list = (await country_ref01_ent.list(country_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/country/CountryTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CountriesAndCitiesSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['country01', 'country02', 'country03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'COUNTRIES_AND_CITIES_TEST_COUNTRY_ENTID': idmap,
        'COUNTRIES_AND_CITIES_TEST_LIVE': 'FALSE',
        'COUNTRIES_AND_CITIES_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['COUNTRIES_AND_CITIES_TEST_COUNTRY_ENTID'];
    const live = 'TRUE' === env.COUNTRIES_AND_CITIES_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['COUNTRIES_AND_CITIES_TEST_COUNTRY_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CountriesAndCitiesSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.COUNTRIES_AND_CITIES_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=CountryEntity.test.js.map