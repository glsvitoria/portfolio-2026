'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Calendar } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/language-context'

export function Experience() {
	const { t } = useLanguage()

	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })

	return (
		<section id="experience" className="py-32 relative overflow-hidden">
			<div className="absolute top-1/2 left-0 w-96 h-96 bg-magenta/10 rounded-full blur-3xl -translate-y-1/2" />
			<div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />

			<div className="container mx-auto px-6 relative" ref={ref}>
				<div className="max-w-4xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6 }}
						className="text-center mb-16"
					>
						<span className="text-cyan text-sm font-medium uppercase tracking-wider mb-4 block">
							{t.experience.title}
						</span>
						<h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
							{t.experience.subtitle}{' '}
							<span className="text-gradient">{t.experience.subtitleEffect}</span>
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
							{t.experience.description}
						</p>
					</motion.div>

					<div className="relative">
						<div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-cyan via-magenta to-red-glow md:-translate-x-1/2" />

						{t.experience.data.map((exp, index) => (
							<motion.div
								key={exp.role + exp.company}
								initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
								animate={isInView ? { opacity: 1, x: 0 } : {}}
								transition={{ duration: 0.6, delay: index * 0.2 }}
								className={`relative mb-12 md:mb-16 ${
									index % 2 === 0
										? 'md:pr-[50%] md:text-right'
										: 'md:pl-[50%] md:text-left'
								}`}
							>
								<div
									className={`absolute top-0 w-4 h-4 rounded-full bg-linear-to-br from-cyan to-magenta ${
										index % 2 === 0
											? 'left-0 md:left-1/2 md:-translate-x-1/2'
											: 'left-0 md:left-1/2 md:-translate-x-1/2'
									}`}
								>
									<div className="absolute inset-0 rounded-full bg-linear-to-br from-cyan to-magenta animate-ping opacity-30" />
								</div>

								<div
									className={`ml-8 md:ml-0 ${
										index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
									}`}
								>
									<div className="glass rounded-xl p-6 hover:border-cyan/50 transition-colors">
										<div
											className={`inline-flex items-center gap-2 text-sm text-cyan mb-3 ${
												index % 2 === 0 ? 'md:flex-row-reverse' : ''
											}`}
										>
											<Calendar className="size-4" />
											<span>{exp.startDate} - {exp.endDate}</span>
										</div>

										<h3 className="text-xl font-bold mb-1">{exp.role}</h3>
										<div
											className={`flex items-center gap-2 text-muted-foreground mb-4 ${
												index % 2 === 0 ? 'md:justify-end' : ''
											}`}
										>
											<Building2 className="size-4" />
											<span>{exp.company}</span>
										</div>

										<p className="text-muted-foreground mb-4 text-pretty">
											{exp.description}
										</p>

										<div
											className={`flex flex-wrap gap-2 ${
												index % 2 === 0 ? 'md:justify-end' : ''
											}`}
										>
											{exp.technologies.map((tech) => (
												<span
													key={tech}
													className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
