import { Translation } from './types'

interface HeroTranslations extends Translation<{
	available: string
	greeting: string
	name: string
	role: string
	description: string
	cta: string
	ctaSecondary: string
}> {}

export const heroTranslations: HeroTranslations = {
	pt: {
    available: 'Disponível para novos projetos',
		greeting: 'Olá, eu sou',
		name: 'Guilherme Vitória',
		role: 'Software Engineer',
		description:
			'Front-end Developer & Fullstack Developer especializado em criar experiências digitais excepcionais com React, Next.js e TypeScript.',
		cta: 'Ver Projetos',
		ctaSecondary: 'Entrar em Contato',
	},
	en: {
    available: 'Available for new projects',
		greeting: "Hi, I'm",
		name: 'Guilherme Vitória',
		role: 'Software Engineer',
		description:
			'Front-end Developer & Fullstack Developer specialized in creating exceptional digital experiences with React, Next.js, and TypeScript.',
		cta: 'View Projects',
		ctaSecondary: 'Get in Touch',
	},
}
