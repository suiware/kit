import { getFaucetHost, requestSuiFromFaucetV2 } from '@mysten/sui/faucet'

export const fundAddress = async (
  address: string,
  network: 'localnet' | 'devnet' | 'testnet'
) => {
  return await requestSuiFromFaucetV2({
    host: getFaucetHost(network),
    recipient: address,
  })
}

export const getTestnetFaucetLink = (address: string) => {
  return `https://faucet.sui.io/?address=${address}`
}
