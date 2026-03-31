import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { LanguageProvider } from '@/lib/i18n/language-context'
import './globals.css'
import { Contact } from '@/components/portfolio/contact'
import { Header } from '@/components/portfolio/header'
import { Footer } from '@/components/portfolio/footer'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

const geistMono = Geist_Mono({
	subsets: ['latin'],
	variable: '--font-geist-mono',
})

export const metadata: Metadata = {
	title: 'Guilherme Vitória | Software Engineer',
	description:
		'Front-end Developer & Fullstack Developer especializado em criar experiências digitais excepcionais.',
	generator: 'v0.app',
	keywords: [
		'Software Engineer',
		'Front-end Developer',
		'Fullstack Developer',
		'React',
		'Next.js',
		'TypeScript',
	],
	authors: [{ name: 'Guilherme Vitória' }],
	openGraph: {
		title: 'Guilherme Vitória | Software Engineer',
		description:
			'Front-end Developer & Fullstack Developer especializado em criar experiências digitais excepcionais.',
		type: 'website',
	},
	icons: {
		icon: [
			{
				url: '/favicon-light.svg',
				media: '(prefers-color-scheme: light)',
			},
			{
				url: '/favicon.svg',
				media: '(prefers-color-scheme: dark)',
			},
			{
				url: '/favicon.svg',
				type: 'image/svg+xml',
			},
		],
		apple: '/favicon.svg',
	},
}

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#f8f8fc' },
		{ media: '(prefers-color-scheme: dark)', color: '#0f0a1a' },
	],
	width: 'device-width',
	initialScale: 1,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR" suppressHydrationWarning data-scroll-behavior="smooth">
			<body
				className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}
			>
				<ThemeProvider>
					<LanguageProvider>
						<main className="min-h-screen bg-background text-foreground overflow-x-hidden">
							<Header />
							{children}
							<Contact />
							<Footer />
						</main>
					</LanguageProvider>
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	)
}
