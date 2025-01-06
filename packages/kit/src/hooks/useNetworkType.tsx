import {
  SuiClientProviderContext,
  useCurrentWallet,
  useSuiClientContext,
} from "@mysten/dapp-kit";
import { useEffect, useState } from "react";
import { formatNetworkType } from '~~/helpers/formatNetworkType'

const DEFAULT_REFETCH_INTERVAL = 3000;

export interface IUseNetworkTypeParams {
  /**
   * (Optional) The flag determines whether the app network needs to be synchronized with the wallet network regularly or just once.
   */
  autoSync?: boolean;
  /**
   * (Optional) Auto sync interval in milliseconds.
   */
  autoSyncInterval?: number;
}
export interface IUseNetworkTypeResponse {
  /**
   * Network type or undefined if wallet is not connected.
   */
  networkType?: "mainnet" | "testnet" | "devnet" | "localnet";
  /**
   * Synchronize app network with wallet network on demand.
   */
  synchronize: () => void;
}

/**
 * The useNetworkType() hook lets you determine which network is currently active in the user wallet.
 *
 * It's possible to request the network type once or on a regular basis.
 * If a wallet is not connected, the network type will be undefined.
 * Please note the user wallet is the single point of truth and the only way to switch the network now is through wallet settings.
 *
 * Usage:
 * - One-time request
 * ```ts
 * const { networkType } = useNetworkType({
 *  autoSync: false
 * })
 * ```
 * - On demand
 * ```ts
 * const { networkType, synchronize } = useNetworkType()
 * synchronize()
 * ```
 * - Regular update
 * ```ts
 * const { networkType } = useNetworkType({
 *  autoSync: true,
 *  autoSyncInterval: 3000
 * })
 * ```
 *
 * @param {IUseNetworkTypeParams} params The parameter object.
 * @returns {IUseNetworkTypeResponse} An object with the network type and synchronize function.
 */
const useNetworkType = ({
  autoSync,
  autoSyncInterval,
}: IUseNetworkTypeParams = {}): IUseNetworkTypeResponse => {
  const wallet = useCurrentWallet();
  const ctx = useSuiClientContext();
  const [networkType, setNetworkType] = useState<
    "mainnet" | "testnet" | "devnet" | "localnet" | undefined
  >(undefined);

  // @todo Find a better type for the wallet.
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const synchronizeNetworkType = (
    wallet: any,
    ctx: SuiClientProviderContext
  ) => {
    if (!wallet.isConnected) {
      setNetworkType(undefined);
      return;
    }

    const newNetwork = formatNetworkType(
      wallet.currentWallet?.accounts?.[0].chains?.[0]
    ) as "mainnet" | "testnet" | "devnet" | "localnet" | undefined;

    // Save currently selected wallet network.
    setNetworkType(newNetwork);

    // If network is defined, set the app network to it.
    if (newNetwork != null) {
      ctx.selectNetwork(newNetwork);
    }

    console.debug("debug: Network type synchronized");
  };

  useEffect(() => {
    synchronizeNetworkType(wallet, ctx);

    if (autoSync == null || autoSync === false) {
      return;
    }

    const interval = setInterval(
      () => {
        if (!wallet.isConnected || !autoSync) {
          console.debug("debug: Network type synchronizing stopped");
          setNetworkType(undefined);
          clearInterval(interval);
          return;
        }

        synchronizeNetworkType(wallet, ctx);
      },
      autoSync && autoSyncInterval != null
        ? autoSyncInterval
        : DEFAULT_REFETCH_INTERVAL
    );
    return () => {
      clearTimeout(interval);
    };
  }, [autoSync, autoSyncInterval, wallet, ctx]);

  return {
    networkType,
    synchronize: () => synchronizeNetworkType(wallet, ctx),
  };
};

export default useNetworkType
