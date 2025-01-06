import { isValidSuiAddress } from '@mysten/sui/utils'
import type { SuinsClient } from '@mysten/suins'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import { resolveSuinsName } from '~~/helpers/suins'

export interface IAddressInput {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  suinsClient?: SuinsClient
}

const AddressInput: FC<IAddressInput> = ({
  value,
  onChange,
  placeholder,
  className = '',
  disabled = false,
  suinsClient,
}) => {
  const [inputValue, setInputValue] = useState(value)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.trim()
    setInputValue(newValue)

    // Handle SuiNS names.
    if (newValue.endsWith('.sui') || newValue.startsWith('@')) {
      if (suinsClient == null) {
        setError(
          'SuinsClient is not available. Pass it through component props to make SuiNS name resolving work.'
        )
        return
      }

      try {
        const resolvedAddress = await resolveSuinsName(suinsClient, newValue)
        if (resolvedAddress) {
          setError(null)
          onChange(resolvedAddress)
        } else {
          setError('Invalid SuiNS name')
        }
      } catch (err) {
        setError('Failed to resolve SuiNS name')
      }
      return
    }

    // Handle regular Sui addresses.
    if (newValue && !isValidSuiAddress(newValue)) {
      setError('Invalid Sui address')
      onChange(newValue)
      return
    }

    setError(null)
    onChange(newValue)
  }

  return (
    <div className="sk-address-input">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={
          placeholder ||
          'Enter Sui address' + (suinsClient != null ? ' or SuiNS name' : '')
        }
        disabled={disabled}
        className={`${error ? 'error' : ''} ${className}`}
      />
      {error && <span>{error}</span>}
    </div>
  )
}

export default AddressInput
