import { getFullnodeUrl, SuiClient } from '@mysten/sui/client';
import { SuinsClient } from '@mysten/suins';
import { AddressInput, AmountInput } from '@suiware/kit';
import { FC } from 'react';
import Layout from '~~/components/layout/Layout';
 
// You need a Sui client. You can re-use the Sui client of your project
// (it's not recommended to create a new one).
const client = new SuiClient({ url: getFullnodeUrl('mainnet') });

// Now you can use it to create a SuiNS client.
const suinsClient = new SuinsClient({
	client,
	network: 'mainnet',
});

const App: FC = () => {
  return (
    <Layout>
      <h2 className='text-2xl mb-4'>Components</h2>

      <div className='text-md mt-4 mb-1'>&lt;AddressInput /&gt;</div>
      <AddressInput value='0x0' onChange={(value) => console.log(value)} suinsClient={suinsClient}/>

      <div className='text-md mt-4 mb-1'>&lt;AmountInput /&gt;</div>
      <AmountInput value='' onChange={(value) => console.log(value)}/>
    </Layout>
  )
}

export default App
