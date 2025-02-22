import { ConnectButton } from '@mysten/dapp-kit'
import Logo from '~~/assets/logo.svg'

const Header = () => {
  return (
    <header className="sticky top-0 z-40 flex w-full flex-row flex-wrap items-center justify-center gap-4 bg-white/95 px-3 py-3 backdrop-blur-sm transition-colors duration-500 supports-backdrop-blur:bg-white/60 sm:justify-between sm:gap-3 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/1 dark:bg-transparent">
      <a
        href="#"
        className="text-sds-dark dark:text-sds-light flex flex-col items-center justify-center gap-1 outline-hidden hover:no-underline sm:flex-row"
      >
        <img src={Logo} alt="Logo" className="h-12 w-12" />
        <div className="pt-1 text-xl sm:text-2xl">
          {import.meta.env.VITE_APP_NAME}
        </div>
      </a>

      <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
        <div className="sds-connect-button-container">
          <ConnectButton />
        </div>
      </div>
    </header>
  )
}
export default Header
