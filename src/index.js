import defaultColors from './defaultColors'
import utilities from './utilities'

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1)

/**
 * Composable color utilities
 * @typedef {Object<string, utility>} colorUtilities
 * @example
 * {
 *  red: { color: 'red' },
 *  hoverRed: { ':hover': { color: 'red' } },
 *  bgRed: { backgroundColor: 'red' },
 *  borderRed: { borderColor: 'red' },
 *  strokeRed: { stroke: 'red' },
 *  fillRed: { fill: 'red' },
 * }
 */


const generateColorUtilities = colors => Object.keys(colors).reduce(
  (a, b) => ({
    ...a,
    ...{
      [b]: { color: colors[b] },
      [`hover${capitalize(b)}`]: { ':hover': { color: colors[b] } },
      [`bg${capitalize(b)}`]: { backgroundColor: colors[b] },
      [`border${capitalize(b)}`]: { borderColor: colors[b] },
      [`stroke${capitalize(b)}`]: { stroke: colors[b] },
      [`fill${capitalize(b)}`]: { fill: colors[b] },
    }
  }),
  {}
)

const allColorUtilities = colors => ({
  ...generateColorUtilities(defaultColors),
  ...generateColorUtilities(colors),
})

/**
 * An optional color configuration object
 * @constant colors
 * @typedef colors
 * @type {Object<string, string>}
 * @example
 * { red: '#EE3124', redTint: '#F9C1BD' }
 */

/**
 * Optional function to generate utilities with custom colors.
 * @namespace
 * @function
 * @type {function}
 * @memberof cooltilities
 * @param  {[colors]} [colors=defaultColors]
 * @return {cooltilities} All composable utility objects with custom color utilities.
 */
export const generate = (colors = defaultColors) => {
  return {
    ...allColorUtilities(colors),
    ...utilities,
  }
}

/**
 * Composable utility objects for css-in-js libraries.
 * @namespace
 * @constant {Object<string, utility>}
 * @return {Object<string, utility>} All composable utility objects including {@link #layoututilties} and {@link #colorutilties}.
 */
const cooltilities = generate()
cooltilities.generate = generate

export default cooltilities
