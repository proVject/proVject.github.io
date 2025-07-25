import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'

const locales = {
    'en': {code: 'en', name: 'English'},
    'uk': {code: 'uk', name: 'Українська'},
}

const browserLang = navigator.language.split('-')[0];
const supportedBrowserLang = Object.keys(locales).find(c => browserLang === c)
const savedLocale = localStorage.getItem('locale') || supportedBrowserLang || 'en';

const i18n = createI18n({
    locale: savedLocale,
    fallbackLocale: 'en',
    messages: {en},
})


export const loadLocaleMessages = async (locale) => {
    const messages = await import(`../locales/${locale}.json`);
    i18n.global.setLocaleMessage(locale, messages.default);
    localStorage.setItem('locale', locale || 'en');
    document.documentElement.lang = locale;
    i18n.global.locale = locale;
    return messages;
}

export default i18n