# CountriesAndCities SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module CountriesAndCitiesFeatures
  def self.make_feature(name)
    case name
    when "base"
      CountriesAndCitiesBaseFeature.new
    when "ratelimit"
      CountriesAndCitiesRatelimitFeature.new
    when "retry"
      CountriesAndCitiesRetryFeature.new
    when "test"
      CountriesAndCitiesTestFeature.new
    when "timeout"
      CountriesAndCitiesTimeoutFeature.new
    else
      CountriesAndCitiesBaseFeature.new
    end
  end
end
