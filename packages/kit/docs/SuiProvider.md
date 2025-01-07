# SuiProvider

`SuiProvider` is a React component that sets up the necessary providers for Sui blockchain integration in your application. It combines React Query, Sui Client, and Wallet providers in a single wrapper component.

## Usage

```tsx
import { SuiProvider } from '@suiware/kit';

function App() {
  return (
    <SuiProvider>
      {/* Your app components */}
    </SuiProvider>
  );
}
```

## Props

| Prop | Type | Description | Default |
|------|------|-------------|---------|
| `customQueryClient` | `QueryClient` | Custom React Query client instance | `new QueryClient()` |
| `customNetworkConfig` | `Record<string, NetworkConfig \| SuiClient>` | Custom network configurations | `undefined` |
| `defaultNetwork` | `string` | The default network to connect to | `undefined` |
| `walletAutoConnect` | `boolean` | Whether to automatically connect to the wallet | `undefined` |
| `walletStashedName` | `string` | Name of the stashed wallet | `'Sui Wallet'` |
| `themeSettings` | `Theme \| null` | Custom theme settings for the wallet UI | `undefined` |

## Example with Custom Configuration

```tsx
import { SuiProvider } from '@suiware/kit';
import { QueryClient } from '@tanstack/react-query';
import { getFullnodeUrl } from '@mysten/sui/client';

const queryClient = new QueryClient();
const networkConfig = {
  devnet: { url: getFullnodeUrl('devnet')  },
  testnet: { url: getFullnodeUrl('testnet')  },
};

function App() {
  return (
    <SuiProvider
      customQueryClient={queryClient}
      customNetworkConfig={networkConfig}
      defaultNetwork="devnet"
      walletAutoConnect={true}
      walletStashedName="My Sui Wallet"
    >
      {/* Your app components */}
    </SuiProvider>
  );
}
```
