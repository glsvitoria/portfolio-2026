import { Translation } from './types'

interface ProjectsTranslations extends Translation<{
	title: string
	titleEffect: string
	subtitle: string
	description: string
	viewProject: string
	viewCode: string
	technologies: string
	seeMore: string
	seeMoreDescription: string
	seeMoreButton: string
	backButton: string
	filterLabel: string
	allCategory: string
	emptyState: string
	featuredBadge: string
	viewDetails: string
	ariaLive: string
	ariaGithub: string
	data: {
		[key: string]: {
			title: string
			description: string
			longDescription: string
		}
	}
}> {}

export const projectsTranslations: ProjectsTranslations = {
	en: {
		title: 'Detached',
		titleEffect: 'Projects',
		subtitle: 'Portfolio',
		description:
			'Scroll down for an immersive experience through my main projects.',
		viewProject: 'View Project',
		viewCode: 'View Code',
		technologies: 'Technologies',
		seeMore: 'Want to see more?',
		seeMoreDescription:
			'Check out all my projects in the complete gallery with filters and details.',
		seeMoreButton: 'View all projects',
		backButton: 'Back',
		filterLabel: 'Filter by category',
		allCategory: 'All',
		emptyState: 'No projects found in this category.',
		featuredBadge: 'Detached',
		viewDetails: 'View details',
		ariaLive: 'See live project',
		ariaGithub: 'See code on GitHub',
		data: {
			'qualifica-bem': {
				title: 'Qualifica Bem',
				description: 'Qualified interview SaaS for health insurance providers.',
				longDescription:
					'Robust Monorepo-structured ecosystem managing the full cycle of qualified interviews. It implements dynamic health declarations and a real-time video streaming system via WebSockets.',
			},
			onboardix: {
				title: 'Onboardix',
				description:
					'Intelligent ecosystem for corporate training management and automation.',
				longDescription:
					'HR-focused solution for creating and monitoring learning paths. It features an interactive dashboard with real-time data visualization.',
			},
			mkmotobox: {
				title: 'MK Motobox',
				description:
					'High-impact digital showroom with inventory management via Headless CMS.',
				longDescription:
					'Robust platform combining Next.js and Strapi. It allows real-time stock management with ISR for instant loading.',
			},
			'audit-log': {
				title: 'Audit Log',
				description:
					'Centralized API for corporate event logging and monitoring.',
				longDescription:
					'Specialized action traceability service designed to ensure log integrity through a scalable infrastructure.',
			},
			'blue-saude': {
				title: 'Blue Saúde',
				description:
					'High-conversion institutional landing page for a health provider.',
				longDescription:
					'Development focused on fluid and modern UX, leveraging Next.js for performance and Framer Motion.',
			},
			'lottery-smart-contract': {
				title: 'Lottery Smart Contract',
				description: 'Decentralized lottery engine developed in Solidity.',
				longDescription:
					'Autonomous Ethereum smart contract with a Mocha test suite to ensure security and randomness.',
			},
			'lottery-web3-ui': {
				title: 'Lottery Web3 Interface',
				description: 'Modern interface for smart contract interaction.',
				longDescription:
					'Web3 frontend for wallet connection and real-time ticket viewing.',
			},
			'color-convert': {
				title: 'Color Convert',
				description: 'High-performance utility tool for color conversion.',
				longDescription:
					'Productivity-focused application allowing instant conversion between HEX, RGB, HSL, and CMYK formats.',
			},
			'accredited-network': {
				title: 'Provider Network Search',
				description:
					'Smart search engine for beneficiaries to find healthcare providers.',
				longDescription:
					'A high-performance search platform for health plan members. It features advanced multi-criteria filtering by state, city, specialty, and neighborhood, providing a seamless UX for finding the nearest accredited clinics, hospitals, and doctors.',
			},
			'enterprise-panel': {
				title: 'Enterprise Panel',
				description: 'Comprehensive dashboard for enterprise data management.',
				longDescription:
					'A robust dashboard solution designed for enterprises to manage your beneficiaries being able to include, update or remove them with ease, providing real-time insights and analytics for informed decision-making.',
			},
		},
	},
	pt: {
		title: 'Projetos em',
		titleEffect: 'Destaque',
		subtitle: 'Portfolio',
		description:
			'Role para uma experiência imersiva pelos meus principais projetos.',
		viewProject: 'Ver Projeto',
		viewCode: 'Ver Código',
		technologies: 'Tecnologias',
		seeMore: 'Quer ver mais?',
		seeMoreDescription:
			'Confira todos os meus projetos na galeria completa com filtros e detalhes.',
		seeMoreButton: 'Ver todos os projetos',
		backButton: 'Voltar',
		filterLabel: 'Filtrar por categoria',
		allCategory: 'Todos',
		emptyState: 'Nenhum projeto encontrado nesta categoria.',
		featuredBadge: 'Destaque',
		viewDetails: 'Ver detalhes',
		ariaLive: 'Ver projeto ao vivo',
		ariaGithub: 'Ver código no GitHub',
		data: {
			'qualifica-bem': {
				title: 'Qualifica Bem',
				description:
					'SaaS de entrevista qualificada para operadoras de plano de saúde.',
				longDescription:
					'Ecossistema robusto estruturado em Monorepo que gerencia o ciclo completo de entrevistas qualificadas. Implementa declarações de saúde dinâmicas e streaming de vídeo em tempo real.',
			},
			onboardix: {
				title: 'Onboardix',
				description:
					'Ecossistema inteligente para gestão e automação de treinamentos corporativos.',
				longDescription:
					'Solução voltada para o setor de RH que permite a criação e o monitoramento de trilhas de aprendizado.',
			},
			mkmotobox: {
				title: 'MK Motobox',
				description:
					'Showroom digital de alto impacto com gestão de inventário via Headless CMS.',
				longDescription:
					'Plataforma robusta unindo Next.js e Strapi. Permite gerenciamento de estoque em tempo real com ISR.',
			},
			'audit-log': {
				title: 'Audit Log',
				description:
					'API centralizada para registro e monitoramento de eventos corporativos.',
				longDescription:
					'Serviço especializado em rastreabilidade de ações desenvolvido para garantir a integridade dos logs.',
			},
			'blue-saude': {
				title: 'Blue Saúde',
				description:
					'Landing Page institucional de alta conversão para operadora de saúde.',
				longDescription:
					'Desenvolvimento focado em UX fluida e moderna, utilizando Next.js e Framer Motion.',
			},
			'lottery-smart-contract': {
				title: 'Lottery Smart Contract',
				description:
					'Motor de sorteios descentralizado desenvolvido em Solidity.',
				longDescription:
					'Contrato inteligente autônomo na Ethereum com suíte de testes para garantir segurança.',
			},
			'lottery-web3-ui': {
				title: 'Lottery Web3 Interface',
				description:
					'Interface moderna para interação com contratos inteligentes.',
				longDescription:
					'Frontend Web3 para conexão de carteiras e visualização de bilhetes em tempo real.',
			},
			'color-convert': {
				title: 'Color Convert',
				description:
					'Ferramenta utilitária de alta performance para conversão de cores.',
				longDescription:
					'Aplicação que permite conversão instantânea entre formatos HEX, RGB, HSL e CMYK.',
			},
			'accredited-network': {
				title: 'Rede Credenciada',
				description:
					'Buscador inteligente para beneficiários encontrarem locais de atendimento.',
				longDescription:
					'Plataforma de busca de alta performance desenvolvida para beneficiários da Blue. O sistema conta com filtragem avançada por estado, cidade, especialidade e bairro, garantindo uma experiência fluida na localização de clínicas, hospitais e médicos credenciados.',
			},
			'enterprise-panel': {
				title: 'Painel Empresa',
				description: 'Dashboard completo para gestão de dados empresariais.',
				longDescription:
					'Solução robusta de dashboard projetada para empresas gerenciarem seus beneficiários podendo incluir, atualizar ou remover com facilidade, fornecendo insights e análises em tempo real para tomada de decisões informadas.',
			},
		},
	},
}
