# CountriesAndCities SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CountriesAndCitiesFeatures
  def self.make_feature(name)
    case name
    when "base"
      CountriesAndCitiesBaseFeature.new
    when "test"
      CountriesAndCitiesTestFeature.new
    else
      CountriesAndCitiesBaseFeature.new
    end
  end
end
