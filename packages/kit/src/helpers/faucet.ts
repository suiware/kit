import { getFaucetHost, requestSuiFromFaucetV1 } from '@mysten/sui/faucet'

export const fundAddress = async (
  address: string,
  network: 'localnet' | 'devnet' | 'testnet'
) => {
  return await requestSuiFromFaucetV1({
    host: getFaucetHost(network),
    recipient: address,
  })
}

export const getTestnetFaucetLink = (address: string) => {
  return `https://faucet.sui.io/?address=${address}`
}
