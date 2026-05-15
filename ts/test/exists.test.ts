
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CountriesAndCitiesSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await CountriesAndCitiesSDK.test()
    equal(null !== testsdk, true)
  })

})
