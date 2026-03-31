'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Palette, Rocket, Users } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/language-context'
import Image from 'next/image'

export function About() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	const { t, language } = useLanguage()

	const highlights = [
		{
			icon: Code2,
			title: t.about.highlights.cleanCode.title,
			description: t.about.highlights.cleanCode.description,
		},
		{
			icon: Palette,
			title: t.about.highlights.modernDesign.title,
			description: t.about.highlights.modernDesign.description,
		},
		{
			icon: Rocket,
			title: t.about.highlights.performance.title,
			description: t.about.highlights.performance.description,
		},
		{
			icon: Users,
			title: t.about.highlights.collaboration.title,
			description: t.about.highlights.collaboration.description,
		},
	]

	return (
		<section id="about" className="py-32 relative overflow-hidden">
			<div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />
			<div className="absolute bottom-0 right-1/4 w-64 h-64 bg-magenta/10 rounded-full blur-3xl" />

			<div className="container mx-auto px-6" ref={ref}>
				<div className="max-w-6xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6 }}
						className="text-center mb-16"
					>
						<span className="text-cyan text-sm font-medium uppercase tracking-wider mb-4 block">
							{t.about.title}
						</span>
						<h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
							{t.about.subtitle}{' '}
							<span className="text-gradient">{t.about.subtitleEffect}</span>
						</h2>
					</motion.div>

					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={isInView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="relative"
						>
							<div className="relative aspect-square max-w-md mx-auto">
								<div className="absolute inset-0 rounded-2xl border border-cyan/30 -rotate-3 translate-x-4 translate-y-4" />
								<div className="absolute inset-0 rounded-2xl border border-magenta/30 rotate-3 -translate-x-4 -translate-y-4" />

								<div className="relative z-10 aspect-square rounded-2xl glass overflow-hidden flex items-center justify-center">
									<div className="w-full h-full bg-linear-to-br from-cyan/20 via-magenta/20 to-red-glow/20 flex items-center justify-center">
										<Image
											src="/profile.jpg"
											alt="Guilherme Vitória"
											fill
											className="object-cover"
										/>
									</div>
								</div>

								<motion.div
									animate={{ y: [-5, 5, -5] }}
									transition={{
										duration: 3,
										repeat: Infinity,
										ease: 'easeInOut',
									}}
									className="absolute -right-4 -bottom-4 z-20 glass rounded-xl px-4 py-3"
								>
									<p className="text-sm font-medium">
										{t.about.yearsOfExperience}
									</p>
								</motion.div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={isInView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							<p className="text-lg text-muted-foreground mb-6 leading-relaxed">
								{t.about.description1}
							</p>
							<p className="text-lg text-muted-foreground mb-8 leading-relaxed">
								{t.about.description2}
							</p>

							<div className="grid sm:grid-cols-2 gap-4">
								{highlights.map((item, index) => (
									<motion.div
										key={item.title}
										initial={{ opacity: 0, y: 20 }}
										animate={isInView ? { opacity: 1, y: 0 } : {}}
										transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
										className="glass rounded-xl p-4 group hover:border-cyan/50 transition-colors"
									>
										<div className="flex items-start gap-3">
											<div className="p-2 rounded-lg bg-cyan/10 text-cyan group-hover:bg-cyan/20 transition-colors">
												<item.icon className="size-5" />
											</div>
											<div>
												<h3 className="font-medium mb-1">{item.title}</h3>
												<p className="text-sm text-muted-foreground">
													{item.description}
												</p>
											</div>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	)
}
