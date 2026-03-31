import { Translation } from './types'

interface AboutTranslations extends Translation<{
	title: string
	subtitle: string
  subtitleEffect: string
	description1: string
	description2: string
	highlights: {
		[key: string]: {
			title: string
			description: string
		}
	}
  yearsOfExperience: string
	technologies: string
}> {}

export const aboutTranslations: AboutTranslations = {
	en: {
		title: 'About Me',
		subtitle: 'Transforming ideas into',
    subtitleEffect: 'digital experiences',
		description1:
			'I am a developer passionate about transforming complex challenges into high-impact digital products. With a degree in Computer Science from UFBA, I focus on creating scalable architectures and exceptional interfaces within the JavaScript ecosystem.',
		description2:
			'Beyond the code, I am driven by the curiosity of learning something new every day. Whether exploring chords on the guitar, planning the next trip, or studying new technologies, I am always seeking to expand my creativity.',
		highlights: {
			cleanCode: {
				title: 'Clean Code',
				description: 'I write scalable, testable, and maintainable code.',
			},
			modernDesign: {
				title: 'Modern Design',
				description: 'Intuitive interfaces focused on UX and accessibility.',
			},
			performance: {
				title: 'Performance',
				description: 'Optimization for fast loading and smooth experience.',
			},
			collaboration: {
				title: 'Collaboration',
				description: 'Clear communication and efficient teamwork.',
			},
		},
		yearsOfExperience: '5+ years of experience',
		technologies: 'Technologies',
	},
	pt: {
		title: 'Sobre Mim',
		subtitle: 'Transformando ideias em',
    subtitleEffect: 'experiências digitais',
		description1:
			'Sou um desenvolvedor apaixonado por transformar desafios complexos em produtos digitais de alto impacto. Com formação em Ciência da Computação pela UFBA, foco em criar arquiteturas escaláveis e interfaces excepcionais no ecossistema JavaScript.',
		description2:
			'Fora do código, sou movido pela curiosidade de aprender algo novo todos os dias. Seja explorando acordes no violão, planejando a próxima viagem ou estudando novas tecnologias, busco sempre expandir minha criatividade.',
		highlights: {
			cleanCode: {
				title: 'Código Limpo',
				description:
					'Escrevo código escalável, testável e de fácil manutenção.',
			},
			modernDesign: {
				title: 'Design Moderno',
				description: 'Interfaces intuitivas com foco em UX e acessibilidade.',
			},
			performance: {
				title: 'Performance',
				description:
					'Otimização para carregamento rápido e experiência fluida.',
			},
			collaboration: {
				title: 'Colaboração',
				description: 'Comunicação clara e trabalho eficiente em equipe.',
			},
		},
    yearsOfExperience: '5+ anos de experiência',
		technologies: 'Tecnologias',
	},
}
