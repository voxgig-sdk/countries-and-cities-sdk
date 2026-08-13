# CountriesAndCities SDK utility: make_context

from countriesandcities_sdk.core.context import CountriesAndCitiesContext


def make_context_util(ctxmap, basectx):
    return CountriesAndCitiesContext(ctxmap, basectx)
