import BigNumber from 'bignumber.js'

/**
 * Format SUI amount to a human readable format.
 *
 * @param amount
 * @returns
 */
export const formatAmount = (amount: string | number | bigint | undefined) => {
  if (amount == null) {
    return undefined
  }

  let bn = new BigNumber(amount.toString())
  bn = bn.shiftedBy(-9)

  return bn.decimalPlaces(2, BigNumber.ROUND_DOWN).toFormat(2)
}
