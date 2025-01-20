import { getFullnodeUrl, SuiClient } from '@mysten/sui/client'
import { SuinsClient } from '@mysten/suins'
import {
  AddressInput,
  AmountInput,
  Balance,
  Faucet,
  NetworkType,
} from '@suiware/kit'
import { FC, PropsWithChildren } from 'react'
import Layout from '~~/components/layout/Layout'

// You need a Sui client. You can re-use the Sui client of your project
// (it's not recommended to create a new one).
const client = new SuiClient({ url: getFullnodeUrl('mainnet') })

// Now you can use it to create a SuiNS client.
const suinsClient = new SuinsClient({
  client,
  network: 'mainnet',
})

const IndexPage: FC = () => {
  return (
    <Layout>
      <h2 className="mb-4 text-2xl">Components</h2>

      <ComponentView label="AddressInput">
        <AddressInput
          value="0x0"
          onChange={(value) => console.log(value)}
          suinsClient={suinsClient}
        />
      </ComponentView>

      <ComponentView label="AmountInput">
        <AmountInput value="" onChange={(value) => console.log(value)} />
      </ComponentView>

      <ComponentView label="NetworkType">
        <NetworkType />
      </ComponentView>

      <ComponentView label="Balance">
        <Balance />
      </ComponentView>

      <ComponentView label="Faucet">
        <Faucet
          onSuccess={(message) => alert(message)}
          onError={(error) => alert(error)}
        />
      </ComponentView>
    </Layout>
  )
}

export default IndexPage

interface IComponentViewProps {
  label: string
}
const ComponentView: FC<PropsWithChildren<IComponentViewProps>> = ({
  children,
  label,
}) => {
  return (
    <div className="my-2">
      <div className="text-md mb-1 mt-4 font-bold">{label}</div>
      <div className="flex flex-col justify-center border border-dashed border-gray-200 p-3">
        {children}
      </div>
    </div>
  )
}
