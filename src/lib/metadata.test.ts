import { describe, expect, it } from 'vitest'
import { siteMetadata } from './metadata'

describe('siteMetadata', () => {
  it('uses the links subdomain as canonical origin', () => {
    expect(siteMetadata.url).toBe('https://links.ranimontagna.com')
    expect(siteMetadata.title).toBe('Ranielli Montagna | Links')
  })

  it('describes the current positioning', () => {
    expect(siteMetadata.description).toContain('Ranielli Montagna')
    expect(siteMetadata.description).toContain('Engenheiro de software')
    expect(siteMetadata.description).toContain('Lemon Energia')
    expect(siteMetadata.description).toContain('Atto')
  })
})
