import { createNetworkConfig } from '@mysten/dapp-kit'
import { getFullnodeUrl } from '@mysten/sui/client'

const useNetworkConfig = () => {
  return createNetworkConfig({
    localnet: {
      url: getFullnodeUrl('localnet'),
      variables: {},
    },
    devnet: {
      url: getFullnodeUrl('devnet'),
      variables: {},
    },
    testnet: {
      url: getFullnodeUrl('testnet'),
      variables: {},
    },
    mainnet: {
      url: getFullnodeUrl('mainnet'),
      variables: {},
    },
  })
}

export default useNetworkConfig
