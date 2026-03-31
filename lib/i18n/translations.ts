import { aboutTranslations } from './translations/about'
import { contactTranslations } from './translations/contact'
import { experienceTranslations } from './translations/experiences'
import { footerTranslations } from './translations/footer'
import { heroTranslations } from './translations/hero'
import { navTranslations } from './translations/nav'
import { notFoundTranslations } from './translations/not-found'
import { projectsTranslations } from './translations/projects'
import { skillsTranslations } from './translations/skills'

export const translations = {
	pt: {
		nav: navTranslations.pt,
		hero: heroTranslations.pt,
		about: aboutTranslations.pt,
		skills: skillsTranslations.pt,
		experience: experienceTranslations.pt,
		projects: projectsTranslations.pt,
		contact: contactTranslations.pt,
		footer: footerTranslations.pt,
		notFound: notFoundTranslations.pt,
    
	},
	en: {
		nav: navTranslations.en,
		hero: heroTranslations.en,
		about: aboutTranslations.en,
		skills: skillsTranslations.en,
		experience: experienceTranslations.en,
		projects: projectsTranslations.en,
		contact: contactTranslations.en,
		footer: footerTranslations.en,
		notFound: notFoundTranslations.en,
	},
} as const

export type Language = keyof typeof translations
export type TranslationKeys = typeof translations.pt
