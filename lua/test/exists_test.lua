-- ProjectName SDK exists test

local sdk = require("countries-and-cities_sdk")

describe("CountriesAndCitiesSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
