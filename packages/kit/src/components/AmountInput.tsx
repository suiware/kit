import { ChangeEvent, FC, useEffect, useState } from 'react'

export interface IAmountInput {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  disabled?: boolean
}

const AmountInput: FC<IAmountInput> = ({
  value,
  onChange,
  placeholder,
  className = '',
  disabled = false,
}) => {
  const [inputValue, setInputValue] = useState(value)
  const [error, setError] = useState<string | null>(null)

  const validateAmount = (amount: string): boolean => {
    if (!amount) return true

    // Only allow numbers and decimal points
    if (!/^\d*\.?\d*$/.test(amount)) {
      return false
    }

    const numericValue = parseFloat(amount)

    if (isNaN(numericValue)) {
      return false
    }

    if (numericValue < 0) {
      return false
    }

    return true
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.trim()
    setInputValue(newValue)

    // Allow empty input
    if (!newValue) {
      setError(null)
      onChange(newValue)
      return
    }

    if (!validateAmount(newValue)) {
      setError('Invalid amount')
      onChange(newValue)
      return
    }

    setError(null)
    onChange(newValue)
  }

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <div className={`sk-amount-input ${className}`}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder || 'Enter SUI amount'}
        disabled={disabled}
        className={`${error ? 'error' : ''} ${className}`}
      />
      {error && <span>{error}</span>}
    </div>
  )
}

export default AmountInput
