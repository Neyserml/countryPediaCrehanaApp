export interface Language {
  name: string;
  nativeName: string;
}

export interface Currency {
  name: string;
  symbol?: string;
  code?: string;
}

export interface SubRegion {
  name: string;
}

export interface Region {
  name: string;
  subregions: SubRegion[];
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface GeographicSubRegion {
  name: string;
  region: Region;
}

export interface LanguageResponse {
  Language: Language[];
}

export interface CurrenciesResoponse {
  Currency: Currency[];
}

export interface RegionsResponse {
  Region: Region[];
}
