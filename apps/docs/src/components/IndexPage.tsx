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

const client = new SuiClient({ url: getFullnodeUrl('mainnet') })
const suinsClient = new SuinsClient({
  client,
  network: 'mainnet',
})

const DOCS_URL = 'https://github.com/suiware/kit/tree/main/packages/kit#readme'
const SUI_DAPP_STARTER_URL = 'https://sui-dapp-starter.dev'

const IndexPage: FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-start justify-start gap-6 px-8">
        <div className="mx-auto mb-6">
          <a
            href={DOCS_URL}
            className="text-md rounded border border-sds-blue p-2 font-bold text-sds-blue"
            target="_blank"
          >
            GITHUB DOCS
          </a>
        </div>

        <section>
          <h2 className="my-2 text-2xl text-gray-700">Components</h2>

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
              onError={(error, userFriendlyMessage) =>
                alert(userFriendlyMessage || error?.message)
              }
            />
          </ComponentView>
        </section>

        <section>
          <h2 className="my-2 text-2xl text-gray-700">Hooks</h2>

          <div className="my-2">
            Read in the{' '}
            <a
              href={DOCS_URL}
              className="text-md text-sds-blue"
              target="_blank"
            >
              docs
            </a>
          </div>
        </section>

        <section>
          <h2 className="my-2 text-2xl text-gray-700">Usage examples</h2>

          <div className="my-2">
            <ul className="list-disc pl-4">
              <li>
                <a
                  href={SUI_DAPP_STARTER_URL}
                  className="text-sds-blue"
                  target="_blank"
                >
                  Sui dApp Starter
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
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
      <div className="text-md mb-1 mt-4 font-bold text-gray-700">{label}</div>
      <div className="flex flex-col justify-center border border-dashed border-gray-200 p-4">
        {children}
      </div>
    </div>
  )
}
