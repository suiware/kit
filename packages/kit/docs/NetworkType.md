# NetworkType

`NetworkType` is a React component that displays the current network type with color-coded badges. It automatically syncs with the connected wallet's network status.

## Usage

```tsx
import { NetworkType } from '@suiware/kit';

function MyComponent() {
  return <NetworkType />;
}
```

## Features

- Automatically syncs with wallet network status every 3 seconds

- Color-coded badges for different network types:

  - Disconnected: Tomato red

  - Localnet/Devnet/Testnet: Amber

  - Mainnet: Green

- Uses Radix UI Badge component for consistent styling

- Updates in real-time when wallet connection changes
