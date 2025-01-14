---
redirect_from:
  - /docs/frontend/hooks/useBalance
---

# useBalance

`useBalance` is a React hook that provides functionality to fetch and monitor SUI token balances for the currently connected wallet address.

## Usage

```tsx
import { useBalance } from '@suiware/kit';

function MyComponent() {
  const { balance, error, refetch } = useBalance({
    autoRefetch: true,
    autoRefetchInterval: 3000
  });

  return <div>Balance: {balance} SUI</div>;
}
```

## Parameters

The hook accepts an optional configuration object with the following properties:

| Parameter | Type | Description | Default |
| --- | --- | --- | --- |
| autoRefetch | boolean | Whether to automatically refresh the balance periodically | false |
| autoRefetchInterval | number | Interval for auto-refresh in milliseconds | 3000 |

## Return Value

| Property | Type | Description |
| --- | --- | --- |
| balance | string \| undefined | The formatted SUI balance |
| error | Error \| null | Any error that occurred during fetching |
| refetch | () => void | Function to manually refresh the balance |

## Features

- Fetches SUI balance for the current wallet address

- Supports one-time and periodic balance updates

- Automatically formats balance values

- Provides error handling

- Includes manual refresh capability

- Cleans up intervals on unmount

## Usage Examples

### One-time Balance Fetch

```tsx
const { balance } = useBalance({
  autoRefetch: false
});
```
### Regular Balance Updates

```tsx
const { balance } = useBalance({
  autoRefetch: true,
  autoRefetchInterval: 5000 // Updates every 5 seconds
});
```

### Manual Balance Refresh

```tsx
const { balance, refetch } = useBalance();

// Later in your code
const handleRefresh = () => {
  refetch();
};
```
