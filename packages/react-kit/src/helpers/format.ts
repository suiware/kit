import BigNumber from "bignumber.js";

/**
 * @todo: Replace this function with the corresponding SDK function when it gets to SDK https://github.com/MystenLabs/sui/issues/17791
 *
 * @param amount
 * @returns
 */
export const formatAmount = (amount: string | number | bigint | undefined) => {
  if (amount == null) {
    return undefined;
  }

  let bn = new BigNumber(amount.toString());
  bn = bn.shiftedBy(-9);

  return bn.decimalPlaces(2, BigNumber.ROUND_DOWN).toFormat(2);
};
