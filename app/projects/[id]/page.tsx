'use client'

import { motion } from 'framer-motion'
import {
	ExternalLink,
	Github,
	ArrowLeft,
	Calendar,
	Tag,
	Apple,
	Play,
} from 'lucide-react'
import { allProjects } from '@/lib/projects-data'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { notFound } from 'next/navigation'
import { use } from 'react'
import { useLanguage } from '@/lib/i18n/language-context'
import Image from 'next/image'

export default function ProjectDetailPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { t } = useLanguage()

	const { id } = use(params)
	const project = allProjects.find((p) => p.id === id)

	if (!project) {
		notFound()
	}

	const content = t.projects.data[project.id]

	if (!content) {
		notFound()
	}

	return (
		<main className="min-h-screen bg-background text-foreground">
			<div className="fixed inset-0 pointer-events-none">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 right-0 w-96 h-96 bg-magenta/5 rounded-full blur-3xl" />
			</div>

			<div className="relative container mx-auto px-6 pb-12 pt-24">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Button asChild variant="ghost" className="mb-8 group">
						<Link href="/projects">
							<ArrowLeft className="mr-2 size-4 group-hover:-translate-x-1 transition-transform" />
							{t.projects.backButton}
						</Link>
					</Button>
				</motion.div>

				<motion.article
					layoutId={`project-${project.id}`}
					className="max-w-4xl mx-auto"
				>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="relative rounded-3xl overflow-hidden mb-12"
					>
						<div className="aspect-video bg-linear-to-br from-cyan/30 via-magenta/20 to-red-glow/10 flex items-center justify-center">
							{project.image ? (
								<Image
									src={project.image}
									alt={content.title}
									width={800}
									height={450}
									className="object-cover w-full h-full"
								/>
							) : (
								<span className="text-9xl font-bold text-foreground/10">
									{content.title.charAt(0)}
								</span>
							)}
						</div>

						<div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-background via-background/80 to-transparent">
							<div className="flex flex-wrap items-center gap-4 mb-4">
								<span className="px-4 py-1.5 text-sm font-medium rounded-full bg-cyan/20 text-cyan border border-cyan/30">
									{project.category}
								</span>
								<div className="flex items-center gap-2 text-muted-foreground">
									<Calendar className="size-4" />
									<span>{project.year}</span>
								</div>
								{project.featured && (
									<span className="px-3 py-1 text-xs font-medium rounded-full bg-magenta/20 text-magenta border border-magenta/30">
										{t.projects.featuredBadge}
									</span>
								)}
							</div>
							<h1 className="text-4xl md:text-5xl font-bold text-balance">
								{content.title}
							</h1>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="mb-12"
					>
						<h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
							<span className="w-8 h-0.5 bg-cyan" />
							{t.projects.viewDetails}
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed text-pretty">
							{content.longDescription}
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="mb-12"
					>
						<h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
							<Tag className="size-5 text-cyan" />
							{t.projects.technologies}
						</h2>
						<div className="flex flex-wrap gap-3">
							{project.technologies.map((tech, index) => (
								<motion.span
									key={tech}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
									className="px-4 py-2 text-sm font-medium rounded-xl bg-secondary text-secondary-foreground border border-border"
								>
									{tech}
								</motion.span>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="flex flex-wrap gap-4 mb-16"
					>
						{project.appStoreUrl && (
							<Button asChild size="lg" className="group">
								<a
									href={project.appStoreUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Apple className="mr-2 size-5" />
									{t.projects.viewAppStore}
								</a>
							</Button>
						)}
						{project.playStoreUrl && (
							<Button asChild variant="outline" size="lg" className="group">
								<a
									href={project.playStoreUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Play className="mr-2 size-5" />
									{t.projects.viewPlayStore}
								</a>
							</Button>
						)}
						{project.liveUrl && (
							<Button asChild size="lg" className="group">
								<a
									href={project.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<ExternalLink className="mr-2 size-5" />
									{t.projects.viewProject}
								</a>
							</Button>
						)}
						{project.githubUrl && (
							<Button asChild variant="outline" size="lg" className="group">
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="mr-2 size-5" />
									{t.projects.viewCode}
								</a>
							</Button>
						)}
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="border-t border-border pt-12"
					>
						<h3 className="text-lg font-semibold mb-6 text-center text-muted-foreground">
							{t.projects.seeMore}
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
							{allProjects
								.filter((p) => p.id !== project.id)
								.slice(0, 3)
								.map((p, index) => {
									const contentProject = t.projects.data[p.id]

									return (
										<motion.div
											key={p.id}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
										>
											<Link
												href={`/projects/${p.id}`}
												className="block h-full p-4 rounded-xl bg-card border border-border hover:border-cyan/50 transition-colors group"
											>
												<span className="text-sm text-muted-foreground mb-1 block">
													{p.category}
												</span>
												<h4 className="font-semibold group-hover:text-cyan transition-colors">
													{contentProject?.title || p.id}
												</h4>
											</Link>
										</motion.div>
									)
								})}
						</div>
					</motion.div>
				</motion.article>
			</div>
		</main>
	)
}
