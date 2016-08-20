export function minutesToHour(minutes) {
  if (minutes == 0) return null

  let _hours, _nearestHalfHour

  _hours = (minutes / 60).toFixed(2)
  _nearestHalfHour = Math.round(_hours*2)/2

  return _nearestHalfHour + 'h'
}
