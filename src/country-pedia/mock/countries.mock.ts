import { Country } from "../domain/country";
import { GeographicSubRegion } from "../domain/country-pedia-response";

export const COUNTRIES_STUB: Country[] = [
  {
    name: "Afghanistan",
    area: 652230,
    capital: "Kabul",
    population: 27657145,
    alpha2Code: "AF",
    nativeName: "افغانستان",
    flag: {
      emoji: "🇦🇫",
      emojiUnicode: "U+1F1E6 U+1F1EB",
      svgFile: "https://restcountries.eu/data/afg.svg",
    },
    location: {
      latitude: 33,
      longitude: 65,
    },
    currencies: [
      {
        name: "Afghan afghani",
        symbol: "؋",
      },
    ],
    officialLanguages: [
      {
        name: "Turkmen",
        nativeName: "Türkmen",
      },
      {
        name: "Uzbek",
        nativeName: "Oʻzbek",
      },
      {
        name: "Pashto",
        nativeName: "پښتو",
      },
    ],
    callingCodes: [
      {
        name: "93",
      },
    ],
    subregion: {
      name: "Southern Asia",
      region: {
        name: "Asia",
      },
    } as GeographicSubRegion,
  },
  {
    name: "Albania",
    area: 28748,
    capital: "Tirana",
    population: 2886026,
    alpha2Code: "AL",
    nativeName: "Shqipëria",
    flag: {
      emoji: "🇦🇱",
      emojiUnicode: "U+1F1E6 U+1F1F1",
      svgFile: "https://restcountries.eu/data/alb.svg",
    },
    location: {
      latitude: 41,
      longitude: 20,
    },
    currencies: [
      {
        name: "Albanian lek",
        symbol: "L",
      },
    ],
    officialLanguages: [
      {
        name: "Albanian",
        nativeName: "Shqip",
      },
    ],
    callingCodes: [
      {
        name: "355",
      },
    ],
    subregion: {
      name: "Southern Europe",
      region: {
        name: "Europe",
      },
    } as GeographicSubRegion,
  },
  {
    name: "Angola",
    area: 1246700,
    capital: "Luanda",
    population: 25868000,
    alpha2Code: "AO",
    nativeName: "Angola",
    flag: {
      emoji: "🇦🇴",
      emojiUnicode: "U+1F1E6 U+1F1F4",
      svgFile: "https://restcountries.eu/data/ago.svg",
    },
    location: {
      latitude: -12.5,
      longitude: 18.5,
    },
    currencies: [
      {
        name: "Angolan kwanza",
        symbol: "Kz",
      },
    ],
    officialLanguages: [
      {
        name: "Portuguese",
        nativeName: "Português",
      },
    ],
    callingCodes: [
      {
        name: "244",
      },
    ],
    subregion: {
      name: "Middle Africa",
      region: {
        name: "Africa",
      },
    } as GeographicSubRegion,
  },
];
