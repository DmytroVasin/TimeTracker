// TODO: ES6

const pJson = require('../../../../package.json');

/**
 * Convert null, 0, 240 value minutes to
 * hours in format 3.5h
 * @return {String}
 */
export function minutesToHour(minutes) {
  if (minutes == 0) return null

  let _hours, _nearestHalfHour

  _hours = (minutes / 60).toFixed(2)
  _nearestHalfHour = Math.round(_hours*2)/2

  return _nearestHalfHour + 'h'
}

/**
 * Convert null, 0, 240 value minutes to
 * hours in format 08:10
 * @return {String}
 */
export function convertMinutesToTrayFromat(minutes) {
  if (minutes == null) return ''

  let numOfSec = parseInt(minutes, 10)

  let h = Math.floor(numOfSec / 3600);
  let m = Math.floor((numOfSec - (h * 3600)) / 60);

  if (h < 10) { h = "0"+h }
  if (m < 10) { m = "0"+m }

  return h+':'+m;
}

/**
 * Get app version
 * @return {String}
 */
export function ecoSystemJson() {
  return pJson;
}
