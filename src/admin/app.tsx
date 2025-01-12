import type { StrapiApp } from "@strapi/strapi/admin";

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
  theme: {
    light: {
      colors: {
        primary100: "#A7E6CF",
        primary200: "#67CBAA",
        primary500: "#20B486",
        buttonPrimary500: "#A7E6CF",
        primary600: "#1A926F",
        buttonPrimary600: "#92D4B9",
        primary700: "#147559",
      },
    },
  },
};
