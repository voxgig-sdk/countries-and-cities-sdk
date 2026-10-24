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
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CityEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when COUNTRIES_AND_CITIES_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('COUNTRIES_AND_CITIES_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CountriesAndCitiesSDK.test();
        const ent = testsdk.City();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('city hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.CountriesAndCitiesSDK.test(offline).City().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.CountriesAndCitiesSDK.test(offline).City()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.CountriesAndCitiesSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.City().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.CountriesAndCitiesSDK.test().City().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.CountriesAndCitiesSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.City().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.City().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.CountriesAndCitiesSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.City().list({ "city": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.COUNTRIES_AND_CITIES_TEST_LIVE;
        for (const op of ['create', 'list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'city.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "city": { "a": true, "h": "City", "n": "city", "op": { "list": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "City name", "t": "`$STRING`", "key$": "city", "index$": 0 }, "country": { "a": true, "h": "Country", "n": "country", "op": { "list": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Country name", "t": "`$STRING`", "key$": "country", "index$": 1 }, "data": { "a": true, "h": "Data", "n": "data", "r": false, "t": "`$OBJECT`", "key$": "data", "index$": 2 }, "error": { "a": true, "h": "Error", "n": "error", "r": false, "t": "`$BOOLEAN`", "key$": "error", "index$": 3 }, "msg": { "a": true, "h": "Msg", "n": "msg", "r": false, "t": "`$STRING`", "key$": "msg", "index$": 4 }, "populationCounts": { "a": true, "h": "Population Counts", "n": "populationCounts", "r": false, "t": "`$ARRAY`", "key$": "populationCounts", "index$": 5 }, "state": { "a": true, "h": "State", "n": "state", "r": true, "t": "`$STRING`", "key$": "state", "index$": 6 } }, "name": "city", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["city"], "co": { "id": "POST /countries/population/cities", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/countries/population/cities", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "countries" }, { "lit": "population" }, { "lit": "cities" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["limit", "order", "orderBy"], "co": { "id": "POST /countries/population/cities/filter", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/countries/population/cities/filter", "q": { "$action": "filter" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "countries" }, { "lit": "population" }, { "lit": "cities" }, { "lit": "filter" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "bf": ["country", "state"], "co": { "id": "POST /countries/state/cities", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/countries/state/cities", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "countries" }, { "lit": "state" }, { "lit": "cities" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /countries/population/cities", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/countries/population/cities", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "countries" }, { "lit": "population" }, { "lit": "cities" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "city", "name__orig": "city", "Name": "City", "name_": "city", "name-": "city", "NAME": "CITY", "index$": 0 }, { "active": true, "entity": "city", "key$": "BasicCityFlow", "kind": "basic", "name": "BasicCityFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "city_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "city_ref01" } }], "index$": 1 }] }, 'City', { "POST /countries/population/cities": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "city": { "type": "string", "example": "Lagos", "key$": "city" } }, "required": ["city"], "index$": 1 } } } }, "parameters": [] }, "POST /countries/population/cities/filter": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "limit": { "type": "integer", "example": 10 }, "order": { "type": "string", "enum": ["asc", "dsc"], "example": "dsc" }, "orderBy": { "type": "string", "example": "population" } } } } } }, "parameters": [] }, "POST /countries/state/cities": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "country": { "type": "string", "example": "Nigeria", "key$": "country" }, "state": { "type": "string", "example": "Lagos", "key$": "state" } }, "required": ["country", "state"], "index$": 1 } } } }, "parameters": [] }, "GET /countries/population/cities": { "protocol": "http", "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const city_ref01_ent = client.City();
        let city_ref01_data = setup.data.new.city['city_ref01'];
        city_ref01_data = (await city_ref01_ent.create(city_ref01_data)).data();
        (0, node_assert_1.default)(null != city_ref01_data);
        // LIST
        const city_ref01_match = {};
        const city_ref01_list = (await city_ref01_ent.list(city_ref01_match)).map((e) => e.data());
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/city/CityTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CountriesAndCitiesSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['city01', 'city02', 'city03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'COUNTRIES_AND_CITIES_TEST_CITY_ENTID': idmap,
        'COUNTRIES_AND_CITIES_TEST_LIVE': 'FALSE',
        'COUNTRIES_AND_CITIES_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['COUNTRIES_AND_CITIES_TEST_CITY_ENTID'];
    const live = 'TRUE' === env.COUNTRIES_AND_CITIES_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['COUNTRIES_AND_CITIES_TEST_CITY_ENTID'];
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
//# sourceMappingURL=CityEntity.test.js.map