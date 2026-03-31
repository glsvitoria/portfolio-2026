import { Translation } from './types'

interface NotFoundTranslations extends Translation<{
	title: string
	subtitle: string
	description: string
	backHome: string
  backButton: string
}> {}

export const notFoundTranslations: NotFoundTranslations = {
	pt: {
		title: '404',
		subtitle: 'Página não encontrada',
		description:
			'Ops! Parece que você tentou acessar uma rota que não existe ou foi movida.',
		backHome: 'Voltar para o Início',
    backButton: 'Voltar',
	},
	en: {
		title: '404',
		subtitle: 'Page not found',
		description:
			"Oops! It looks like you tried to access a route that doesn't exist or has been moved.",
		backHome: 'Back to Home',
    backButton: 'Go Back',
	},
}
