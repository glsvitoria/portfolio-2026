'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { LanguageSelector } from '@/components/ui/language-selector'
import { useLanguage } from '@/lib/i18n/language-context'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const { t } = useLanguage()
	const pathname = usePathname()

	const isProjectPage = pathname?.startsWith('/projects')

	const navItems = [
		{ name: t.nav.home, href: '#hero' },
		{ name: t.nav.about, href: '#about' },
		{ name: t.nav.experience, href: '#experience' },
		{ name: t.nav.projects, href: '#projects' },
		{ name: t.nav.skills, href: '#skills' },
		{ name: t.nav.contact, href: '#contact' },
	]

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled || isProjectPage ? 'glass py-3' : 'py-6'
			}`}
		>
			<div className="container mx-auto px-6 flex items-center justify-between">
				<Link href="/" className="relative">
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
				</Link>

				{!isProjectPage && (
					<nav className="hidden md:flex items-center gap-1">
						{navItems.map((item, index) => (
							<motion.a
								key={item.href}
								href={item.href}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
							>
								{item.name}
								<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-cyan to-magenta group-hover:w-full transition-all duration-300" />
							</motion.a>
						))}
					</nav>
				)}

				<div className="hidden md:flex items-center gap-3">
					<LanguageSelector />
					<ThemeToggle />
					<Button
						asChild
						className="bg-linear-to-r from-cyan to-magenta text-white hover:opacity-90 transition-opacity shadow-lg shadow-cyan/10"
					>
						<Link href="#contact">{t.nav.contact}</Link>
					</Button>
				</div>

				<div className="flex md:hidden items-center gap-2">
					<LanguageSelector />
					<ThemeToggle />

					{!isProjectPage ? (
						<Button
							variant="ghost"
							size="icon"
							className="text-foreground"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						>
							{isMobileMenuOpen ? (
								<X className="size-6" />
							) : (
								<Menu className="size-6" />
							)}
						</Button>
					) : (
						<Button
							asChild
							size="sm"
							className="bg-linear-to-r from-cyan to-magenta text-white ml-2"
						>
							<Link href="#contact">{t.nav.contact}</Link>
						</Button>
					)}
				</div>
			</div>

			{!isProjectPage && (
				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							className="md:hidden glass border-t border-border overflow-hidden"
						>
							<nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
								{navItems.map((item) => (
									<a
										key={item.href}
										href={item.href}
										onClick={() => setIsMobileMenuOpen(false)}
										className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
									>
										{item.name}
									</a>
								))}
							</nav>
						</motion.div>
					)}
				</AnimatePresence>
			)}
		</motion.header>
	)
}
