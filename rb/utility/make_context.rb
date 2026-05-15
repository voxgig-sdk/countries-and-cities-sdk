# CountriesAndCities SDK utility: make_context
require_relative '../core/context'
module CountriesAndCitiesUtilities
  MakeContext = ->(ctxmap, basectx) {
    CountriesAndCitiesContext.new(ctxmap, basectx)
  }
end
