import AddressInput from '@suiware/kit/AddressInput'
import { FC } from 'react'
import Layout from '~~/components/layout/Layout'

const App: FC = () => {
  return (
    <Layout>
      <h1>Hello World!</h1>
      <AddressInput value='0x0' onChange={(value) => console.log(value)} />
    </Layout>
  )
}

export default App
