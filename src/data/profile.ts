export type LinkIcon = 'terminal' | 'atto' | 'github' | 'linkedin' | 'blog' | 'instagram' | 'x'

export interface ProfileLink {
  label: string
  href: string
  icon: LinkIcon
  ariaLabel: string
  /** Perfil pessoal em outra plataforma (rel="me"). */
  me?: boolean
}

export interface Profile {
  name: string
  handle: string
  /** Papel atual, uma linha. */
  title: string
  /** O que faço e onde — duas frases curtas. */
  subtitle: string
  links: ProfileLink[]
}

export const profile: Profile = {
  name: 'Ranielli Montagna',
  handle: '@raniellimontagna',
  title: 'Engenheiro de software · Sócio-fundador da Atto',
  subtitle:
    'Produto, automação e IA aplicada na Lemon Energia. Software sob medida e marketing na Atto.',
  links: [
    {
      label: 'Portfólio',
      href: 'https://ranimontagna.com',
      icon: 'terminal',
      ariaLabel: 'Abrir Portfólio de Ranielli Montagna',
      me: true,
    },
    {
      label: 'Atto',
      href: 'https://attodev.com.br',
      icon: 'atto',
      ariaLabel: 'Abrir Atto, software house de Ranielli Montagna',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rannimontagna',
      icon: 'linkedin',
      ariaLabel: 'Abrir LinkedIn de Ranielli Montagna',
      me: true,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/RanielliMontagna',
      icon: 'github',
      ariaLabel: 'Abrir GitHub de Ranielli Montagna',
      me: true,
    },
    {
      label: 'Blog',
      href: 'https://ranimontagna.com/blog',
      icon: 'blog',
      ariaLabel: 'Abrir Blog de Ranielli Montagna',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/raniellimontagna/',
      icon: 'instagram',
      ariaLabel: 'Abrir Instagram de Ranielli Montagna',
      me: true,
    },
    {
      label: 'X / Twitter',
      href: 'https://twitter.com/rannimontagna',
      icon: 'x',
      ariaLabel: 'Abrir X / Twitter de Ranielli Montagna',
      me: true,
    },
  ],
}
