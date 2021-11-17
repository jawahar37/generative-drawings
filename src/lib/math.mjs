/**
 * Return a random integer between min and max
 * @param {number} min lower bound, inclusive.
 * @param {number} max upper bound, exclusice.
 */
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}