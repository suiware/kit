# @suiware/kit

Opinionated React components and hooks for Sui dApps.

## Installation

```bash
pnpm add @suiware/kit @mysten/dapp-kit @mysten/sui @mysten/suins @mysten/wallet-standard @tanstack/react-query
```

## Usage

### Import styles

In your main component, import the styles:

```tsx
import '@mysten/dapp-kit/dist/index.css';
import '@suiware/kit/main.css';

function App() {
  return (
    <div className="main">
      Hey there!
    </div>
  )
}
```

### Wrap your app components into `SuiProvider`

```tsx
import '@mysten/dapp-kit/dist/index.css';
import '@suiware/kit/main.css';
import { SuiProvider, Balance } from '@suiware/kit'

function App() {
  return (
    <SuiProvider>
      <div className="main">
        Hey there! Your SUI balance is <Balance />
      </div>
    </SuiProvider>
  )
}
```

## API

## Providers

- [SuiProvider](./docs/SuiProvider.md)

## Components

- [AddressInput](./docs/AddressInput.md)
- [AmountInput](./docs/AmountInput.md)
- [Balance](./docs/Balance.md)
- [Faucet](./docs/Faucet.md)
- [NetworkType](./docs/NetworkType.md)

## Hooks

- [useBalance](./docs/useBalance.md)
- [useFaucet](./docs/useFaucet.md)
- [useNetworkType](./docs/useNetworkType.md)
