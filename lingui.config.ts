import type { LinguiConfig } from '@lingui/conf'

const CONFIG: LinguiConfig = {
  locales: ['en', 'fr'],
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}/messages',
      include: ['src'],
      exclude: ['**/node_modules/**'],
    },
  ],
  format: 'po',
  formatOptions: { origins: false },
  compileNamespace: 'ts',
}

export default CONFIG
