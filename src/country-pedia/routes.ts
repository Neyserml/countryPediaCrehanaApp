import { ModuleRoute } from "../module-routes";

export enum CountryPediaPath {
  Init = "init",
  Detail = "detail",
}

export const COUNTRY_PEDIA_MODULE_ROUTES = {
  Init: `${ModuleRoute.CountryPedia}/${CountryPediaPath.Init}`,
  Detail: `${ModuleRoute.CountryPedia}/${CountryPediaPath.Init}/${CountryPediaPath.Detail}`,
};
