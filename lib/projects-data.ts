export interface Project {
	id: string
	image?: string
	technologies: string[]
	liveUrl?: string
	githubUrl?: string
	appStoreUrl?: string
	playStoreUrl?: string
	featured: boolean
	category: string
	year: string
  detach: boolean
}

export const projects: Project[] = [
	{
		id: 'qualifica-bem',
		featured: true,
    detach: true,
		category: 'SaaS',
		year: '2025',
		image: '/qualifica-bem.png',
		technologies: [
			'React.js',
			'TypeScript',
			'Node.js',
			'WebSockets',
			'Vitest',
			'Tailwind CSS',
			'Monorepo',
		],
		liveUrl: 'https://qualificabem.com/',
	},
	{
		id: 'onboardix',
		featured: true,
    detach: true,
		category: 'Fullstack',
		year: '2026',
		image: '/onboardix.png',
		technologies: [
			'Next.js',
			'Nest.js',
			'PostgreSQL',
			'Prisma',
			'ShadCN',
			'Zod',
			'TailwindCSS',
		],
		liveUrl: 'https://onboardix.vercel.app/',
		githubUrl: 'https://github.com/glsvitoria/onboardix-front',
	},
	{
		id: 'mkmotobox',
		featured: true,
    detach: false,
		category: 'Fullstack',
		year: '2024',
		image: '/mk-motobox.png',
		technologies: [
			'Next.js',
			'Strapi CMS',
			'PostgreSQL',
			'ISR',
			'REST API',
			'Framer Motion',
		],
		liveUrl: 'https://www.mkmotobox.com.br/',
		githubUrl: 'https://github.com/glsvitoria/front-mk-motobox',
	},
	{
		id: 'dojicheck',
		featured: true,
    detach: true,
		category: 'Mobile',
		year: '2026',
		image: '/dojicheck.png',
		technologies: [
			'React Native',
			'Expo',
			'TypeScript',
			'NativeWind',
			'React Query',
			'Jest',
			'Maestro',
			'EAS',
		],
		appStoreUrl: 'https://apps.apple.com/app/id6763075570',
		playStoreUrl:
			'https://play.google.com/store/apps/details?id=com.doji.dojicheck',
	},
	{
		id: 'blue-saude',
		featured: true,
    detach: true,
		category: 'Frontend',
		year: '2024',
		image: '/lp-blue.png',
		technologies: [
			'Next.js',
			'TypeScript',
			'Framer Motion',
			'TailwindCSS',
			'Lucide React',
			'SEO',
		],
		liveUrl: 'https://www.saudeblue.com/',
	},
	{
		id: 'lottery-smart-contract',
		featured: true,
    detach: false,
		category: 'Smart Contract',
		year: '2026',
		image: '/projects/lottery-contract.jpg',
		technologies: [
			'Solidity',
			'Mocha',
			'Ganache',
			'Web3.js',
			'Solc',
			'HDWallet Provider',
		],
		githubUrl: 'https://github.com/glsvitoria/lottery-contract',
	},
	{
		id: 'lottery-web3-ui',
		featured: true,
    detach: false,
		category: 'Frontend',
		year: '2026',
		image: '/projects/lottery-web3-ui.jpg',
		technologies: [
			'React.js',
			'Web3.js',
			'ShadCN/UI',
			'TypeScript',
			'TailwindCSS',
			'Framer Motion',
		],
		liveUrl: 'https://lottery-front-contract.vercel.app/',
		githubUrl: 'https://github.com/glsvitoria/lottery-front',
	},
	{
		id: 'color-convert',
		featured: true,
    detach: false,
		category: 'Frontend',
		year: '2025',
		image: '/color-convert.png',
		technologies: [
			'Next.js',
			'TypeScript',
			'TailwindCSS',
			'Lucide React',
			'Zod',
			'Context API',
		],
		liveUrl: 'https://converter-color.vercel.app/',
		githubUrl: 'https://github.com/glsvitoria/color-convert',
	},
	{
		id: 'accredited-network',
		featured: true,
    detach: false,
		category: 'Frontend',
		year: '2024',
		technologies: [
			'Next.js',
			'Material UI',
			'Zustand',
      'React Hook Form',
			'API',
		],
	},
	{
		id: 'enterprise-panel',
		featured: true,
    detach: false,
		category: 'Frontend',
		year: '2024',
		technologies: [
			'React.js',
			'Material UI',
			'React Hook Form',
			'Zod',
		],
	},
]

export const detachedProjects = projects.filter((project) => project.detach)
export const allProjects = projects
