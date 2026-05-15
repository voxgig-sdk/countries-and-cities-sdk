# CountriesAndCities SDK utility: feature_add
module CountriesAndCitiesUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
