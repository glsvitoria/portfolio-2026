import { Translation } from './types'

interface SkillsTranslations extends Translation<{
	title: string
	subtitle: string
	subtitleEffect: string
	description: string
	all: string
	frontend: string
	backend: string
	tools: string
	technologies: {
		[key: string]: string
	}
}> {}

export const skillsTranslations: SkillsTranslations = {
	en: {
		title: 'Skills',
		subtitle: 'Technology that',
		subtitleEffect: 'dominate',
		description:
			'Years of experience have allowed me to develop proficiency in various modern web development technologies.',
		all: 'All',
		frontend: 'Front-end',
		backend: 'Back-end',
		tools: 'Tools',
    technologies: {
      'Next.js': 'SSR, SSG, App Router, Server Components and performance optimization.',
      'TypeScript': 'Type-safety across the entire stack, advanced generics, and API integration.',
      'Nest.js': 'Framework Node.js for building scalable and high-performance APIs with TypeScript.'
    }
	},
	pt: {
		title: 'Habilidades',
		subtitle: 'Tecnologias que',
		subtitleEffect: 'domino',
		description:
			'Anos de experiência me permitiram desenvolver proficiência em diversas tecnologias modernas de desenvolvimento web.',
		all: 'Todas',
		frontend: 'Front-end',
		backend: 'Back-end',
		tools: 'Ferramentas',
    technologies: {
        'Next.js': 'SSR, SSG, App Router, Server Components e otimização de performance.',
        'TypeScript': 'Type-safety em toda a stack, generics avançados e integração com APIs.',
        'Nest.js': 'Framework Node.js para construir APIs escaláveis e de alta performance com TypeScript.'
    }
	},
}
