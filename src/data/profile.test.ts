import { describe, expect, it } from 'vitest'
import { profile } from './profile'

describe('profile', () => {
  it('exposes the expected public identity', () => {
    expect(profile.name).toBe('Ranielli Montagna')
    expect(profile.handle).toBe('@raniellimontagna')
    expect(profile.title).toContain('Engenheiro de software')
    expect(profile.title).toContain('Atto')
    expect(profile.subtitle).toContain('Lemon Energia')
    expect(profile.subtitle).toContain('Atto')
  })

  it('keeps links public, ordered, and safe', () => {
    expect(profile.links.map((link) => link.label)).toEqual([
      'Portfólio',
      'Atto',
      'LinkedIn',
      'GitHub',
      'Blog',
      'Instagram',
      'X / Twitter',
    ])

    for (const link of profile.links) {
      expect(link.href).toMatch(/^https:\/\//)
      expect(link.ariaLabel).toContain(link.label)
    }
  })

  it('marks only personal profiles as rel="me"', () => {
    const me = profile.links.filter((link) => link.me).map((link) => link.label)
    expect(me).toEqual(['Portfólio', 'LinkedIn', 'GitHub', 'Instagram', 'X / Twitter'])
  })

  it('does not expose private or workplace email addresses', () => {
    const serialized = JSON.stringify(profile).toLowerCase()

    expect(serialized).not.toContain('@luizalabs.com')
    expect(serialized).not.toContain('@lemon')
    expect(serialized).not.toContain('ranielli.montagna@')
  })
})
