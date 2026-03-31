'use client'

import { useRef, useState } from 'react'
import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { detachedProjects } from '@/lib/projects-data'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/language-context'

function ImmersiveProjectCard({
	project,
	index,
	range,
	progress,
}: {
	project: (typeof detachedProjects)[0]
	index: number
	range: [number, number]
	progress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
	const { t } = useLanguage()
	const content = t.projects.data[project.id as keyof typeof t.projects.data]

	const [start, end] = range

	const scale = useTransform(
		progress,
		[
			start,
			start + (end - start) * 0.3,
			start + (end - start) * 0.5,
			start + (end - start) * 0.7,
			end,
		],
		[0.4, 0.8, 1, 1, 1.1],
	)

	const opacity = useTransform(
		progress,
		[
			start,
			start + (end - start) * 0.2,
			start + (end - start) * 0.4,
			start + (end - start) * 0.8,
			end,
		],
		[0, 0.6, 1, 1, 0],
	)

	const contentOpacity = useTransform(
		progress,
		[
			start + (end - start) * 0.3,
			start + (end - start) * 0.5,
			start + (end - start) * 0.7,
			end,
		],
		[0, 1, 1, 0],
	)

	const contentY = useTransform(
		progress,
		[start + (end - start) * 0.3, start + (end - start) * 0.5],
		[60, 0],
	)

	const blur = useTransform(
		progress,
		[start, start + (end - start) * 0.2, start + (end - start) * 0.8, end],
		[10, 0, 0, 10],
	)

	const zIndex = useTransform(
		progress,
		[start, start + (end - start) * 0.1, end - (end - start) * 0.1, end],
		[0, 10, 10, 0],
	)

	const gradientColors = [
		'from-cyan/30 via-background/80 to-background',
		'from-magenta/30 via-background/80 to-background',
		'from-red-glow/30 via-background/80 to-background',
		'from-cyan/20 via-magenta/20 to-background',
	]

	return (
		<motion.div
			className="fixed inset-0 flex items-center justify-center pointer-events-none"
			style={{
				opacity,
				zIndex,
			}}
		>
			<motion.div
				className="relative w-full h-full"
				style={{
					scale,
					filter: useTransform(blur, (v) => `blur(${v}px)`),
				}}
			>
				<div
					className={`absolute inset-0 bg-linear-to-b ${gradientColors[index % gradientColors.length]}`}
				>
					{project.image && (
						<Image
							src={project.image}
							alt={content.title}
							fill
							className="object-cover opacity-10"
						/>
					)}

					<div
						className="absolute inset-0 opacity-30"
						style={{
							backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
							backgroundSize: '60px 60px',
						}}
					/>

					<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full bg-gradient-radial from-cyan/10 via-transparent to-transparent blur-3xl" />
				</div>

				<motion.div
					className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 pointer-events-auto"
					style={{
						opacity: contentOpacity,
						y: contentY,
					}}
				>
					<div className="max-w-4xl w-full text-center">
						<motion.div className="mb-6 inline-flex items-center gap-3">
							<span className="px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full bg-cyan/20 text-cyan border border-cyan/30">
								{project.category}
							</span>
							<span className="text-sm text-muted-foreground font-medium">
								{project.year}
							</span>
						</motion.div>

						<h3 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
							{content.title}
						</h3>

						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
							{content.longDescription}
						</p>

						<div className="flex flex-wrap justify-center gap-2 mb-10">
							{project.technologies.map((tech) => (
								<span
									key={tech}
									className="px-4 py-2 text-sm font-medium rounded-full bg-secondary/60 text-secondary-foreground backdrop-blur-sm border border-border/50"
								>
									{tech}
								</span>
							))}
						</div>

						<div className="flex items-center justify-center gap-4">
							{project.liveUrl && (
								<a
									href={project.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cyan text-accent-foreground font-semibold hover:bg-cyan/90 transition-all hover:scale-105 shadow-lg shadow-cyan/20"
								>
									<ExternalLink className="size-5" />
									{t.projects.viewProject}
								</a>
							)}
							{project.githubUrl && (
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-border hover:border-foreground/50 font-semibold transition-all hover:scale-105 backdrop-blur-sm"
								>
									<Github className="size-5" />
									{t.projects.viewCode}
								</a>
							)}
						</div>
					</div>
				</motion.div>
			</motion.div>
		</motion.div>
	)
}

export function DetachedProjects() {
	const sectionRef = useRef<HTMLElement>(null)
	const projectCount = detachedProjects.length
	const { t } = useLanguage()

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start 25%', 'end center'],
	})

	return (
		<section
			id="projects"
			ref={sectionRef}
			className="relative"
			style={{ height: `${(projectCount + 2) * 100}vh` }}
		>
			<div className="sticky top-0 h-screen overflow-hidden bg-background">
				<ScrollBoundary progress={scrollYProgress} range={[0, 0.25]}>
					<motion.div
						className="absolute inset-0 flex items-center justify-center z-20"
						style={{
							opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]),
							scale: useTransform(scrollYProgress, [0, 0.1], [1, 0.9]),
						}}
					>
						<div className="text-center px-6">
							<motion.span
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								viewport={{ once: true }}
								className="text-magenta text-sm font-semibold uppercase tracking-widest mb-4 block"
							>
								{t.projects.subtitle}
							</motion.span>
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.1 }}
								viewport={{ once: true }}
								className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance"
							>
								{t.projects.title}{' '}
								<span className="text-gradient">{t.projects.titleEffect}</span>
							</motion.h2>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								viewport={{ once: true }}
								className="text-muted-foreground max-w-xl mx-auto text-lg md:text-xl text-pretty"
							>
								{t.projects.description}
							</motion.p>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								viewport={{ once: true }}
								className="mt-16 flex flex-col items-center gap-3 text-muted-foreground"
							>
								<span className="text-sm uppercase tracking-widest">
									Scroll
								</span>
								<motion.div
									animate={{ y: [0, 12, 0] }}
									transition={{
										duration: 1.8,
										repeat: Infinity,
										ease: 'easeInOut',
									}}
									className="w-8 h-14 rounded-full border-2 border-muted-foreground/40 flex items-start justify-center p-2"
								>
									<motion.div className="w-2 h-3 rounded-full bg-cyan" />
								</motion.div>
							</motion.div>
						</div>
					</motion.div>
				</ScrollBoundary>

				{detachedProjects.map((project, index) => {
					const segmentSize = 0.8 / projectCount
					const start = 0.1 + index * segmentSize
					const end = start + segmentSize

					return (
						<ScrollBoundary
							key={project.id}
							progress={scrollYProgress}
							range={[start, end]}
						>
							<ImmersiveProjectCard
								key={project.id}
								project={project}
								index={index}
								range={[start, end]}
								progress={scrollYProgress}
							/>
						</ScrollBoundary>
					)
				})}

				<div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3">
					{detachedProjects.map((_, index) => {
						const segmentSize = 0.8 / projectCount
						const projectStart = 0.1 + index * segmentSize
						const projectEnd = projectStart + segmentSize

						return (
							<motion.div
								key={index}
								className="relative w-3 h-3 rounded-full border-2 border-foreground/30 transition-colors"
								style={{
									backgroundColor: useTransform(
										scrollYProgress,
										[
											projectStart,
											projectStart + segmentSize * 0.3,
											projectEnd - segmentSize * 0.3,
											projectEnd,
										],
										[
											'rgba(0,0,0,0)',
											'rgb(0, 255, 247)',
											'rgb(0, 255, 247)',
											'rgba(0,0,0,0)',
										],
									),
									borderColor: useTransform(
										scrollYProgress,
										[projectStart, projectStart + segmentSize * 0.2],
										['rgba(255,255,255,0.3)', 'rgb(0, 255, 247)'],
									),
								}}
							/>
						)
					})}
				</div>

				<ScrollBoundary progress={scrollYProgress} range={[0.94, 1]}>
					<motion.div
						className="fixed inset-0 flex items-center justify-center z-50"
						style={{
							opacity: useTransform(scrollYProgress, [0.94, 1], [1, 0]),
							scale: useTransform(
								scrollYProgress,
								[0.94, 0.975, 1],
								[1, 1.1, 0.9],
							),
						}}
					>
						<div className="text-center px-6">
							<motion.h3 className="text-3xl md:text-5xl font-bold mb-4">
								{t.projects.seeMore}
							</motion.h3>
							<motion.p className="text-muted-foreground mb-10 max-w-lg mx-auto text-lg">
								{t.projects.seeMoreDescription}
							</motion.p>
							<Button
								asChild
								size="lg"
								className="group text-lg px-8 py-6 rounded-full"
							>
								<Link href="/projects">
									{t.projects.seeMoreButton}
									<ArrowRight className="ml-2 size-5 group-hover:translate-x-2 transition-transform" />
								</Link>
							</Button>
						</div>
					</motion.div>
				</ScrollBoundary>
			</div>
		</section>
	)
}

function ScrollBoundary({
	progress,
	range,
	children,
}: {
	progress: any
	range: [number, number]
	children: React.ReactNode
}) {
	const [shouldMount, setShouldMount] = useState(false)

	const buffer = 0.05

	useMotionValueEvent(progress, 'change', (latest: number) => {
		const isInside = latest >= range[0] - buffer && latest <= range[1] + buffer
		if (isInside !== shouldMount) {
			setShouldMount(isInside)
		}
	})

	return shouldMount ? <>{children}</> : null
}
