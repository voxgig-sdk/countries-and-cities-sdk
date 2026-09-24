

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CountriesAndCitiesSDK, BaseFeature, stdutil } from '../../..'

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


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.COUNTRIES_AND_CITIES_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'country.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"cities":{"a":true,"h":"Cities","n":"cities","r":false,"sh":"List of cities in the country","t":"`$ARRAY`","key$":"cities","index$":0},"country":{"a":true,"h":"Country","n":"country","op":{"list":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Country name","t":"`$STRING`","key$":"country","index$":1},"flag":{"a":true,"fo":"uri","h":"Flag","n":"flag","r":false,"sh":"URL to the country flag image","t":"`$STRING`","key$":"flag","index$":2},"iso2":{"a":true,"h":"Iso2","n":"iso2","r":false,"sh":"ISO 3166-1 alpha-2 code","t":"`$STRING`","key$":"iso2","index$":3},"iso3":{"a":true,"h":"Iso3","n":"iso3","r":false,"sh":"ISO 3166-1 alpha-3 code","t":"`$STRING`","key$":"iso3","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Country name","t":"`$STRING`","key$":"name","index$":5}},"name":"country","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /countries/capital","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/countries/capital","q":{"$action":"capital"},"r":{},"s":[{"lit":"countries"},{"lit":"capital"}],"t":{"req":{"country":"`reqdata`"},"res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"POST /countries/currency","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/countries/currency","q":{"$action":"currency"},"r":{},"s":[{"lit":"countries"},{"lit":"currency"}],"t":{"req":{"country":"`reqdata`"},"res":"`body.data`"},"index$":1},{"a":true,"co":{"id":"POST /countries/flag/images","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/countries/flag/images","q":{},"r":{},"s":[{"lit":"countries"},{"lit":"flag"},{"lit":"images"}],"t":{"req":{"country":"`reqdata`"},"res":"`body.data`"},"index$":2},{"a":true,"co":{"id":"POST /countries/iso","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/countries/iso","q":{"$action":"iso"},"r":{},"s":[{"lit":"countries"},{"lit":"iso"}],"t":{"req":{"country":"`reqdata`"},"res":"`body.data`"},"index$":3},{"a":true,"co":{"id":"POST /countries/population","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/countries/population","q":{"$action":"population"},"r":{},"s":[{"lit":"countries"},{"lit":"population"}],"t":{"req":{"country":"`reqdata`"},"res":"`body.data`"},"index$":4},{"a":true,"co":{"id":"POST /countries/positions","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/countries/positions","q":{"$action":"position"},"r":{},"s":[{"lit":"countries"},{"lit":"positions"}],"t":{"req":{"country":"`reqdata`"},"res":"`body.data`"},"index$":5},{"a":true,"co":{"id":"POST /countries/states","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/countries/states","q":{"$action":"state"},"r":{},"s":[{"lit":"countries"},{"lit":"states"}],"t":{"req":{"country":"`reqdata`"},"res":"`body.data`"},"index$":6}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /countries","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/countries","q":{},"r":{},"s":[{"lit":"countries"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /countries/codes","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/countries/codes","q":{"$action":"code"},"r":{},"s":[{"lit":"countries"},{"lit":"codes"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1},{"a":true,"co":{"id":"GET /countries/flag/images","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/countries/flag/images","q":{},"r":{},"s":[{"lit":"countries"},{"lit":"flag"},{"lit":"images"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":2},{"a":true,"co":{"id":"GET /countries/population","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/countries/population","q":{"$action":"population"},"r":{},"s":[{"lit":"countries"},{"lit":"population"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":3},{"a":true,"co":{"id":"GET /countries/positions","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/countries/positions","q":{"$action":"position"},"r":{},"s":[{"lit":"countries"},{"lit":"positions"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":4}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"country","name__orig":"country","Name":"Country","name_":"country","name-":"country","NAME":"COUNTRY","index$":1}, {"active":true,"entity":"country","key$":"BasicCountryFlow","kind":"basic","name":"BasicCountryFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"country_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"country_ref01"}}],"index$":1}]}, 'Country', {"POST /countries/capital":{"protocol":"http","operationId":"getCountryCapital","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"country":{"type":"string","example":"Nigeria"}},"required":["country"]}}}},"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"boolean"},"msg":{"type":"string"},"data":{"type":"object","properties":{"name":{"type":"string"},"capital":{"type":"string"},"iso2":{"type":"string"},"iso3":{"type":"string"}}}}}}}}},"parameters":[],"securitySource":"unspecified"},"POST /countries/currency":{"protocol":"http","operationId":"getCountryCurrency","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"country":{"type":"string","example":"Nigeria"}},"required":["country"]}}}},"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"boolean"},"msg":{"type":"string"},"data":{"type":"object","properties":{"name":{"type":"string"},"currency":{"type":"string"},"iso2":{"type":"string"},"iso3":{"type":"string"}}}}}}}}},"parameters":[],"securitySource":"unspecified"},"POST /countries/flag/images":{"protocol":"http","operationId":"getCountryFlag","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"country":{"type":"string","example":"Nigeria","key$":"country"}},"required":["country"],"index$":1}}}},"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"boolean"},"msg":{"type":"string"},"data":{"type":"object","properties":{"name":{"description":"Country name","type":"string","key$":"name"},"flag":{"description":"URL to the country flag image","format":"uri","type":"string","key$":"flag"},"iso2":{"description":"ISO 3166-1 alpha-2 code","type":"string","key$":"iso2"},"iso3":{"description":"ISO 3166-1 alpha-3 code","type":"string","key$":"iso3"}},"x-ref":"#/components/schemas/CountryFlag","index$":0}}}}}}},"parameters":[],"securitySource":"unspecified"},"POST /countries/iso":{"protocol":"http","operationId":"getCountryISO","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"country":{"type":"string","example":"Nigeria"}},"required":["country"]}}}},"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"boolean"},"msg":{"type":"string"},"data":{"type":"object","properties":{"name":{"type":"string"},"Iso2":{"type":"string"},"Iso3":{"type":"string"}}}}}}}}},"parameters":[],"securitySource":"unspecified"},"POST /countries/population":{"protocol":"http","operationId":"getCountryPopulation","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"country":{"type":"string","example":"Nigeria"}},"required":["country"]}}}},"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"boolean"},"msg":{"type":"string"},"data":{"type":"object","properties":{"country":{"description":"Country name","type":"string"},"code":{"description":"Country code","type":"string"},"iso3":{"description":"ISO 3166-1 alpha-3 code","type":"string"},"populationCounts":{"items":{"properties":{"value":{"type":"integer"},"year":{"type":"integer"}},"type":"object"},"type":"array"}},"x-ref":"#/components/schemas/CountryPopulation"}}}}}}},"parameters":[],"securitySource":"unspecified"},"POST /countries/positions":{"protocol":"http","operationId":"getCountryPosition","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"country":{"type":"string","example":"Nigeria"}},"required":["country"]}}}},"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"boolean"},"msg":{"type":"string"},"data":{"type":"object","properties":{"name":{"description":"Country name","type":"string"},"iso2":{"description":"ISO 3166-1 alpha-2 code","type":"string"},"long":{"description":"Longitude","format":"double","type":"number"},"lat":{"description":"Latitude","format":"double","type":"number"}},"x-ref":"#/components/schemas/CountryPosition"}}}}}}},"parameters":[],"securitySource":"unspecified"},"POST /countries/states":{"protocol":"http","operationId":"getCountryStates","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"country":{"type":"string","example":"Nigeria"}},"required":["country"]}}}},"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"boolean"},"msg":{"type":"string"},"data":{"type":"object","properties":{"name":{"type":"string"},"iso3":{"type":"string"},"states":{"type":"array","items":{"type":"object","properties":{"name":{"type":"string"},"state_code":{"type":"string"}}}}}}}}}}}},"parameters":[],"securitySource":"unspecified"},"GET /countries":{"protocol":"http","operationId":"getAllCountries","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"key$":"error","type":"boolean"},"msg":{"key$":"msg","type":"string"},"data":{"items":{"properties":{"cities":{"description":"List of cities in the country","items":{"type":"string"},"type":"array","key$":"cities"},"country":{"description":"Country name","type":"string","key$":"country"}},"type":"object","x-ref":"#/components/schemas/Country","index$":0},"key$":"data","type":"array"}}}}}}},"parameters":[],"securitySource":"unspecified"},"GET /countries/codes":{"protocol":"http","operationId":"getAllCountryCodes","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"key$":"error","type":"boolean"},"msg":{"key$":"msg","type":"string"},"data":{"items":{"properties":{"code":{"type":"string"},"name":{"type":"string"}},"type":"object"},"key$":"data","type":"array"}}}}}}},"parameters":[],"securitySource":"unspecified"},"GET /countries/flag/images":{"protocol":"http","operationId":"getAllCountryFlags","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"key$":"error","type":"boolean"},"msg":{"key$":"msg","type":"string"},"data":{"items":{"properties":{"flag":{"description":"URL to the country flag image","format":"uri","type":"string","key$":"flag"},"iso2":{"description":"ISO 3166-1 alpha-2 code","type":"string","key$":"iso2"},"iso3":{"description":"ISO 3166-1 alpha-3 code","type":"string","key$":"iso3"},"name":{"description":"Country name","type":"string","key$":"name"}},"type":"object","x-ref":"#/components/schemas/CountryFlag","index$":0},"key$":"data","type":"array"}}}}}}},"parameters":[],"securitySource":"unspecified"},"GET /countries/population":{"protocol":"http","operationId":"getCountriesPopulation","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"key$":"error","type":"boolean"},"msg":{"key$":"msg","type":"string"},"data":{"items":{"properties":{"code":{"description":"Country code","type":"string"},"country":{"description":"Country name","type":"string"},"iso3":{"description":"ISO 3166-1 alpha-3 code","type":"string"},"populationCounts":{"items":{"properties":{"value":{"type":"integer"},"year":{"type":"integer"}},"type":"object"},"type":"array"}},"type":"object","x-ref":"#/components/schemas/CountryPopulation"},"key$":"data","type":"array"}}}}}}},"parameters":[],"securitySource":"unspecified"},"GET /countries/positions":{"protocol":"http","operationId":"getAllCountryPositions","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"key$":"error","type":"boolean"},"msg":{"key$":"msg","type":"string"},"data":{"items":{"properties":{"iso2":{"description":"ISO 3166-1 alpha-2 code","type":"string"},"lat":{"description":"Latitude","format":"double","type":"number"},"long":{"description":"Longitude","format":"double","type":"number"},"name":{"description":"Country name","type":"string"}},"type":"object","x-ref":"#/components/schemas/CountryPosition"},"key$":"data","type":"array"}}}}}}},"parameters":[],"securitySource":"unspecified"}})
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
  
