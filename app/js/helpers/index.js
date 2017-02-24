export function formatHours (hours) {
  if (hours === 0) {
    return 12
  } else if (hours > 12) {
    return hours - 12
  } else {
    return hours
  }
}

export function formatMinutes (minutes, seconds) {
  const totalSeconds = (minutes * 60) + seconds
  return Math.round(totalSeconds / 300) * 5
}

export function formatTime (hours, minutes, seconds) {
  let adjustedHours = formatHours(hours)
  let adjustedMinutes = formatMinutes(minutes, seconds)

  if (adjustedMinutes === 60) {
    adjustedHours = formatHours(hours + 1)
    adjustedMinutes = 0
  }

  return {
    hours: adjustedHours,
    minutes: adjustedMinutes
  }
}
