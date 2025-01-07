# AmountInput

`AmountInput` is a React component that provides input functionality for SUI token amounts with validation and error handling.

## Usage

```tsx
import { AmountInput } from '@suiware/kit';

function MyComponent() {
  const [amount, setAmount] = useState('');

  return (
    <AmountInput
      value={amount}
      onChange={setAmount}
    />
  );
}
```

## Props

| Prop | Type | Description | Default |
|------|------|-------------|---------|
| `value` | `string` | The input value | Required |
| `onChange` | `(value: string) => void` | Callback function when value changes | Required |
| `placeholder` | `string` | Input placeholder text | `'Enter SUI amount'` |
| `className` | `string` | Additional CSS class names | `''` |
| `disabled` | `boolean` | Whether the input is disabled | `false` |

## Features

- Validates numeric input values

- Allows decimal points for fractional amounts

- Prevents negative values

- Real-time validation with error state display

- Customizable styling via className prop

- Controlled component with value/onChange pattern

## Validation Rules

The component validates input according to these rules:

- Only numbers and a single decimal point are allowed

- No negative values

- Empty input is considered valid

- Non-numeric characters are rejected

Invalid inputs display an error message

## Example with Custom Styling

```tsx
import { AmountInput } from '@suiware/kit';

function MyComponent() {
  const [amount, setAmount] = useState('');

  return (
    <AmountInput
      value={amount}
      onChange={setAmount}
      className="custom-input"
      placeholder="Enter amount in SUI"
    />
  );
}
```
