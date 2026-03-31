import { Translation } from './types'

interface ExperiencesTranslations extends Translation<{
	title: string
	subtitle: string
	subtitleEffect: string
	description: string
	data: {
		startDate: string
		endDate: string
		role: string
		company: string
		description: string
		technologies: string[]
	}[]
}> {}

export const experienceTranslations: ExperiencesTranslations = {
	en: {
		title: 'Experience',
		subtitle: 'My',
		subtitleEffect: 'professional journey',
		description: 'A journey of continuous learning and growth as a developer.',
		data: [
			{
				company: 'Blue Saúde',
				description:
					'Technical leadership of multidisciplinary teams in the development of scalable SaaS products. Responsible for end-to-end fullstack architecture, code standards definition, and implementation of real-time systems with WebSockets for high performance.',
				endDate: 'Present',
				role: 'Tech Lead',
				startDate: 'April 2025',
				technologies: [
					'Next.js',
					'Zustand',
					'Monorepo',
					'Websockets',
					'Typescript',
				],
			},
			{
				company: 'Blue Saúde',
				description:
					'Development of a streaming platform for low-latency video interviews. Focus on monorepo architecture, creation of Design Systems with ShadCN, and automation of unit and integration tests.',
				endDate: 'March 2025',
				role: 'Frontend Developer',
				startDate: 'February 2024',
				technologies: [
					'React',
					'Design System',
					'ShadCN',
					'Vitest',
					'Testing Library',
				],
			},
			{
				company: 'VFlows',
				description:
					'Building responsive interfaces and reusable component libraries. Involvement in cloud infrastructure with AWS (Nginx/SSL) and collaboration in agile squads focused on scalable deliveries.',
				endDate: 'March 2023',
				role: 'Web and Mobile Front-End Developer',
				startDate: 'January 2024',
				technologies: ['React Native', 'Tailwind CSS', 'AWS', 'Nginx', 'Scrum'],
			},
			{
				company: 'AutoU',
				description:
					'Implementation of scalable features and intuitive interfaces. Responsible for modeling PostgreSQL/MySQL databases and developing RESTful APIs for efficient system integration.',
				endDate: 'April 2022',
				role: 'Fullstack Developer',
				startDate: 'February 2023',
				technologies: ['HTML', 'CSS', 'Express', 'PostgreSQL', 'Rest APIs'],
			},
			{
				company: 'TITAN CI (Junior Company)',
				description:
					'Developed front-end solutions for various clients, focusing on usability and performance. Acted as a technical leader, guiding the team and ensuring the quality of deliveries in agile projects.',
				endDate: 'January 2026',
				role: 'Fullstack Developer',
				startDate: 'March 2021',
				technologies: [
					'Team Management',
					'Scrum',
					'Mentorship',
					'Product Owner',
				],
			},
		],
	},
	pt: {
		title: 'Trajetória',
		subtitle: 'Minha',
		subtitleEffect: 'trajetória profissional',
		description:
			'Uma jornada de aprendizado contínuo e evolução como desenvolvedor.',
		data: [
			{
				company: 'Blue Saúde',
				description:
					'Liderança técnica de times multidisciplinares no desenvolvimento de produtos SaaS escaláveis. Responsável pela arquitetura fullstack ponta a ponta, definição de padrões de código e implementação de sistemas real-time com WebSockets para alta performance.',
				endDate: 'Presente',
				role: 'Tech Lead',
				startDate: 'Abril 2025',
				technologies: [
					'Next.js',
					'Zustand',
					'Monorepo',
					'Websockets',
					'Typescript',
				],
			},
			{
				company: 'Blue Saúde',
				description:
					'Desenvolvimento de uma plataforma de streaming para entrevistas em vídeo com baixa latência. Foco em arquitetura de monorepos, criação de Design Systems com ShadCN e automação de testes unitários e de integração.',
				endDate: 'Março 2025',
				role: 'Desenvolvedor Frontend',
				startDate: 'Fevereiro 2024',
				technologies: [
					'React',
					'Design System',
					'ShadCN',
					'Vitest',
					'Testing Library',
				],
			},
			{
				company: 'VFlows',
				description:
					'Construção de interfaces responsivas e bibliotecas de componentes reutilizáveis. Atuação na infraestrutura cloud com AWS (Nginx/SSL) e colaboração em squads ágeis com foco em entregas escaláveis.',
				endDate: 'Março 2023',
				role: 'Desenvolvedor Front-End Web e Mobile',
				startDate: 'Janeiro 2024',
				technologies: ['React Native', 'Tailwind CSS', 'AWS', 'Nginx', 'Scrum'],
			},
			{
				company: 'AutoU',
				description:
					'Implementação de funcionalidades escaláveis e interfaces intuitivas. Responsável pela modelagem de bancos de dados PostgreSQL/MySQL e desenvolvimento de APIs RESTful para integração eficiente entre sistemas.',
				endDate: 'Abril 2022',
				role: 'Desenvolvedor Fullstack',
				startDate: 'Fevereiro 2023',
				technologies: ['HTML', 'CSS', 'Express', 'PostgreSQL', 'Rest APIs'],
			},
			{
				company: 'TITAN CI (Empresa júnior)',
				description:
					'Desenvolvi soluções front-end para clientes diversos, focando em usabilidade e performance. Atuei como líder técnico, orientando a equipe e garantindo a qualidade das entregas em projetos ágeis.',
				endDate: 'Janeiro 2026',
				role: 'Desenvolvedor Fullstack',
				startDate: 'Março 2021',
				technologies: [
					'Gestão de Equipe',
					'Scrum',
					'Mentoria',
					'Product Owner',
				],
			},
		],
	},
}
