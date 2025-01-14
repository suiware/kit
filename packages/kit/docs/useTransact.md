---
redirect_from:
  - /docs/frontend/hooks/useTransact
---

# useTransact

`useTransact` is a React hook that facilitates performing transactions on the Sui network, handling wallet interactions and transaction lifecycle events.

## Usage

```tsx
import { useTransact } from '@suiware/kit'
import { Transaction } from '@mysten/sui/transactions'

function MyComponent() {
  const { transact } = useTransact({
    onBeforeStart: () => console.log('Transaction starting...'),
    onSuccess: (data) => console.log('Transaction succeeded:', data),
    onError: (e) => console.error('Transaction failed:', e)
  })

  const handleTransaction = () => {
    const tx = new Transaction()
    // Configure transaction...
    transact(tx)
  }

  return (
    <button onClick={handleTransaction}>
      Perform Transaction
    </button>
  )
}
```

## Parameters

The hook accepts an options object with the following properties:

| Parameter | Type | Description |
| --- | --- | --- |
| onBeforeStart | () => void | (Optional) Callback executed when user triggers a transaction |
| onSuccess | (data: SuiSignAndExecuteTransactionOutput) => void | (Optional) Callback executed after successful transaction completion |
| onError | (e: Error) => void | (Optional) Callback executed if transaction fails |

## Return Value

The hook returns an object with:

| Property | Type | Description |
| --- | --- | --- |
| transact | (tx: Transaction) => void | Function to execute a transaction on the Sui network |

## Features

- Handles wallet interaction for transaction signing

- Automatic transaction confirmation tracking

- Success/error notification management

- Integration with Sui Explorer for transaction viewing

- Complete transaction lifecycle management

## Usage Examples

### Basic Transaction

```tsx
const { transact } = useTransact()

const handleTransaction = () => {
  const tx = new Transaction()
  tx.moveCall({
    target: `${packageId}::module::function`,
    arguments: [/* ... */],
  })
  transact(tx)
}
```

### With Event Handlers

```tsx
const { transact } = useTransact({
  onBeforeStart: () => {
    setLoading(true)
  },
  onSuccess: (data) => {
    setLoading(false)
    refreshData()
  },
  onError: (e) => {
    setLoading(false)
    showError(e.message)
  }
})
```

### Full Example with Move Call

```tsx
import { useTransact } from '@suiware/kit'
import { Transaction } from '@mysten/sui/transactions'

function GreetingComponent() {
  const { transact } = useTransact({
    onSuccess: () => {
      console.log('Greeting updated!')
    }
  })

  const updateGreeting = (packageId: string, objectId: string, name: string) => {
    const tx = new Transaction()
    tx.moveCall({
      arguments: [
        tx.object(objectId),
        tx.pure.string(name),
        tx.object('0x8')
      ],
      target: `${packageId}::greeting::set_greeting`,
    })
    transact(tx)
  }

  return (
    <button onClick={() => updateGreeting(packageId, objectId, 'Hello')}>
      Update Greeting
    </button>
  )
}
```
