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
