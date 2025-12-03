#!/usr/bin/env node
/**
 * Script to generate CSS variables from Radix UI colors
 * This converts the JS color objects to Tailwind v4 @theme variables
 */

import {
  blue,
  blueDark,
  red,
  redDark,
  slate,
  slateDark,
} from '@radix-ui/colors'

/**
 * Convert color object to CSS variable definitions
 * @param {object} colorObj - Radix color object (e.g., { slate1: '#fcfcfd', ... })
 * @param {string} colorName - Base color name (e.g., 'slate')
 * @param {boolean} isDark - Whether this is a dark mode color
 * @returns {string[]} Array of CSS variable definitions
 */
function colorObjToCSS(colorObj, colorName, isDark = false) {
  const variables = []

  for (const [key, value] of Object.entries(colorObj)) {
    // Extract the number from key (e.g., "slate1" -> "1")
    const number = key.replace(/^[a-zA-Z]+/, '')

    // Create variable name
    const varName = isDark
      ? `--color-${colorName}Dark${number}`
      : `--color-${colorName}${number}`

    variables.push(`  ${varName}: ${value};`)
  }

  return variables
}

// Generate all color variables
const allVariables = []

// Light mode colors
allVariables.push('/* Light mode colors */')
allVariables.push(...colorObjToCSS(slate, 'slate', false))
allVariables.push(...colorObjToCSS(blue, 'blue', false))
allVariables.push(...colorObjToCSS(red, 'red', false))

allVariables.push('')
allVariables.push('/* Dark mode colors */')
allVariables.push(...colorObjToCSS(slateDark, 'slate', true))
allVariables.push(...colorObjToCSS(blueDark, 'blue', true))
allVariables.push(...colorObjToCSS(redDark, 'red', true))

// Output the complete @theme block
console.log('@theme {')
console.log(allVariables.join('\n'))
console.log('}')

// Also output a summary
console.error(`\n✓ Generated ${allVariables.filter(v => v.includes('--color')).length} CSS color variables`)
console.error('✓ Copy the output above into your main.css file\n')
