---
redirect_from:
  - /docs/frontend/components/Faucet
---

# Faucet

`Faucet` is a React component that provides a button to fund the user's current address with test SUI tokens on supported test networks.

## Usage

```tsx
import { Faucet } from '@suiware/kit';

function MyComponent() {
  return (
    <Faucet
      onSuccess={(message) => console.log(message)}
      onError={(error) => console.error(error)}
    />
  );
}
```

## Props

| Prop | Type | Description | Default |
|------|------|-------------|---------|
| `onSuccess` | `(message: string) => void` | Callback function when funding succeeds | Optional |
| `onError` | `(error: Error \| null, errorMessage?: string) => void` | Callback function when funding fails | Optional |

## Features

- Provides test SUI tokens on supported networks

- Visual button with faucet icon

- Error handling via callback

- Success confirmation via callback

- Uses Radix UI Button component

- Styled with customizable CSS class

## Network Support

The component supports the following test networks with different token amounts:

| Network | Amount |
|---------|---------|
| localnet | 100 SUI |
| devnet | 10 SUI |
| testnet | 1 SUI |

## Usage Limits

- Devnet and testnet have daily request quotas

- When quota is reached, users should wait 24 hours

- Alternative funding available through Discord channels:

`#devnet-faucet`

`#testnet-faucet`

Discord: https://discord.gg/sui

## Example with Error Handling

```tsx
import { Faucet } from '@suiware/kit';

function MyComponent() {
  const handleSuccess = (message: string) => {
    console.log('Funding successful:', message);
  };

  const handleError = (error: Error | null, errorMessage?: string) => {
    console.error('Funding failed:', errorMessage || error?.message);
  };

  return (
    <Faucet
      onSuccess={handleSuccess}
      onError={handleError}
    />
  );
}
```
