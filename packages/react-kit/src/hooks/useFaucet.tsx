import { useCurrentAccount, useSuiClientContext } from '@mysten/dapp-kit';
import { formatAddress } from '@mysten/sui/utils';
import { fundAddress } from "~~/helpers/faucet";

export interface IUseFaucetParams {
  onError?: (error: Error | null, errorMessage?: string) => void;
  onSuccess?: (message: string) => void;
}

export interface IUseFaucetResponse {
  /**
   * Funds the address on the test network.
   * 
   * @param {string|undefined} address The address to fund. If not provided, the current address is used.
   */
  fund: (address?: string) => void
}

/**
 * The `useFaucet()` hook lets you fund an address an a test network.
 * 
 * The supported networks are **localnet**, **devnet** and **testnet**.
 * The granted amount is:
 * - localnet: 100 SUI
 * - devnet: 10 SUI
 * - testnet: 1 SUI
 * Please note there is a quota for requesting funds from **devnet** and **testnet**. 
 * If you have reached the limit, wait for 24 hours, and in the meanwhile use the `#devnet-faucet` and `#testnet-faucet` channels 
 * of the official Sui Discord https://discord.gg/sui.

 * @returns {IUseFaucetResponse} An object with the fund function.
 */
const useFaucet = ({
  onError,
  onSuccess,
}: IUseFaucetParams): IUseFaucetResponse => {
  const ctx = useSuiClientContext();
  const currentAccount = useCurrentAccount();

  const fund = async (address?: string) => {
    if (!['localnet', 'devnet', 'testnet'].includes(ctx.network)) {
      onError != null && onError(null, "This network does not have a faucet");
      return;
    }

    const fundedAddress = address == null ? currentAccount?.address : undefined;
    if (fundedAddress == null) {
      onError != null && onError(null, "Please connect your wallet first");
      return;
    }

    try {
      const { error } = await fundAddress(
        fundedAddress,
        ctx.network as "localnet" | "devnet" | "testnet"
      );
      if (error) {
        onError != null &&
          onError(
            new Error(error),
            "Cannot fund the address on this network at the moment"
          );
      }
    } catch (e) {
      onError != null && onError(e as Error, "Cannot fund the address");
      return;
    }

    onSuccess != null &&
      onSuccess(
        `The ${formatAddress(fundedAddress)} address has been funded successfully`
      );
  };

  return {
    fund,
  };
};

export default useFaucet
