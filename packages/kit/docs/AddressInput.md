# AddressInput

`AddressInput` is a React component that provides input functionality for Sui addresses and SuiNS names with validation and resolution capabilities.

## Usage

```tsx
import { AddressInput } from '@suiware/kit';

function MyComponent() {
  const [address, setAddress] = useState('');

  return (
    <AddressInput
      value={address}
      onChange={setAddress}
    />
  );
}
```

## Props

| Prop | Type | Description | Default |
|------|------|-------------|---------|
| `value` | `string` | The input value | Required |
| `onChange` | `(value: string) => void` | Callback function when value changes | Required |
| `placeholder` | `string` | Input placeholder text | `'Enter Sui address'` or `'Enter Sui address or SuiNS name'` |
| `className` | `string` | Additional CSS class names | `''` |
| `disabled` | `boolean` | Whether the input is disabled | `false` |
| `suinsClient` | `SuinsClient` | Client instance for SuiNS name resolution. If not set, SuiNS names are not supported. | `undefined` |

## Features

- Validates Sui addresses
- Resolves SuiNS names (with `.sui` suffix or `@` prefix) when `suinsClient` is provided
- Debounced SuiNS resolution to prevent excessive API calls
- Error state display for invalid addresses or failed resolutions
- Customizable styling via className prop

## Example with SuiNS Support

```tsx
import { AddressInput } from '@suiware/kit';
import { SuinsClient } from '@mysten/suins';
import { getFullnodeUrl, SuiClient } from '@mysten/sui/client';

const client = new SuiClient({ url: getFullnodeUrl('mainnet') });
const suinsClient = new SuinsClient({
	client,
	network: 'mainnet',
});

function MyComponent() {
  const [address, setAddress] = useState('');

  return (
    <AddressInput
      value={address}
      onChange={setAddress}
      suinsClient={suinsClient}
      placeholder="Enter Sui address or SuiNS name"
    />
  );
}
```
