package = "voxgig-sdk-countries-and-cities"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/countries-and-cities-sdk.git"
}
description = {
  summary = "CountriesAndCities SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["countries-and-cities_sdk"] = "countries-and-cities_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
