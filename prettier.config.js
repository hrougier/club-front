export default {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  plugins: [
    'prettier-plugin-organize-imports',
    'prettier-plugin-packagejson',
    'prettier-plugin-tailwindcss',
  ],
  tailwindAttributes: ['tw'],
  tailwindFunctions: ['cn'],
  tailwindStylesheet: './styles/index.css',
  overrides: [
    {
      files: ['tsconfig.json'],
      options: {
        trailingComma: 'none',
      },
    },
    {
      files: ['*.yml', '*.yaml'],
      options: {
        singleQuote: false,
      },
    },
  ],
}
