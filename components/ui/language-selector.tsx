'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/language-context'
import { Language } from '@/lib/i18n/translations'
import { cn } from '@/lib/utils'

export function LanguageSelector() {
	const { language, setLanguage } = useLanguage()

	const languages: { code: Language; label: string }[] = [
		{ code: 'pt', label: 'PT' },
		{ code: 'en', label: 'EN' },
	]

	return (
		<div className="flex items-center gap-1 p-1 rounded-full bg-secondary/50 border border-border/50">
			{languages.map((lang) => (
				<button
					key={lang.code}
					onClick={() => setLanguage(lang.code)}
					className={cn(
						'relative px-3 py-1 text-xs font-medium transition-colors rounded-full cursor-pointer',
						language === lang.code ? 'bg-linear-to-r from-cyan to-magenta' : '',
					)}
					aria-label={`Mudar idioma para ${lang.code === 'pt' ? 'Português' : 'English'}`}
				>
					{language === lang.code && (
						<motion.div
							layoutId="language-indicator"
							className="absolute inset-0 bg-linear-to-r from-cyan to-magenta rounded-full"
							transition={{ type: 'spring', duration: 0.5 }}
						/>
					)}
					<span
						className={`relative z-10 ${
							language === lang.code
								? 'text-background '
								: 'text-muted-foreground hover:text-foreground'
						}`}
					>
						{lang.label}
					</span>
				</button>
			))}
		</div>
	)
}
