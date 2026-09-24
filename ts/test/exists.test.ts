
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CountriesAndCitiesSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CountriesAndCitiesSDK.test()
    equal(testsdk instanceof CountriesAndCitiesSDK, true,
      'CountriesAndCitiesSDK.test() must return a client synchronously')
  })

})
