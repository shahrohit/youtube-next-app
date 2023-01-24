import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

import './globals.css'
type Props={
  children:React.ReactNode
}
export default function RootLayout({children}:Props) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar/>
        <main className='flex w-full'>
          <div className=" w-0 sm:w-28  z-20">
              <Sidebar nav="Home"/>
          </div>
            {children}
        </main>
      </body>
    </html>
  )
}
