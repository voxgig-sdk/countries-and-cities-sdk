# CountriesAndCities SDK feature factory

from feature.base_feature import CountriesAndCitiesBaseFeature
from feature.test_feature import CountriesAndCitiesTestFeature


def _make_feature(name):
    features = {
        "base": lambda: CountriesAndCitiesBaseFeature(),
        "test": lambda: CountriesAndCitiesTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
