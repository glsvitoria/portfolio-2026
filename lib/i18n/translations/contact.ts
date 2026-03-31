import { Translation } from './types'

interface ContactTranslations extends Translation<{
	badge: string
  title: string
  titleGradient: string
  subtitle: string
  sendWhatsapp: string
  sendEmail: string
  emailSubject: string
  emailBody: string
  whatsappMessage: string
}> {}

export const contactTranslations: ContactTranslations = {
	en: {
		badge: "Contact",
  title: "Let's build something",
  titleGradient: "extraordinary?",
  subtitle: "I'm always open to new projects, collaborations, or just a virtual coffee.",
  sendWhatsapp: "Chat now",
  sendEmail: "Send a message",
  emailSubject: "Contact from Portfolio",
  emailBody: "Hi! I saw your portfolio and would like to talk about a project.",
  whatsappMessage: "Hi! I saw your portfolio and would like to reach out.",
	},
	pt: {
		badge: "Contato",
  title: "Vamos criar algo",
  titleGradient: "extraordinário?",
  subtitle: "Estou sempre aberto a novos projetos, colaborações ou apenas um café virtual.",
  sendWhatsapp: "Conversar agora",
  sendEmail: "Enviar uma mensagem",
  emailSubject: "Contato via Portfólio",
  emailBody: "Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.",
  whatsappMessage: "Olá! Vi seu portfólio e gostaria de falar com você.",
	},
}
