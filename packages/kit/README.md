# @suiware/kit

Opinionated React components and hooks for Sui dApps.

## Installation

```bash
pnpm add @suiware/kit @mysten/dapp-kit @mysten/sui @mysten/suins @mysten/wallet-standard @tanstack/react-query
```

## Usage

### 1. Import styles once in a higher order component

```tsx
import '@mysten/dapp-kit/dist/index.css'
import '@suiware/kit/main.css'
```

Like so:

```tsx
import '@mysten/dapp-kit/dist/index.css'
import '@suiware/kit/main.css'

function App() {
  return (
    <div className="main">
      Hey there!
    </div>
  )
}
```

### 2. Wrap your main component into `SuiProvider`

```tsx
import '@mysten/dapp-kit/dist/index.css'
import '@suiware/kit/main.css'
import { SuiProvider } from '@suiware/kit'

function App() {
  return (
    <SuiProvider>
      <div className="main">
        Hey there!
      </div>
    </SuiProvider>
  )
}
```

### 3. Use @suiware/kit components and hooks

```tsx
import '@mysten/dapp-kit/dist/index.css'
import '@suiware/kit/main.css'
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

## API reference

## Providers

- [SuiProvider](https://github.com/suiware/kit/blob/main/packages/kit/docs/SuiProvider.md)

## Components

- [AddressInput](https://github.com/suiware/kit/blob/main/packages/kit/docs/AddressInput.md)
- [AmountInput](https://github.com/suiware/kit/blob/main/packages/kit/docs/AmountInput.md)
- [Balance](https://github.com/suiware/kit/blob/main/packages/kit/docs/Balance.md)
- [Faucet](https://github.com/suiware/kit/blob/main/packages/kit/docs/Faucet.md)
- [NetworkType](https://github.com/suiware/kit/blob/main/packages/kit/docs/NetworkType.md)

## Hooks

- [useBalance](https://github.com/suiware/kit/blob/main/packages/kit/docs/useBalance.md)
- [useFaucet](https://github.com/suiware/kit/blob/main/packages/kit/docs/useFaucet.md)
- [useNetworkType](https://github.com/suiware/kit/blob/main/packages/kit/docs/useNetworkType.md)
