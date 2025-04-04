module.exports = {
    semi: false, // No semicolons
    singleQuote: true, // Use single quotes
    trailingComma: 'es5', // Trailing commas where valid in ES5 (objects, arrays, etc.)
    tabWidth: 2, // Use 2 spaces per indentation level
    useTabs: false, // Use spaces instead of tabs
    bracketSpacing: true, // Space between brackets in object literals
    arrowParens: 'always', // Always include parentheses around arrow function parameters
    vueIndentScriptAndStyle: true, // Indent script and style tags in Vue files
    endOfLine: 'lf', // Use LF for line endings
    overrides: [
      {
        files: '*.vue',
        options: {
          parser: 'vue',
        },
      },
      {
        files: ['*.ts', '*.tsx'],
        options: {
          parser: 'typescript',
        },
      },
      {
        files: ['*.md', '*.mdx'],
        options: {
          proseWrap: 'always', // Ensure markdown text wraps properly
        },
      },
    ],
  }
  