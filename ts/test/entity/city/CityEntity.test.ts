

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


describe('CityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when COUNTRIES_AND_CITIES_TEST_LIVE=TRUE.
  afterEach(liveDelay('COUNTRIES_AND_CITIES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CountriesAndCitiesSDK.test()
    const ent = testsdk.City()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.COUNTRIES_AND_CITIES_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'city.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"city":{"a":true,"h":"City","n":"city","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"City name","t":"`$STRING`","key$":"city","index$":0},"country":{"a":true,"h":"Country","n":"country","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"Country name","t":"`$STRING`","key$":"country","index$":1},"data":{"a":true,"h":"Data","n":"data","r":false,"t":"`$ARRAY`","key$":"data","index$":2},"error":{"a":true,"h":"Error","n":"error","r":false,"t":"`$BOOLEAN`","key$":"error","index$":3},"msg":{"a":true,"h":"Msg","n":"msg","r":false,"t":"`$STRING`","key$":"msg","index$":4},"populationCounts":{"a":true,"h":"Population Counts","n":"populationCounts","r":false,"t":"`$ARRAY`","key$":"populationCounts","index$":5},"state":{"a":true,"h":"State","n":"state","r":true,"t":"`$STRING`","key$":"state","index$":6}},"name":"city","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /countries/population/cities","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/countries/population/cities","q":{},"r":{},"s":[{"lit":"countries"},{"lit":"population"},{"lit":"cities"}],"t":{"req":{"city":"`reqdata`"},"res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"POST /countries/population/cities/filter","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/countries/population/cities/filter","q":{"$action":"filter"},"r":{},"s":[{"lit":"countries"},{"lit":"population"},{"lit":"cities"},{"lit":"filter"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /countries/state/cities","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/countries/state/cities","q":{},"r":{},"s":[{"lit":"countries"},{"lit":"state"},{"lit":"cities"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /countries/population/cities","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/countries/population/cities","q":{},"r":{},"s":[{"lit":"countries"},{"lit":"population"},{"lit":"cities"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"city","name__orig":"city","Name":"City","name_":"city","name-":"city","NAME":"CITY","index$":0}, {"active":true,"entity":"city","key$":"BasicCityFlow","kind":"basic","name":"BasicCityFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"city_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"city_ref01"}}],"index$":1}]}, 'City', {"POST /countries/population/cities":{"protocol":"http","operationId":"getCityPopulation","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"city":{"type":"string","example":"Lagos","key$":"city"}},"required":["city"],"index$":1}}}},"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"boolean"},"msg":{"type":"string"},"data":{"type":"object","properties":{"city":{"description":"City name","type":"string","key$":"city"},"country":{"description":"Country name","type":"string","key$":"country"},"populationCounts":{"items":{"properties":{"reliabilty":{"type":"string"},"sex":{"type":"string"},"value":{"type":"string"},"year":{"type":"string"}},"type":"object"},"type":"array","key$":"populationCounts"}},"x-ref":"#/components/schemas/CityPopulation","index$":0}}}}}}},"parameters":[],"securitySource":"unspecified"},"POST /countries/population/cities/filter":{"protocol":"http","operationId":"filterCitiesByPopulation","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"limit":{"type":"integer","example":10},"order":{"type":"string","enum":["asc","dsc"],"example":"dsc"},"orderBy":{"type":"string","example":"population"}}}}}},"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"boolean"},"msg":{"type":"string"},"data":{"type":"array","items":{"type":"object","properties":{"city":{"description":"City name","type":"string","key$":"city"},"country":{"description":"Country name","type":"string","key$":"country"},"populationCounts":{"items":{"properties":{"reliabilty":{"type":"string"},"sex":{"type":"string"},"value":{"type":"string"},"year":{"type":"string"}},"type":"object"},"type":"array","key$":"populationCounts"}},"x-ref":"#/components/schemas/CityPopulation"}}}}}}}},"parameters":[],"securitySource":"unspecified"},"POST /countries/state/cities":{"protocol":"http","operationId":"getStateCities","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"country":{"type":"string","example":"Nigeria","key$":"country"},"state":{"type":"string","example":"Lagos","key$":"state"}},"required":["country","state"],"index$":1}}}},"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"boolean","key$":"error"},"msg":{"type":"string","key$":"msg"},"data":{"type":"array","items":{"type":"string"},"key$":"data"}},"index$":0}}}}},"parameters":[],"securitySource":"unspecified"},"GET /countries/population/cities":{"protocol":"http","operationId":"getAllCitiesPopulation","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"key$":"error","type":"boolean"},"msg":{"key$":"msg","type":"string"},"data":{"items":{"properties":{"city":{"description":"City name","type":"string","key$":"city"},"country":{"description":"Country name","type":"string","key$":"country"},"populationCounts":{"items":{"properties":{"reliabilty":{"type":"string"},"sex":{"type":"string"},"value":{"type":"string"},"year":{"type":"string"}},"type":"object"},"type":"array","key$":"populationCounts"}},"type":"object","x-ref":"#/components/schemas/CityPopulation","index$":0},"key$":"data","type":"array"}}}}}}},"parameters":[],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const city_ref01_ent = client.City()
    let city_ref01_data = setup.data.new.city['city_ref01']

    city_ref01_data = (await city_ref01_ent.create(city_ref01_data)).data()
    assert(null != city_ref01_data)


    // LIST
    const city_ref01_match: any = {}

    const city_ref01_list = (await city_ref01_ent.list(city_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/city/CityTestData.json')

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
    ['city01','city02','city03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'COUNTRIES_AND_CITIES_TEST_CITY_ENTID': idmap,
    'COUNTRIES_AND_CITIES_TEST_LIVE': 'FALSE',
    'COUNTRIES_AND_CITIES_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['COUNTRIES_AND_CITIES_TEST_CITY_ENTID']

  const live = 'TRUE' === env.COUNTRIES_AND_CITIES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['COUNTRIES_AND_CITIES_TEST_CITY_ENTID']
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
  
