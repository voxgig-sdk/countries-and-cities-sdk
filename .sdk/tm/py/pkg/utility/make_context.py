# CountriesAndCities SDK utility: make_context

from projectname_sdk.core.context import CountriesAndCitiesContext


def make_context_util(ctxmap, basectx):
    return CountriesAndCitiesContext(ctxmap, basectx)
