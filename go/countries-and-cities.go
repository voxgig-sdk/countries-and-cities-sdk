package voxgigcountriesandcitiessdk

import (
	"github.com/voxgig-sdk/countries-and-cities-sdk/core"
	"github.com/voxgig-sdk/countries-and-cities-sdk/entity"
	"github.com/voxgig-sdk/countries-and-cities-sdk/feature"
	_ "github.com/voxgig-sdk/countries-and-cities-sdk/utility"
)

// Type aliases preserve external API.
type CountriesAndCitiesSDK = core.CountriesAndCitiesSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CountriesAndCitiesEntity = core.CountriesAndCitiesEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CountriesAndCitiesError = core.CountriesAndCitiesError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCityEntityFunc = func(client *core.CountriesAndCitiesSDK, entopts map[string]any) core.CountriesAndCitiesEntity {
		return entity.NewCityEntity(client, entopts)
	}
	core.NewCountryEntityFunc = func(client *core.CountriesAndCitiesSDK, entopts map[string]any) core.CountriesAndCitiesEntity {
		return entity.NewCountryEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCountriesAndCitiesSDK = core.NewCountriesAndCitiesSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
