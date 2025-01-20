import { isValidSuiAddress } from '@mysten/sui/utils'
import type { SuinsClient } from '@mysten/suins'
import debounce from 'lodash.debounce'
import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react'
import { resolveSuinsName } from '~~/helpers/suins'

const DEBOUNCE_DELAY = 500

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

  // Debounced SuiNS resolution
  const debouncedResolve = useCallback(
    debounce(async (name: string) => {
      if (!suinsClient) {
        setError(
          'SuinsClient is not available. Pass it through component props to make SuiNS name resolving work.'
        )
        return
      }

      try {
        const resolvedAddress = await resolveSuinsName(suinsClient, name)
        if (resolvedAddress) {
          setError(null)
          onChange(resolvedAddress)
        } else {
          setError('Invalid SuiNS name')
        }
      } catch (err) {
        setError('Failed to resolve SuiNS name')
      }
    }, DEBOUNCE_DELAY),
    [suinsClient, onChange]
  )

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.trim()
    setInputValue(newValue)

    // Handle SuiNS names.
    if (newValue.endsWith('.sui') || newValue.startsWith('@')) {
      debouncedResolve(newValue)
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

  useEffect(() => {
    setInputValue(value)
  }, [value])

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      debouncedResolve.cancel()
    }
  }, [debouncedResolve])

  return (
    <div className={`sk-address-input ${className}`}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={
          placeholder ||
          'Enter Sui address' + (suinsClient != null ? ' or SuiNS name' : '')
        }
        disabled={disabled}
        className={error ? 'error' : ''}
      />
      {error && <span>{error}</span>}
    </div>
  )
}

export default AddressInput
