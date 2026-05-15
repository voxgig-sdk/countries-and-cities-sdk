-- CountriesAndCities SDK error

local CountriesAndCitiesError = {}
CountriesAndCitiesError.__index = CountriesAndCitiesError


function CountriesAndCitiesError.new(code, msg, ctx)
  local self = setmetatable({}, CountriesAndCitiesError)
  self.is_sdk_error = true
  self.sdk = "CountriesAndCities"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CountriesAndCitiesError:error()
  return self.msg
end


function CountriesAndCitiesError:__tostring()
  return self.msg
end


return CountriesAndCitiesError
