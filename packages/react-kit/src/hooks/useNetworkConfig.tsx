import { createNetworkConfig, NetworkConfig } from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui/client";

export interface ICustomNetworkConfig
  extends Record<string, NetworkConfig<Record<string, string>>> {}

const useNetworkConfig = (customNetworkConfig: ICustomNetworkConfig = {}) => {
  const defaultConfig = {
    localnet: {
      url: getFullnodeUrl("localnet"),
      variables: {
        // [CONTRACT_PACKAGE_VARIABLE_NAME]: LOCALNET_CONTRACT_PACKAGE_ID,
        // [EXPLORER_URL_VARIABLE_NAME]: LOCALNET_EXPLORER_URL,
      },
    },
    devnet: {
      url: getFullnodeUrl("devnet"),
      variables: {
        // [CONTRACT_PACKAGE_VARIABLE_NAME]: DEVNET_CONTRACT_PACKAGE_ID,
        // [EXPLORER_URL_VARIABLE_NAME]: DEVNET_EXPLORER_URL,
      },
    },
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables: {
        // [CONTRACT_PACKAGE_VARIABLE_NAME]: TESTNET_CONTRACT_PACKAGE_ID,
        // [EXPLORER_URL_VARIABLE_NAME]: TESTNET_EXPLORER_URL,
      },
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
      variables: {
        // [CONTRACT_PACKAGE_VARIABLE_NAME]: MAINNET_CONTRACT_PACKAGE_ID,
        // [EXPLORER_URL_VARIABLE_NAME]: MAINNET_EXPLORER_URL,
      },
    },
  };

  const customConfig = customNetworkConfig || {};

  const mergedConfig = {
    ...defaultConfig,
    ...customConfig,
  };

  return createNetworkConfig(mergedConfig);
};

export default useNetworkConfig;
