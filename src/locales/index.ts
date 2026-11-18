import type { Locale } from '@/i18n/config'
import { en, type Dictionary } from './en'
import { fr } from './fr'

export type { Dictionary }

// Both dictionaries are small (a few kB gzipped), so they ship together:
// switching language is instant, with no network request.
export const dictionaries: Record<Locale, Dictionary> = { fr, en }
