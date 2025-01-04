import BigNumber from "bignumber.js";

/**
 * Format SUI amount to a human readable format.
 * 
 * My opinion is that is should be in the SDK https://github.com/MystenLabs/sui/issues/17791
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

/**
 * Format network type to a human readable format.
 * 
 * @param machineName 
 * @returns 
 */
export const formatNetworkType = (machineName: string): string => {
  if (machineName.startsWith('sui:')) {
    return machineName.substring(4)
  }
  return machineName
}
