export function formatNumber(num: number) {
  return new Intl.NumberFormat('ru-RU').format(num)
}

export function formatNumberWithSign(num: number) {
  if (num > 0) {
    return `+ ${formatNumber(num)}`
  } else if (num < 0) {
    return `- ${formatNumber(Math.abs(num))}`
  }

  return formatNumber(Number(num))
}
