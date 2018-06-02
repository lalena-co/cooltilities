/**
 * Composable CSS property.
 * @typedef {Object<string, string|Object<string, string>>} utility
 * @example
 * { display: 'block' }
 * // or
 * { ':hover': { color: 'red' } }
 */

/**
 * Composable utiltiy objects.
 * @typedef {Object<string, utility>} layoutUtilities
 */
export default {
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { display: 'block' }
   */
  block: { display: 'block' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { display: 'inline-block' }
   */
  inlineBlock: { display: 'inline-block' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { display: 'flex' }
   */
  flex: { display: 'flex' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { flex: 0.5, display: 'flex' }
   */
  flexHalf: { flex: 0.5, display: 'flex' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { flexDirection: 'row' }
   */
  flexRow: { flexDirection: 'row' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { flexDirection: 'column' }
   */
  flexColumn: { flexDirection: 'column' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { flexDirection: 'row-reverse' }
   */
  rowReverse: { flexDirection: 'row-reverse' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { flexDirection: 'column-reverse' }
   */
  columnReverse: { flexDirection: 'column-reverse' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { flexWrap: 'nowrap' }
   */
  noWrap: { flexWrap: 'nowrap' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { flexWrap: 'wrap' }
   */
  wrap: { flexWrap: 'wrap' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { justifyContent: 'flex-start' }
   */
  justifyStart: { justifyContent: 'flex-start' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { justifyContent: 'flex-end' }
   */
  justifyEnd: { justifyContent: 'flex-end' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { justifyContent: 'center' }
   */
  justifyCenter: { justifyContent: 'center' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { justifyContent: 'space-between' }
   */
  spaceBetween: { justifyContent: 'space-between' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { justifyContent: 'space-around' }
   */
  spaceAround: { justifyContent: 'space-around' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { alignItems: 'flex-start' }
   */
  alignStart: { alignItems: 'flex-start' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { alignItems: 'flex-end' }
   */
  alignEnd: { alignItems: 'flex-end' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { alignItems: 'center' }
   */
  alignCenter: { alignItems: 'center' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { alignItems: 'baseline' }
   */
  alignBase: { alignItems: 'baseline' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { alignItems: 'stretch' }
   */
  alignStretch: { alignItems: 'stretch' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { alignSelf: 'flex-start' }
   */
  selfStart: { alignSelf: 'flex-start' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { alignSelf: 'flex-end' }
   */
  selfEnd: { alignSelf: 'flex-end' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { alignSelf: 'center' }
   */
  selfCenter: { alignSelf: 'center' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { alignSelf: 'baseline' }
   */
  selfBase: { alignSelf: 'baseline' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { alignSelf: 'stretch' }
   */
  selfStretch: { alignSelf: 'stretch' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { flexGrow: 0 }
   */
  grow0: { flexGrow: 0 },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { flexGrow: 1 }
   */
  grow1: { flexGrow: 1 },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { flexShrink: 0 }
   */
  shrink0: { flexShrink: 0 },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { flexShrink: 1 }
   */
  shrink1: { flexShrink: 1 },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { overflow: 'visible' }
   */
  overflowVisible: { overflow: 'visible' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { overflow: 'scroll' }
   */
  overflowScroll: { overflow: 'scroll' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { top: 0 }
   */
  t0: { top: 0 },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { left: 0 }
   */
  l0: { left: 0 },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { right: 0 }
   */
  r0: { right: 0 },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { bottom: 0 }
   */
  b0: { bottom: 0 },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { position: 'relative' }
   */
  relative: { position: 'relative' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { position: 'fixed' }
   */
  fixed: { position: 'fixed' },
  /**
   * @memberof layoutUtilities
   * @property
   * @return {utility} { position: 'absolute' }
   */
  absolute: { position: 'absolute' },
}
