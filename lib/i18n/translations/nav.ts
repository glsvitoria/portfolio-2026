import { Translation } from './types'

interface NavTranslations extends Translation<{
	home: string
	about: string
	skills: string
	experience: string
	projects: string
	contact: string
}> {}

export const navTranslations: NavTranslations = {
	pt: {
		home: 'Início',
		about: 'Sobre',
		skills: 'Skills',
		experience: 'Experiência',
		projects: 'Projetos',
		contact: 'Contato',
	},
	en: {
		home: 'Home',
		about: 'About',
		skills: 'Skills',
		experience: 'Experience',
		projects: 'Projects',
		contact: 'Contact',
	},
}
