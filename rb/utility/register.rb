# CountriesAndCities SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CountriesAndCitiesUtility.registrar = ->(u) {
  u.clean = CountriesAndCitiesUtilities::Clean
  u.done = CountriesAndCitiesUtilities::Done
  u.make_error = CountriesAndCitiesUtilities::MakeError
  u.feature_add = CountriesAndCitiesUtilities::FeatureAdd
  u.feature_hook = CountriesAndCitiesUtilities::FeatureHook
  u.feature_init = CountriesAndCitiesUtilities::FeatureInit
  u.fetcher = CountriesAndCitiesUtilities::Fetcher
  u.make_fetch_def = CountriesAndCitiesUtilities::MakeFetchDef
  u.make_context = CountriesAndCitiesUtilities::MakeContext
  u.make_options = CountriesAndCitiesUtilities::MakeOptions
  u.make_request = CountriesAndCitiesUtilities::MakeRequest
  u.make_response = CountriesAndCitiesUtilities::MakeResponse
  u.make_result = CountriesAndCitiesUtilities::MakeResult
  u.make_point = CountriesAndCitiesUtilities::MakePoint
  u.make_spec = CountriesAndCitiesUtilities::MakeSpec
  u.make_url = CountriesAndCitiesUtilities::MakeUrl
  u.param = CountriesAndCitiesUtilities::Param
  u.prepare_auth = CountriesAndCitiesUtilities::PrepareAuth
  u.prepare_body = CountriesAndCitiesUtilities::PrepareBody
  u.prepare_headers = CountriesAndCitiesUtilities::PrepareHeaders
  u.prepare_method = CountriesAndCitiesUtilities::PrepareMethod
  u.prepare_params = CountriesAndCitiesUtilities::PrepareParams
  u.prepare_path = CountriesAndCitiesUtilities::PreparePath
  u.prepare_query = CountriesAndCitiesUtilities::PrepareQuery
  u.result_basic = CountriesAndCitiesUtilities::ResultBasic
  u.result_body = CountriesAndCitiesUtilities::ResultBody
  u.result_headers = CountriesAndCitiesUtilities::ResultHeaders
  u.transform_request = CountriesAndCitiesUtilities::TransformRequest
  u.transform_response = CountriesAndCitiesUtilities::TransformResponse
}
