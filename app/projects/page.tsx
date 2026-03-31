'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowLeft, Filter } from 'lucide-react'
import { allProjects, type Project } from '@/lib/projects-data'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/language-context'
import Image from 'next/image'

function ProjectCard({ project, index }: { project: Project; index: number }) {
	const { t } = useLanguage()
	const projectTranslate = t.projects.data[project.id]
	const [isHovered, setIsHovered] = useState(false)

	const isFeatured = project.featured
	const isLarge = isFeatured && index < 2

	return (
		<motion.article
			layoutId={`project-${project.id}`}
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={`group relative overflow-hidden rounded-2xl bg-card border border-border ${
				isLarge ? 'md:col-span-2 md:row-span-2' : ''
			}`}
		>
			<Link href={`/projects/${project.id}`} className="block h-full">
				<div className="absolute inset-0 bg-linear-to-br from-cyan/10 via-magenta/10 to-transparent opacity-50" />

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: isHovered ? 1 : 0 }}
					transition={{ duration: 0.3 }}
					className="absolute inset-0 bg-linear-to-br from-cyan/20 via-transparent to-magenta/20"
				/>

				<div
					className={`relative flex flex-col h-full ${isLarge ? 'min-h-100 md:min-h-125' : 'min-h-75'}`}
				>
					<div
						className={`relative shrink-0 ${isLarge ? 'h-64 md:h-72' : 'h-40'} overflow-hidden`}
					>
						<div className="absolute inset-0 bg-linear-to-br from-cyan/30 via-magenta/20 to-red-glow/10" />
						<div className="absolute inset-0 flex items-center justify-center">
							<motion.span
								animate={{
									scale: isHovered ? 1.1 : 1,
									opacity: isHovered ? 0.15 : 0.1,
								}}
								transition={{ duration: 0.3 }}
								className={`font-bold text-foreground ${isLarge ? 'text-8xl md:text-9xl' : 'text-6xl'}`}
							>
								{project.image ? (
									<Image
										src={project.image}
										alt={projectTranslate?.title || project.id}
										width={800}
										height={450}
										className="object-cover w-full h-full"
									/>
								) : (
									<span className="text-9xl font-bold text-foreground/10">
										{projectTranslate?.title.charAt(0) || project.id.charAt(0)}
									</span>
								)}
							</motion.span>
						</div>

						<div className="absolute top-4 left-4">
							<span className="px-3 py-1 text-xs font-medium rounded-full bg-background/80 backdrop-blur-sm text-foreground border border-border">
								{project.category}
							</span>
						</div>

						<div className="absolute top-4 right-4">
							<span className="px-2 py-1 text-xs font-mono text-muted-foreground">
								{project.year}
							</span>
						</div>

						{project.featured && (
							<div className="absolute bottom-4 left-4">
								<span className="px-3 py-1 text-xs font-medium rounded-full bg-cyan/20 text-cyan border border-cyan/30">
									{t.projects.featuredBadge}
								</span>
							</div>
						)}
					</div>

					<div className="flex-1 flex flex-col p-6">
						<motion.h3
							animate={{ x: isHovered ? 4 : 0 }}
							transition={{ duration: 0.2 }}
							className={`font-bold mb-2 group-hover:text-cyan transition-colors ${
								isLarge ? 'text-2xl md:text-3xl' : 'text-xl'
							}`}
						>
							{projectTranslate?.title || project.id}
						</motion.h3>

						<p
							className={`text-muted-foreground mb-4 flex-1 text-pretty ${
								isLarge ? 'text-base' : 'text-sm line-clamp-2'
							}`}
						>
							{isLarge
								? projectTranslate?.longDescription
								: projectTranslate?.description}
						</p>

						<div className="flex flex-wrap gap-2 mb-4">
							{project.technologies.slice(0, isLarge ? 6 : 3).map((tech) => (
								<span
									key={tech}
									className="px-2 py-1 text-xs rounded-md bg-secondary/60 text-secondary-foreground"
								>
									{tech}
								</span>
							))}
							{project.technologies.length > (isLarge ? 6 : 3) && (
								<span className="px-2 py-1 text-xs text-muted-foreground">
									+{project.technologies.length - (isLarge ? 6 : 3)}
								</span>
							)}
						</div>

						<div className="flex items-center gap-3 pt-2 border-t border-border/50">
							<motion.span
								animate={{ opacity: isHovered ? 1 : 0.7 }}
								className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-1"
							>
								{t.projects.viewDetails}
								<motion.span
									animate={{ x: isHovered ? 4 : 0 }}
									transition={{ duration: 0.2 }}
								>
									&rarr;
								</motion.span>
							</motion.span>
						</div>
					</div>
				</div>
			</Link>

			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
				transition={{ duration: 0.2 }}
				className="absolute bottom-6 right-6 flex gap-2"
			>
				{project.liveUrl && (
					<a
						href={project.liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						onClick={(e) => e.stopPropagation()}
						className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:text-cyan hover:border-cyan/50 transition-colors"
						aria-label={t.projects.ariaLive}
					>
						<ExternalLink className="size-4" />
					</a>
				)}
				{project.githubUrl && (
					<a
						href={project.githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						onClick={(e) => e.stopPropagation()}
						className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:text-cyan hover:border-cyan/50 transition-colors"
						aria-label={t.projects.ariaGithub}
					>
						<Github className="size-4" />
					</a>
				)}
			</motion.div>
		</motion.article>
	)
}

export default function ProjectsPage() {
	const { t } = useLanguage()
	const [activeCategory, setActiveCategory] = useState('All')

	const categories = ['All', ...new Set(allProjects.map((p) => p.category))]

	const filteredProjects =
		activeCategory === 'All'
			? allProjects
			: allProjects.filter((p) => p.category === activeCategory)

	return (
		<>
			<div className="fixed inset-0 pointer-events-none">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 right-0 w-96 h-96 bg-magenta/5 rounded-full blur-3xl" />
			</div>

			<div className="relative container mx-auto px-6 pb-12 pt-24">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-12"
				>
					<Button asChild variant="ghost" className="mb-8 group">
						<Link href="/#projects">
							<ArrowLeft className="mr-2 size-4 group-hover:-translate-x-1 transition-transform" />
							{t.projects.backButton}
						</Link>
					</Button>

					<div className="max-w-3xl">
						<span className="text-magenta text-sm font-medium uppercase tracking-wider mb-4 block">
							{t.projects.subtitle}
						</span>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
							{t.projects.title}{' '}
							<span className="text-gradient">{t.projects.titleEffect}</span>
						</h1>
						<p className="text-muted-foreground text-lg text-pretty">
							{t.projects.seeMoreDescription}
						</p>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="mb-12"
				>
					<div className="flex items-center gap-2 mb-4">
						<Filter className="size-4 text-muted-foreground" />
						<span className="text-sm text-muted-foreground">
							{t.projects.filterLabel}
						</span>
					</div>
					<div className="flex flex-wrap gap-2">
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setActiveCategory(category)}
								className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${
									activeCategory === category
										? 'bg-cyan text-accent-foreground border-cyan'
										: 'bg-transparent border-border hover:border-foreground/50'
								}`}
							>
								{category === 'All' ? t.projects.allCategory : category}
							</button>
						))}
					</div>
				</motion.div>

				<motion.div
					layout
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
				>
					{filteredProjects.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index} />
					))}
				</motion.div>

				{filteredProjects.length === 0 && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="text-center py-20"
					>
						<p className="text-muted-foreground">{t.projects.emptyState}</p>
					</motion.div>
				)}
			</div>
		</>
	)
}
