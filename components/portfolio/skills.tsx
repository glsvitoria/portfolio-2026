'use client'

import { useLanguage } from '@/lib/i18n/language-context'
import {
	motion,
	useInView,
	useMotionValue,
	useSpring,
	useTransform,
} from 'framer-motion'
import Image from 'next/image'
import { useRef, useState, MouseEvent } from 'react'

type SkillSize = 'large' | 'medium' | 'small'
type Category = 'frontend' | 'backend' | 'tools'

interface Skill {
	name: string
	iconUrl: string
	size: SkillSize
	category: Category
	description?: boolean
	brandColor: string
}

const skills: Skill[] = [
	{
		name: 'React',
		iconUrl: 'https://skillicons.dev/icons?i=react',
		size: 'medium',
		category: 'frontend',
		brandColor: '#61DAFB',
	},
	{
		name: 'Next.js',
		iconUrl: 'https://skillicons.dev/icons?i=nextjs',
		size: 'large',
		category: 'frontend',
		description: true,
		brandColor: '#FFFFFF',
	},
	{
		name: 'TypeScript',
		iconUrl: 'https://skillicons.dev/icons?i=typescript',
		size: 'large',
		category: 'tools',
		description: true,
		brandColor: '#3178C6',
	},
	{
		name: 'Node.js',
		iconUrl: 'https://skillicons.dev/icons?i=nodejs',
		size: 'medium',
		category: 'backend',
		brandColor: '#539E43',
	},
	{
		name: 'Tailwind CSS',
		iconUrl: 'https://skillicons.dev/icons?i=tailwindcss',
		size: 'medium',
		category: 'frontend',
		brandColor: '#06B6D4',
	},
	{
		name: 'Prisma',
		iconUrl: 'https://skillicons.dev/icons?i=prisma',
		size: 'medium',
		category: 'backend',
		brandColor: '#2D3748',
	},
	{
		name: 'PostgreSQL',
		iconUrl: 'https://skillicons.dev/icons?i=postgresql',
		size: 'medium',
		category: 'backend',
		brandColor: '#336791',
	},
	{
		name: 'Express',
		iconUrl: 'https://skillicons.dev/icons?i=express',
		size: 'medium',
		category: 'backend',
		brandColor: '#00D8FF',
	},
	{
		name: 'Git',
		iconUrl: 'https://skillicons.dev/icons?i=git',
		size: 'small',
		category: 'tools',
		brandColor: '#F05032',
	},
	{
		name: 'Docker',
		iconUrl: 'https://skillicons.dev/icons?i=docker',
		size: 'small',
		category: 'tools',
		brandColor: '#2496ED',
	},
	{
		name: 'Figma',
		iconUrl: 'https://skillicons.dev/icons?i=figma',
		size: 'small',
		category: 'tools',
		brandColor: '#F24E1E',
	},
	{
		name: 'Vercel',
		iconUrl: 'https://skillicons.dev/icons?i=vercel',
		size: 'small',
		category: 'tools',
		brandColor: '#FFFFFF',
	},
	{
		name: 'JavaScript',
		iconUrl: 'https://skillicons.dev/icons?i=js',
		size: 'small',
		category: 'tools',
		brandColor: '#F7DF1E',
	},
	{
		name: 'CSS',
		iconUrl: 'https://skillicons.dev/icons?i=css',
		size: 'small',
		category: 'frontend',
		brandColor: '#1572B6',
	},
	{
		name: 'HTML',
		iconUrl: 'https://skillicons.dev/icons?i=html',
		size: 'small',
		category: 'frontend',
		brandColor: '#E34F26',
	},
	{
		name: 'Nest.js',
		iconUrl: 'https://skillicons.dev/icons?i=nest',
		size: 'large',
		description: true,
		category: 'backend',
		brandColor: '#FFFFFF',
	},
]

const categoryLabels: Record<Category, string> = {
	frontend: 'Front-end',
	backend: 'Back-end',
	tools: 'Ferramentas',
}

