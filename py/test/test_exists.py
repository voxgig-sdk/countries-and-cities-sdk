# ProjectName SDK exists test

import pytest
from countriesandcities_sdk import CountriesAndCitiesSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CountriesAndCitiesSDK.test(None, None)
        assert testsdk is not None
