export const getMinutesAndSeconds = (time: number) => {
  const minutes = Math.floor(time / 60)
  const seconds = parseFloat(String(time - minutes * 60)).toFixed(0)

  return `${minutes}:${seconds}`
}
