import {
  Currency,
  GeographicSubRegion,
  Language,
  Location,
} from "./country-pedia-response";

export interface Flag {
  emoji: string;
  emojiUnicode: string;
  svgFile: string;
}

export interface CallingCode {
  name: string;
}

export interface Country {
  name: string;
  area: number;
  capital: string;
  alpha2Code: string;
  nativeName: string;
  population: number;
  flag: Flag;
  location: Location;
  currencies: Currency[];
  officialLanguages: Language[];
  callingCodes: CallingCode[];
  subregion: GeographicSubRegion;
}
