import { describe, expect, it } from 'vitest'
import { profile } from './profile'

describe('profile', () => {
  it('exposes the expected public identity', () => {
    expect(profile.name).toBe('Ranielli Montagna')
    expect(profile.handle).toBe('@raniellimontagna')
    expect(profile.title).toBe('Engenheiro de Software Full Stack')
    expect(profile.subtitle).toContain('React')
    expect(profile.subtitle).toContain('TypeScript')
  })

  it('keeps links public, ordered, and safe', () => {
    expect(profile.links.map((link) => link.label)).toEqual([
      'Site',
      'GitHub',
      'LinkedIn',
      'Instagram',
      'X / Twitter',
    ])

    for (const link of profile.links) {
      expect(link.href).toMatch(/^https:\/\//)
      expect(link.ariaLabel).toContain(link.label)
    }
  })

  it('does not expose private or workplace email addresses', () => {
    const serialized = JSON.stringify(profile).toLowerCase()

    expect(serialized).not.toContain('@luizalabs.com')
    expect(serialized).not.toContain('ranielli.montagna@')
  })
})