const categoryColors: Record<Category, string> = {
	frontend: 'cyan',
	backend: 'magenta',
	tools: 'red-glow',
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
	const { t } = useLanguage()

	const cardRef = useRef<HTMLDivElement>(null)
	const [isHovered, setIsHovered] = useState(false)

	const mouseX = useMotionValue(0)
	const mouseY = useMotionValue(0)

	const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
		stiffness: 300,
		damping: 30,
	})
	const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
		stiffness: 300,
		damping: 30,
	})

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		if (!cardRef.current) return
		const rect = cardRef.current.getBoundingClientRect()
		const x = (e.clientX - rect.left) / rect.width - 0.5
		const y = (e.clientY - rect.top) / rect.height - 0.5
		mouseX.set(x)
		mouseY.set(y)
	}

	const handleMouseLeave = () => {
		mouseX.set(0)
		mouseY.set(0)
		setIsHovered(false)
	}

	const sizeClasses: Record<SkillSize, string> = {
		large: 'md:col-span-2 md:row-span-2',
		medium: 'md:col-span-1 md:row-span-1',
		small: 'col-span-1 row-span-1',
	}

	const categoryColor = categoryColors[skill.category]
	const colorClasses: Record<string, string> = {
		cyan: 'group-hover:border-cyan/60 group-hover:shadow-cyan/20',
		magenta: 'group-hover:border-magenta/60 group-hover:shadow-magenta/20',
		'red-glow': 'group-hover:border-red-glow/60 group-hover:shadow-red-glow/20',
	}

	return (
		<motion.div
			ref={cardRef}
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5, delay: index * 0.05 }}
			style={{
				rotateX: isHovered ? rotateX : 0,
				rotateY: isHovered ? rotateY : 0,
				transformStyle: 'preserve-3d',
			}}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={handleMouseLeave}
			className={`
        group relative glass rounded-2xl p-6 cursor-pointer
        border border-white/5 transition-all duration-300
        hover:shadow-xl ${colorClasses[categoryColor]}
        ${sizeClasses[skill.size]}
      `}
		>
			<motion.div
				className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
				style={{
					background: `radial-gradient(circle at 50% 50%, ${skill.brandColor}15 0%, transparent 70%)`,
				}}
			/>

			<div className="relative z-10 h-full flex flex-col">
				<motion.div
					className="text-3xl md:text-4xl mb-4 w-8 h-8 md:w-16 md:h-16 flex items-center"
					style={{
						color: isHovered ? skill.brandColor : 'currentColor',
						textShadow: isHovered ? `0 0 20px ${skill.brandColor}50` : 'none',
					}}
					animate={{ scale: isHovered ? 1.1 : 1 }}
					transition={{ duration: 0.2 }}
				>
					<Image width={64} height={64} src={skill.iconUrl!} alt={skill.name} />
				</motion.div>

				<h3
					className={`font-bold transition-colors duration-300 ${
						skill.size === 'large'
							? 'text-2xl md:text-3xl'
							: skill.size === 'medium'
								? 'text-xl'
								: 'text-lg'
					}`}
					style={{ color: isHovered ? skill.brandColor : undefined }}
				>
					{skill.name}
				</h3>

				{skill.size === 'large' && skill.description && (
					<p className="mt-3 text-muted-foreground hidden md:block md:text-base leading-relaxed grow">
						{t.skills.technologies[skill.name] || 'Descrição não disponível.'}
					</p>
				)}

				<div className="mt-auto pt-4">
					<span
						className={`
              text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full
              ${categoryColor === 'cyan' ? 'bg-cyan/10 text-cyan' : ''}
              ${categoryColor === 'magenta' ? 'bg-magenta/10 text-magenta' : ''}
              ${categoryColor === 'red-glow' ? 'bg-red-glow/10 text-red-glow' : ''}
            `}
					>
						{categoryLabels[skill.category]}
					</span>
				</div>
			</div>

			<motion.div
				className="absolute inset-0 rounded-2xl pointer-events-none"
				style={{
					boxShadow: isHovered
						? `inset 0 0 0 1px ${skill.brandColor}40, 0 0 30px ${skill.brandColor}20`
						: 'none',
				}}
				transition={{ duration: 0.3 }}
			/>
		</motion.div>
	)
}

export function Skills() {
	const { t } = useLanguage()

	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all')

	const filteredSkills =
		activeCategory === 'all'
			? skills
			: skills.filter((s) => s.category === activeCategory)

	const sortedSkills = [...filteredSkills].sort((a, b) => {
		const order: Record<SkillSize, number> = { large: 0, medium: 1, small: 2 }
		return order[a.size] - order[b.size]
	})

	const categoryStyles: Record<string, { active: string; hover: string }> = {
		all: {
			active: 'bg-cyan text-background shadow-cyan/40 border-cyan',
			hover: 'hover:border-cyan/60 hover:text-cyan',
		},
		frontend: {
			active: 'bg-cyan text-background shadow-cyan/40 border-cyan',
			hover: 'hover:border-cyan/60 hover:text-cyan',
		},
		backend: {
			active: 'bg-magenta text-background shadow-magenta/40 border-magenta',
			hover: 'hover:border-magenta/60 hover:text-magenta',
		},
		tools: {
			active: 'bg-red-glow text-background shadow-red-glow/40 border-red-glow',
			hover: 'hover:border-red-glow/60 hover:text-red-glow',
		},
	}

	return (
		<section id="skills" className="p-16 md:py-32 relative overflow-hidden">
			<div className="absolute inset-0 bg-linear-to-b from-background via-secondary/20 to-background" />

			<div className="container mx-auto px-6 relative" ref={ref}>
				<div className="max-w-6xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6 }}
						className="text-center mb-12"
					>
						<span className="text-magenta text-sm font-medium uppercase tracking-wider mb-4 block">
							{t.skills.title}
						</span>
						<h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
							{t.skills.subtitle}{' '}
							<span className="text-gradient">{t.skills.subtitleEffect}</span>
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
							{t.skills.description}
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="flex flex-wrap justify-center gap-3 mb-12"
					>
						{(['all', 'frontend', 'backend', 'tools'] as const).map((cat) => {
							const isActive = activeCategory === cat
							const style = categoryStyles[cat]

							return (
								<button
									key={cat}
									onClick={() => setActiveCategory(cat)}
									className={`
          px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300
          ${
						isActive
							? `${style.active} shadow-lg scale-105`
							: `glass text-muted-foreground border-transparent ${style.hover}`
					}
        `}
								>
									{cat === 'all'
										? t.skills.all
										: categoryLabels[cat as Category]}
								</button>
							)
						})}
					</motion.div>

					<motion.div
						layout
						className="relative grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-fr"
					>
						{sortedSkills.map((skill, index) => (
							<SkillCard key={skill.name} skill={skill} index={index} />
						))}
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.8 }}
						className="mt-16 text-center"
					>
						<p className="text-muted-foreground mb-4">
							Também tenho experiência com:
						</p>
						<div className="flex flex-wrap justify-center gap-3">
							{[
								'AWS',
								'Framer Motion',
								'GraphQL',
								'Jest',
								'React Hook Form',
								'Resend',
								'Vitest',
								'WebSockets',
								'Zustand',
							].map((skill, i) => (
								<motion.span
									key={skill}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.3, delay: i * 0.05 }}
									whileHover={{
										scale: 1.05,
										borderColor: 'rgba(0,255,247,0.5)',
									}}
									className="px-4 py-2 glass rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default"
								>
									{skill}
								</motion.span>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
