import { gql } from "@apollo/client";

export const GET_LANGUAGES_LIST = gql`
  {
    Language {
      name
      nativeName
    }
  }
`;

export const GET_CURRENCIES_LIST = gql`
  {
    Currency {
      name
      symbol
      code
    }
  }
`;

export const GET_REGIONS_LIST = gql`
  {
    Region {
      name
      subregions {
        name
      }
    }
  }
`;

export const GET_COUNTRIES_LIST = gql`
  {
    Country {
      name
      area
      capital
      population
      alpha2Code
      nativeName
      flag {
        emoji
        emojiUnicode
        svgFile
      }
      location {
        latitude
        longitude
      }
      currencies {
        name
        symbol
      }
      officialLanguages {
        name
        nativeName
      }
      callingCodes {
        name
      }
      subregion {
        name
        region {
          name
        }
      }
      regionalBlocs {
        name
        acronym
      }
      alternativeSpellings {
        name
      }
    }
  }
`;
