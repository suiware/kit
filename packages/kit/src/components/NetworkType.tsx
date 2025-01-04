import { Badge } from '@radix-ui/themes'
import useNetworkType from '~~/hooks/useNetworkType'

/**
 * The `NetworkType` component renders the name of the currently selected network or disconnected if no wallet connected.
 * 
 * It automatically re-fetches the network type from wallet every 3 seconds.
 * Every network is displayed in its own color:
 * - disconnected: tomato
 * - localnet/devnet/testnet: amber
 * - mainnet: green
 * Please note the user wallet is the single point of truth and the only way to switch the network now is through wallet settings.
 * 
 * The component is using the useNetworkType hook to fetch the network type.
 */
const NetworkType = () => {
  const { networkType } = useNetworkType({ autoSync: true })

  let color = 'amber'
  if (networkType == null) {
    color = 'tomato'
  } else if (networkType === 'mainnet') {
    color = 'green'
  }

  // @todo Suggest Radix adding a better type for the color.
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  return (
    <Badge color={color as any} className="rounded-lg px-3 py-1.5">
      {networkType || 'disconnected'}
    </Badge>
  )
}

export default NetworkType
