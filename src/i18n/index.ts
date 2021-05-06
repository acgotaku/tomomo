import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zh from './lang/zh-CN';
import en from './lang/en';
import ja from './lang/ja';

Vue.use(VueI18n);

export const internalLang = 'en';

export const i18n = new VueI18n({
  locale: internalLang,
  fallbackLocale: internalLang,
  messages: {
    'zh-CN': {
      ...zh
    },
    en,
    ja
  }
});

function setI18nLanguage(lang: string): string {
  i18n.locale = lang;
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('language', lang);
  return lang;
}

(function () {
  const defaultLangName = localStorage.getItem('language') || internalLang;
  setI18nLanguage(defaultLangName);
})();
