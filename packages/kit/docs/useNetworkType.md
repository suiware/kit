# useNetworkType

`useNetworkType` is a React hook that helps you determine and synchronize with the network type (mainnet, testnet, devnet, or localnet) currently active in the user's wallet.

## Usage
```tsx
import { useNetworkType } from '@suiware/kit';

function MyComponent() {
  const { networkType, synchronize } = useNetworkType({
    autoSync: true,
    autoSyncInterval: 3000
  });

  return (
    <div>
      Current Network: {networkType}
    </div>
  );
}
```

## Parameters

The hook accepts an options object with the following properties:

| Parameter | Type | Description |
| --- | --- | --- |
| autoSync | boolean | (Optional) Determines whether the app network needs to be synchronized with the wallet network regularly or just once |
| autoSyncInterval | number | (Optional) Auto sync interval in milliseconds. Default is 3000ms |

## Return Value

The hook returns an object with:

| Property | Type | Description |
| --- | --- | --- |
| networkType | "mainnet" \| "testnet" \| "devnet" \| "localnet" \| undefined | The current network type, or undefined if wallet is not connected |
| synchronize | () => void | Function to manually synchronize the app network with wallet network |

## Features

- Automatic network type detection from connected wallet

- Optional automatic synchronization with configurable interval

- Manual synchronization capability

- Handles wallet connection state

- Synchronizes app network with wallet network

## Usage Examples

### One-time Request

```tsx
const { networkType } = useNetworkType({
  autoSync: false
});
```

### Regular Auto-sync

```tsx
const { networkType } = useNetworkType({
  autoSync: true,
  autoSyncInterval: 3000
});
```

### Manual Synchronization

```tsx
const { networkType, synchronize } = useNetworkType();

function handleSync() {
  synchronize();
}
```

### Full Example with Network Display

```tsx
import { useNetworkType } from '@suiware/kit';

function NetworkDisplay() {
  const { networkType, synchronize } = useNetworkType({
    autoSync: true,
    autoSyncInterval: 5000
  });

  return (
    <div>
      <div>Current Network: {networkType || 'Not Connected'}</div>
      <button onClick={synchronize}>
        Sync Network
      </button>
    </div>
  );
}
```
