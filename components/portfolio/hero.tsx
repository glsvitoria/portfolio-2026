'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FloatingShapes } from './floating-shapes'
import { useLanguage } from '@/lib/i18n/language-context'

export function Hero() {
	const { t } = useLanguage()

	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center justify-center overflow-hidden"
		>
			<div className="absolute inset-0 bg-grid opacity-30" />
			<div className="absolute inset-0 bg-linear-to-b from-background via-background/80 to-background" />

			<FloatingShapes />

			<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/20 rounded-full blur-3xl" />
			<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta/20 rounded-full blur-3xl" />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-glow/10 rounded-full blur-3xl" />

			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-4xl mx-auto text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
					>
						<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
						<span className="text-sm text-muted-foreground">
							{t.hero.available}
						</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
					>
						<span className="text-balance">
							{t.hero.greeting}{' '}
							<span className="text-gradient">{t.hero.name}</span>
						</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-xl md:text-2xl text-muted-foreground mb-4"
					>
						{t.hero.role}
					</motion.p>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
					>
						{t.hero.description}
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
					>
						<Button
							asChild
							size="lg"
							className="bg-linear-to-r from-magenta to-cyan text-white hover:opacity-90 transition-opacity px-8 glow-magenta"
						>
							<a href="#projects">{t.hero.cta}</a>
						</Button>
						<Button
							asChild
							variant="outline"
							size="lg"
							className="border-border hover:bg-secondary/50 hover:text-white px-8"
						>
							<a href="#contact">{t.hero.ctaSecondary}</a>
						</Button>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="flex items-center justify-center gap-4"
					>
						<a
							href={process.env.NEXT_PUBLIC_GITHUB_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="w-12 h-12 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:glow-cyan transition-all"
							aria-label="GitHub"
						>
							<Github className="size-5" />
						</a>
						<a
							href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="w-12 h-12 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:glow-cyan transition-all"
							aria-label="LinkedIn"
						>
							<Linkedin className="size-5" />
						</a>
						<a
							href={process.env.NEXT_PUBLIC_EMAIL}
							className="w-12 h-12 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:glow-cyan transition-all"
							aria-label="Email"
						>
							<Mail className="size-5" />
						</a>
					</motion.div>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
			>
				<motion.a
					href="#about"
					animate={{ y: [0, 10, 0] }}
					transition={{ repeat: Infinity, duration: 2 }}
					className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
					aria-label="Scroll para a próxima seção"
				>
					<span className="text-xs uppercase tracking-wider">Scroll</span>
					<ArrowDown className="size-4" />
				</motion.a>
			</motion.div>
		</section>
	)
}
