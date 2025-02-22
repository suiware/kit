import { Button } from '@radix-ui/themes'
import { HandCoinsIcon } from 'lucide-react'
import { FC } from 'react'
import useFaucet from '~~/hooks/useFaucet'

export interface IFaucet {
  onError?: (error: Error | null, errorMessage?: string) => void
  onSuccess?: (message: string) => void
}

/**
 * The `Faucet` component renders a button that lets user fund their current address on the currently selected test network.
 *
 * The supported networks are **localnet**, **devnet** and **testnet**.
 * The granted amount is:
 * - localnet: 100 SUI
 * - devnet: 10 SUI
 * - testnet: 1 SUI
 * For the **testnet**, the faucet link is opened in a new tab.
 * Please note there is a certain quota for requesting funds from **devnet** and **testnet**.
 * If you have reached the limit, wait for 24 hours, and in the meanwhile use the `#devnet-faucet` and `#testnet-faucet` channels
 * of the official Sui Discord https://discord.gg/sui
 *
 * The component is using the useFaucet hook to fund the current address.
 *
 * @param {IFaucet} props The component props.
 */
const Faucet: FC<IFaucet> = (props) => {
  const { onError, onSuccess } = props

  const { fund } = useFaucet({
    onError,
    onSuccess,
  })

  return (
    <Button
      variant="surface"
      className="sk-faucet-button"
      onClick={() => fund()}
    >
      <HandCoinsIcon />
      Faucet
    </Button>
  )
}

export default Faucet
