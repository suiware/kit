---
redirect_from:
  - /docs/frontend/hooks/useFaucet
---

# useFaucet

`useFaucet` is a React hook that allows you to fund addresses with SUI tokens on test networks (localnet, devnet, and testnet).

## Usage
```tsx
import { useFaucet } from '@suiware/kit';

function MyComponent() {
  const { fund } = useFaucet({
    onSuccess: (message) => console.log(message),
    onError: (error, message) => console.error(message)
  });

  return (
    <button onClick={() => fund()}>
      Request Test SUI
    </button>
  );
}
```

## Parameters

The hook accepts an options object with the following properties:

| Parameter | Type | Description |  
| --- | --- | --- |
| onSuccess | (message: string) => void | Callback function called when funding succeeds |
| onError | (error: Error \| null, errorMessage?: string) => void | Callback function called when funding fails |

## Return Value

The hook returns an object with:

| Property | Type | Description | 
| --- | --- | --- |
| fund | (address?: string) => void | Function to request funds.  

## Features

- Supports localnet, devnet, and testnet networks

- Automatic wallet connection check

- Network compatibility validation

- Error handling with descriptive messages

- Success confirmation with formatted address

## Network Support

The component supports the following test networks with different token amounts:

| Network | Amount |
|---------|---------|
| localnet | 100 SUI |
| devnet | 10 SUI |
| testnet | 1 SUI |

## Example with Error Handling

```tsx
import { useFaucet } from '@suiware/kit';

function MyComponent() {
  const { fund } = useFaucet({
    onSuccess: (message) => {
      alert(message);
    },
    onError: (_, errorMessage) => {
      alert(errorMessage);
    }
  });

  return (
    <div>
      <button onClick={() => fund()}>
        Fund Current Wallet
      </button>
      <button onClick={() => fund('0x123...')}>
        Fund Specific Address
      </button>
    </div>
  );
}
```
