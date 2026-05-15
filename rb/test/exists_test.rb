# CountriesAndCities SDK exists test

require "minitest/autorun"
require_relative "../CountriesAndCities_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CountriesAndCitiesSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
