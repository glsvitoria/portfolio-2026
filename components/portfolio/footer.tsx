'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/language-context'
import Image from 'next/image'

const socialLinks = [
	{ name: 'GitHub', href: process.env.NEXT_PUBLIC_GITHUB_URL, icon: Github },
	{
		name: 'LinkedIn',
		href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
		icon: Linkedin,
	},
	{ name: 'Email', href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`, icon: Mail },
]

export function Footer() {
	const currentYear = new Date().getFullYear()
	const { t } = useLanguage()

	const navLinks = [
		{ name: t.nav.home, href: '#hero' },
		{ name: t.nav.about, href: '#about' },
		{ name: t.nav.skills, href: '#skills' },
		{ name: t.nav.experience, href: '#experience' },
		{ name: t.nav.projects, href: '#projects' },
		{ name: t.nav.contact, href: '#contact' },
	]

	return (
		<footer className="relative py-16 border-t border-border">
			<div className="absolute inset-0 bg-linear-to-t from-secondary/20 to-transparent" />

			<div className="container mx-auto px-6 relative">
				<div className="max-w-6xl mx-auto">
					<div className="grid md:grid-cols-3 gap-12 mb-12">
						<div>
							<a href="#hero" className="inline-flex items-center gap-2 mb-4">
								<motion.div
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
									className="w-10 h-10 rounded-lg bg-linear-to-br from-cyan to-magenta flex items-center justify-center group relative overflow-hidden"
								>
									<span className="text-white font-bold text-lg group-hover:opacity-0 transition-opacity duration-300">
										GV
									</span>
									<Image
										src="/icon.jpg"
										alt="Logo"
										fill
										className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									/>
								</motion.div>
								<span className="font-bold text-xl">Guilherme Vitória</span>
							</a>
							<p className="text-muted-foreground text-sm leading-relaxed">
								{t.hero.description}
							</p>
						</div>

						<div>
							<h4 className="font-semibold mb-4">
								{t.nav.home === 'Início' ? 'Navegação' : 'Navigation'}
							</h4>
							<nav className="grid grid-cols-2 gap-2">
								{navLinks.map((link) => (
									<a
										key={link.href}
										href={link.href}
										className="text-sm text-muted-foreground hover:text-foreground transition-colors"
									>
										{link.name}
									</a>
								))}
							</nav>
						</div>

						<div>
							<h4 className="font-semibold mb-4">
								{t.nav.home === 'Início' ? 'Redes Sociais' : 'Social Media'}
							</h4>
							<div className="flex gap-3">
								{socialLinks.map((link) => (
									<motion.a
										key={link.name}
										href={link.href}
										target={link.href?.startsWith('http') ? '_blank' : undefined}
										rel={
											link.href?.startsWith('http')
												? 'noopener noreferrer'
												: undefined
										}
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.95 }}
										className="w-10 h-10 glass rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-cyan/50 transition-colors"
										aria-label={link.name}
									>
										<link.icon className="size-5" />
									</motion.a>
								))}
							</div>
						</div>
					</div>

					<div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
						<p className="text-sm text-muted-foreground">
							&copy; {currentYear} Guilherme Vitória. {t.footer.rights}
						</p>
						<p className="text-sm text-muted-foreground flex items-center gap-1">
							{t.footer.madeWith}{' '}
							<Heart className="size-4 text-magenta fill-magenta" />{' '}
							{t.footer.and} Next.js
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
