import { Translation } from './types'

interface FooterTranslations extends Translation<{
	rights: string
	madeWith: string
	and: string
}> {}

export const footerTranslations: FooterTranslations = {
	en: {
		rights: 'All rights reserved.',
		madeWith: 'Made with',
		and: 'and',
	},
	pt: {
		rights: 'Todos os direitos reservados.',
		madeWith: 'Feito com',
		and: 'e',
	},
}
