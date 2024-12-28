import { Link } from '@radix-ui/themes'
import { HeartIcon } from 'lucide-react'
import ThemeSwitcher from '~~/components/ThemeSwitcher'

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-between gap-3 p-3 sm:flex-row sm:items-end">
      <div className="flex flex-row gap-3 lg:w-1/3">
        
      </div>

      <div className="flex flex-grow flex-col items-center justify-center gap-1">
        <div className="flex flex-row items-center justify-center gap-1">
          <span>Built with</span>
          <HeartIcon className="h-4 w-4" />
          <span>by</span>
          <Link
            href="https://suiware.io"
            target="_blank"
            rel="noopener noreferrer"
            highContrast={true}
          >
            Suiware
          </Link>
        </div>
        
      </div>

      <div className="flex flex-row justify-end lg:w-1/3">
        <ThemeSwitcher />
      </div>
    </footer>
  )
}
export default Footer
