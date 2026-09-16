import { profile } from '../data/profile'

export const siteMetadata = {
  title: 'Ranielli Montagna | Links',
  description: `${profile.name} — ${profile.title}. ${profile.subtitle}`,
  url: 'https://links.ranimontagna.com',
  image: '/og-image.png',
  themeColor: '#5844ff',
} as const
