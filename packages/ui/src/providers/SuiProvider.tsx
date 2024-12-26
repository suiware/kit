import {
  NetworkConfig,
  SuiClientProvider,
  Theme,
  WalletProvider,
} from "@mysten/dapp-kit";
import { SuiClient } from "@mysten/sui/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";

// @todo: Extract to a separate file.
export type NetworkConfigs<
  T extends NetworkConfig | SuiClient = NetworkConfig | SuiClient,
> = Record<string, T>;

export interface ISuiProviderProps extends PropsWithChildren {
  customQueryClient?: QueryClient;
  customNetworkConfig?: NetworkConfigs<NetworkConfig | SuiClient> | undefined;
  defaultNetwork?: string;
  walletAutoConnect?: boolean;
  // stashedWalletConfig?: StashedWalletConfig;
  themeSettings?: Theme | null;
}

const queryClient = new QueryClient();

const SuiProvider: FC<ISuiProviderProps> = ({
  children,
  customQueryClient,
  customNetworkConfig,
  defaultNetwork,
  walletAutoConnect,
  themeSettings,
}) => {
  return (
    <QueryClientProvider client={customQueryClient || queryClient}>
      <SuiClientProvider
        networks={customNetworkConfig}
        defaultNetwork={defaultNetwork}
      >
        <WalletProvider autoConnect={walletAutoConnect} theme={themeSettings}>
          {children}
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
};

export default SuiProvider;
