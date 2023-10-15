const CURRENCY_FORMATED = new Intl.NumberFormat(undefined, {
  currency: 'RUB',
  style: 'currency',
})

export function formatCurrency(i: number) {
  return CURRENCY_FORMATED.format(i).replace(/\D00(?=\D*$)/, '')
}
