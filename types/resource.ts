export interface ResourceResult {
  id: string
  name: string
  description: string
  url: string
  contentTypes: string[]
  subjects: string[]
  accessNote?: string
  relevanceScore: number
  matchReason?: string
  featured?: boolean
  fullText?: boolean
}
