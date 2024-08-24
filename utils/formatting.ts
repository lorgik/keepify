export function formatNumber(num: number) {
  return new Intl.NumberFormat('ru-RU').format(num)
}
