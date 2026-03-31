'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/language-context'
import { Button } from '@/components/ui/button'

export default function NotFound() {
	const { t } = useLanguage()

	return (
		<div className="flex min-h-dvh flex-col items-center justify-center bg-background px-4 text-center">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="space-y-6"
			>
				<h1 className="text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-primary to-primary/50">
					{t.notFound.title}
				</h1>

				<div className="space-y-2">
					<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
						{t.notFound.subtitle}
					</h2>
					<p className="mx-auto max-w-125 text-muted-foreground md:text-lg">
						{t.notFound.description}
					</p>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
					className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2"
				>
					<Link
						href="/"
						className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring gap-2 shadow-lg shadow-primary/20"
					>
						<Home className="h-4 w-4" />
						{t.notFound.backHome}
					</Link>

					<Button
						onClick={() => window.history.back()}
						className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background w-full text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground gap-2"
					>
						<ArrowLeft className="h-4 w-4" />
						{t.notFound.backButton}
					</Button>
				</motion.div>
			</motion.div>

			<div className="fixed inset-0 -z-10 overflow-hidden">
				<div className="absolute left-[50%] top-[50%] h-125 w-125 -translate-x-[50%] -translate-y-[50%] rounded-full bg-primary/5 blur-[120px]" />
			</div>
		</div>
	)
}
