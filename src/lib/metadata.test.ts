import { describe, expect, it } from 'vitest'
import { siteMetadata } from './metadata'

describe('siteMetadata', () => {
  it('uses the links subdomain as canonical origin', () => {
    expect(siteMetadata.url).toBe('https://links.ranimontagna.com')
    expect(siteMetadata.title).toBe('Ranielli Montagna | Links')
  })

  it('describes the technical positioning', () => {
    expect(siteMetadata.description).toContain('Engenheiro de Software Full Stack')
    expect(siteMetadata.description).toContain('React')
    expect(siteMetadata.description).toContain('Node.js')
  })
})
