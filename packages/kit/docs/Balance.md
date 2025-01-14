---
redirect_from:
  - /docs/frontend/components/Balance
---

# Balance

`Balance` is a React component that displays the current user's SUI token balance on the active network.

## Usage

```tsx
import { Balance } from '@suiware/kit';

function MyComponent() {
  return <Balance />;
}
```

## Features

- Automatically displays current SUI balance

- Updates automatically every 3 seconds

- Hides when wallet is not connected

- Uses Radix UI Badge component for consistent styling

- Green color variant indicating positive balance
