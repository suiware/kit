import '@mysten/dapp-kit/dist/index.css'
import '@radix-ui/themes/styles.css'
import '@suiware/kit/main.css'
import SuiProvider from '@suiware/kit/SuiProvider'
import { StrictMode } from 'react'
import App from '~~/components/App'
import { reactRender } from '~~/helpers/misc.ts'
import ThemeProvider from '~~/providers/ThemeProvider'
import '~~/styles/index.css'

reactRender(
  <StrictMode>
    <ThemeProvider>
      <SuiProvider>
        <App />
      </SuiProvider>
    </ThemeProvider>
  </StrictMode>
)
