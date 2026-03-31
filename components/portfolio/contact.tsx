'use client'

import { motion } from 'framer-motion'
import {
	Mail,
	MessageCircle,
	Github,
	Linkedin,
	Instagram,
	ArrowUpRight,
} from 'lucide-react'
import { useLanguage } from '@/lib/i18n/language-context'

export function Contact() {
	const { t } = useLanguage()

	const emailHref = `mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=${encodeURIComponent(t.contact.emailSubject)}&body=${encodeURIComponent(t.contact.emailBody)}`
	const whatsappHref = `https://wa.me/${process.env.NEXT_PUBLIC_PHONE}?text=${encodeURIComponent(t.contact.whatsappMessage)}`

	const socialLinks = [
		{ icon: Github, href: process.env.NEXT_PUBLIC_GITHUB_URL, label: 'GitHub' },
		{
			icon: Linkedin,
			href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
			label: 'LinkedIn',
		},
		{
			icon: Instagram,
			href: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
			label: 'Instagram',
		},
	]

	return (
		<section
			id="contact"
			className="py-32 relative overflow-hidden bg-background"
		>
			<div className="container mx-auto px-6 relative z-10">
				<div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<span className="text-magenta text-sm font-semibold uppercase tracking-widest mb-4 block">
							{t.contact.badge}
						</span>
						<h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
							{t.contact.title} <br />
							<span className="text-gradient">{t.contact.titleGradient}</span>
						</h2>

						<div className="flex flex-col gap-6 mt-12">
							<p className="text-muted-foreground text-lg max-w-md leading-relaxed">
								{t.contact.subtitle}
							</p>

							<div className="flex gap-4 mt-4">
								{socialLinks.map((social, i) => (
									<motion.a
										key={i}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ y: -4, scale: 1.1 }}
										className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-cyan hover:border-cyan/50 transition-all shadow-lg"
										title={social.label}
									>
										<social.icon className="size-5" />
									</motion.a>
								))}
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="flex flex-col gap-5"
					>
						<a
							href={whatsappHref}
							target="_blank"
							rel="noopener noreferrer"
							className="group relative p-8 rounded-3xl glass border border-white/5 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden"
						>
							<div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
							<div className="relative z-10 flex items-center justify-between">
								<div className="flex items-center gap-6">
									<div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shadow-inner">
										<MessageCircle className="size-7" />
									</div>
									<div>
										<h3 className="text-xl font-bold">WhatsApp</h3>
										<p className="text-muted-foreground text-sm font-medium">
											{t.contact.sendWhatsapp}
										</p>
									</div>
								</div>
								<ArrowUpRight className="size-6 text-muted-foreground group-hover:text-emerald-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
							</div>
						</a>

						<a
							href={emailHref}
							className="group relative p-8 rounded-3xl glass border border-white/5 hover:border-cyan/30 transition-all duration-500 overflow-hidden"
						>
							<div className="absolute inset-0 bg-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
							<div className="relative z-10 flex items-center justify-between">
								<div className="flex items-center gap-6">
									<div className="w-14 h-14 rounded-2xl bg-cyan/10 flex items-center justify-center text-cyan shadow-inner">
										<Mail className="size-7" />
									</div>
									<div>
										<h3 className="text-xl font-bold">E-mail</h3>
										<p className="text-muted-foreground text-sm font-medium">
											{t.contact.sendEmail}
										</p>
									</div>
								</div>
								<ArrowUpRight className="size-6 text-muted-foreground group-hover:text-cyan group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
							</div>
						</a>
					</motion.div>
				</div>
			</div>

			<div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-125 h-125 bg-cyan/10 rounded-full blur-[120px] -z-10" />
			<div className="absolute bottom-[-10%] left-[-5%] w-75 h-75 bg-magenta/5 rounded-full blur-[100px] -z-10" />
		</section>
	)
}
