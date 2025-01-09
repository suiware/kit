import {
  blue,
  blueDark,
  red,
  redDark,
  slate,
  slateDark,
} from '@radix-ui/colors'

/**
 * Convert keys of the given object from "slate1" to "slateDark1".
 *
 * @param {object} obj
 * @param {string} colorName
 * @returns
 */
const prefixDarkColors = (obj, colorName) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    // Extract just the number from the key.
    const numberKey = key.replace(/^[a-zA-Z]+/, '')
    acc[`${colorName}Dark${numberKey}`] = value
    return acc
  }, {})
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Support multiple approaches for switching between light and dark mode.
  darkMode: [
    'variant',
    [
      '@media (prefers-color-scheme: dark) { &:not(.light *) }',
      '&:is(.dark *)',
    ],
  ],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...slate,
        ...blue,
        ...red,
        ...prefixDarkColors(slateDark, 'slate'),
        ...prefixDarkColors(blueDark, 'blue'),
        ...prefixDarkColors(redDark, 'red'),
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
}
