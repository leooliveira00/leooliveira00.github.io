import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import PT-BR translations
import commonPT from '../locales/pt-BR/common.json';
import heroPT from '../locales/pt-BR/hero.json';
import aboutPT from '../locales/pt-BR/about.json';
import whatIBuildPT from '../locales/pt-BR/whatIBuild.json';
import projectsPT from '../locales/pt-BR/projects.json';
import skillsPT from '../locales/pt-BR/skills.json';
import contactPT from '../locales/pt-BR/contact.json';
import footerPT from '../locales/pt-BR/footer.json';

// Import EN-US translations
import commonEN from '../locales/en-US/common.json';
import heroEN from '../locales/en-US/hero.json';
import aboutEN from '../locales/en-US/about.json';
import whatIBuildEN from '../locales/en-US/whatIBuild.json';
import projectsEN from '../locales/en-US/projects.json';
import skillsEN from '../locales/en-US/skills.json';
import contactEN from '../locales/en-US/contact.json';
import footerEN from '../locales/en-US/footer.json';

const resources = {
  'pt-BR': {
    common: commonPT,
    hero: heroPT,
    about: aboutPT,
    whatIBuild: whatIBuildPT,
    projects: projectsPT,
    skills: skillsPT,
    contact: contactPT,
    footer: footerPT
  },
  'en-US': {
    common: commonEN,
    hero: heroEN,
    about: aboutEN,
    whatIBuild: whatIBuildEN,
    projects: projectsEN,
    skills: skillsEN,
    contact: contactEN,
    footer: footerEN
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt-BR',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
