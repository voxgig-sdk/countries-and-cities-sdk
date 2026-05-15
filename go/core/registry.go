package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCityEntityFunc func(client *CountriesAndCitiesSDK, entopts map[string]any) CountriesAndCitiesEntity

var NewCountryEntityFunc func(client *CountriesAndCitiesSDK, entopts map[string]any) CountriesAndCitiesEntity

