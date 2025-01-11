import * as dateFnsLocales from "date-fns/locale";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import i18next from "i18next";
import enDefault from "./locales/en/translation.json";
import esDefault from "./locales/es/translation.json";
import frDefault from "./locales/fr/translation.json";
import ruDefault from "./locales/ru/translation.json";

import enProjects from "./locales/en/projects.json";
import esProjects from "./locales/es/projects.json";
import frProjects from "./locales/fr/projects.json";
import ruProjects from "./locales/ru/projects.json";

import enTestimonials from "./locales/en/testimonials.json";
import esTestimonials from "./locales/es/testimonials.json";
import frTestimonials from "./locales/fr/testimonials.json";
import ruTestimonials from "./locales/ru/testimonials.json";

export const availableLanguages = ["en", "fr", "ru", "es"] as const;
const dateLocales = {
	en: dateFnsLocales.enUS,
	fr: dateFnsLocales.fr,
	ru: dateFnsLocales.ru,
	es: dateFnsLocales.es,
};

export const dateLocale = (i18nInstance?: typeof i18n) => {
	const instance = i18nInstance || i18n;
	const lang = instance.language as (typeof availableLanguages)[number];
	return dateLocales[lang];
};

i18next
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: process.env.NODE_ENV === "development",
		defaultNS: "translation",
		fallbackLng: "en",
		resources: {
			en: {
				translation: enDefault,
				projects: enProjects,
				testimonials: enTestimonials,
			},
			es: {
				translation: esDefault,
				projects: esProjects,
				testimonials: esTestimonials,
			},
			fr: {
				translation: frDefault,
				projects: frProjects,
				testimonials: frTestimonials,
			},
			ru: {
				translation: ruDefault,
				projects: ruProjects,
				testimonials: ruTestimonials,
			},
		},
		interpolation: {
			escapeValue: false,
		},
		detection: {
			order: ["path"],
		},
	});

export default i18n;
