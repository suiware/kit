import '@mysten/dapp-kit/dist/index.css'
import '@radix-ui/themes/styles.css'
import '@suiware/kit/main.css'
import SuiProvider from '@suiware/kit/SuiProvider'
import { FC, StrictMode } from 'react'
import IndexPage from '~~/components/IndexPage'
import { APP_NAME } from '~~/config/main'
import { getThemeSettings } from '~~/helpers/theme'
import useNetworkConfig from '~~/hooks/useNetworkConfig'
import ThemeProvider from '~~/providers/ThemeProvider'
import '~~/styles/index.css'

const themeSettings = getThemeSettings()

const App: FC = () => {
  const { networkConfig } = useNetworkConfig()

  return (
    <StrictMode>
      <ThemeProvider>
        <SuiProvider
          customNetworkConfig={networkConfig}
          defaultNetwork={'localnet'}
          walletAutoConnect={false}
          walletStashedName={APP_NAME}
          themeSettings={themeSettings}
        >
          <IndexPage />
        </SuiProvider>
      </ThemeProvider>
    </StrictMode>
  )
}

export default App
