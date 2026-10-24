

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CountriesAndCitiesSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('CountryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when COUNTRIES_AND_CITIES_TEST_LIVE=TRUE.
  afterEach(liveDelay('COUNTRIES_AND_CITIES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CountriesAndCitiesSDK.test()
    const ent = testsdk.Country()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('country hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CountriesAndCitiesSDK.test(offline).Country().stream('list')) { }
    }, /offline/)

    for await (const _item of CountriesAndCitiesSDK.test(offline).Country()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CountriesAndCitiesSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Country().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CountriesAndCitiesSDK.test().Country().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CountriesAndCitiesSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Country().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Country().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CountriesAndCitiesSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Country().list({"country":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.COUNTRIES_AND_CITIES_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'country.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"cities":{"a":true,"h":"Cities","n":"cities","r":false,"sh":"List of cities in the country","t":"`$ARRAY`","key$":"cities","index$":0},"country":{"a":true,"h":"Country","n":"country","op":{"list":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Country name","t":"`$STRING`","key$":"country","index$":1},"data":{"a":true,"h":"Data","n":"data","r":false,"t":"`$OBJECT`","key$":"data","index$":2},"error":{"a":true,"h":"Error","n":"error","r":false,"t":"`$BOOLEAN`","key$":"error","index$":3},"flag":{"a":true,"fo":"uri","h":"Flag","n":"flag","r":false,"sh":"URL to the country flag image","t":"`$STRING`","key$":"flag","index$":4},"iso2":{"a":true,"h":"Iso2","n":"iso2","r":false,"sh":"ISO 3166-1 alpha-2 code","t":"`$STRING`","key$":"iso2","index$":5},"iso3":{"a":true,"h":"Iso3","n":"iso3","r":false,"sh":"ISO 3166-1 alpha-3 code","t":"`$STRING`","key$":"iso3","index$":6},"msg":{"a":true,"h":"Msg","n":"msg","r":false,"t":"`$STRING`","key$":"msg","index$":7},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Country name","t":"`$STRING`","key$":"name","index$":8}},"name":"country","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["country"],"co":{"id":"POST /countries/capital","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/countries/capital","q":{"$action":"capital"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"countries"},{"lit":"capital"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["country"],"co":{"id":"POST /countries/currency","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/countries/currency","q":{"$action":"currency"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"countries"},{"lit":"currency"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"bf":["country"],"co":{"id":"POST /countries/flag/images","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/countries/flag/images","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"countries"},{"lit":"flag"},{"lit":"images"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"bf":["country"],"co":{"id":"POST /countries/iso","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/countries/iso","q":{"$action":"iso"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"countries"},{"lit":"iso"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"bf":["country"],"co":{"id":"POST /countries/population","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/countries/population","q":{"$action":"population"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"countries"},{"lit":"population"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"bf":["country"],"co":{"id":"POST /countries/positions","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/countries/positions","q":{"$action":"position"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"countries"},{"lit":"positions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5},{"a":true,"bf":["country"],"co":{"id":"POST /countries/states","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/countries/states","q":{"$action":"state"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"countries"},{"lit":"states"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":6}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /countries","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/countries","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"countries"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /countries/codes","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/countries/codes","q":{"$action":"code"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"countries"},{"lit":"codes"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1},{"a":true,"co":{"id":"GET /countries/flag/images","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/countries/flag/images","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"countries"},{"lit":"flag"},{"lit":"images"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":2},{"a":true,"co":{"id":"GET /countries/population","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/countries/population","q":{"$action":"population"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"countries"},{"lit":"population"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":3},{"a":true,"co":{"id":"GET /countries/positions","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/countries/positions","q":{"$action":"position"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"countries"},{"lit":"positions"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":4}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"country","name__orig":"country","Name":"Country","name_":"country","name-":"country","NAME":"COUNTRY","index$":1}, {"active":true,"entity":"country","key$":"BasicCountryFlow","kind":"basic","name":"BasicCountryFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"country_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"country_ref01"}}],"index$":1}]}, 'Country', {"POST /countries/capital":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"country":{"type":"string","example":"Nigeria"}},"required":["country"]}}}},"parameters":[]},"POST /countries/currency":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"country":{"type":"string","example":"Nigeria"}},"required":["country"]}}}},"parameters":[]},"POST /countries/flag/images":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"country":{"type":"string","example":"Nigeria","key$":"country"}},"required":["country"],"index$":1}}}},"parameters":[]},"POST /countries/iso":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"country":{"type":"string","example":"Nigeria"}},"required":["country"]}}}},"parameters":[]},"POST /countries/population":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"country":{"type":"string","example":"Nigeria"}},"required":["country"]}}}},"parameters":[]},"POST /countries/positions":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"country":{"type":"string","example":"Nigeria"}},"required":["country"]}}}},"parameters":[]},"POST /countries/states":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"country":{"type":"string","example":"Nigeria"}},"required":["country"]}}}},"parameters":[]},"GET /countries":{"protocol":"http","parameters":[]},"GET /countries/codes":{"protocol":"http","parameters":[]},"GET /countries/flag/images":{"protocol":"http","parameters":[]},"GET /countries/population":{"protocol":"http","parameters":[]},"GET /countries/positions":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const country_ref01_ent = client.Country()
    let country_ref01_data = setup.data.new.country['country_ref01']

    country_ref01_data = (await country_ref01_ent.create(country_ref01_data)).data()
    assert(null != country_ref01_data)


    // LIST
    const country_ref01_match: any = {}

    const country_ref01_list = (await country_ref01_ent.list(country_ref01_match)).map((e: any) => e.data())


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/country/CountryTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CountriesAndCitiesSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['country01','country02','country03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'COUNTRIES_AND_CITIES_TEST_COUNTRY_ENTID': idmap,
    'COUNTRIES_AND_CITIES_TEST_LIVE': 'FALSE',
    'COUNTRIES_AND_CITIES_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['COUNTRIES_AND_CITIES_TEST_COUNTRY_ENTID']

  const live = 'TRUE' === env.COUNTRIES_AND_CITIES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['COUNTRIES_AND_CITIES_TEST_COUNTRY_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CountriesAndCitiesSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
