export type LinkIcon = 'terminal' | 'github' | 'linkedin' | 'instagram' | 'x'

export interface ProfileLink {
  label: string
  href: string
  icon: LinkIcon
  ariaLabel: string
}

export interface Profile {
  name: string
  handle: string
  title: string
  subtitle: string
  links: ProfileLink[]
}

export const profile: Profile = {
  name: 'Ranielli Montagna',
  handle: '@raniellimontagna',
  title: 'Engenheiro de Software Full Stack',
  subtitle: 'React, React Native, Node.js e TypeScript | Web/Mobile em escala',
  links: [
    {
      label: 'Site',
      href: 'https://ranimontagna.com',
      icon: 'terminal',
      ariaLabel: 'Abrir Site de Ranielli Montagna',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/RanielliMontagna',
      icon: 'github',
      ariaLabel: 'Abrir GitHub de Ranielli Montagna',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rannimontagna',
      icon: 'linkedin',
      ariaLabel: 'Abrir LinkedIn de Ranielli Montagna',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/raniellimontagna/',
      icon: 'instagram',
      ariaLabel: 'Abrir Instagram de Ranielli Montagna',
    },
    {
      label: 'X / Twitter',
      href: 'https://twitter.com/rannimontagna',
      icon: 'x',
      ariaLabel: 'Abrir X / Twitter de Ranielli Montagna',
    },
  ],
}
