import Navbar from './components/Navbar'
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
        <main className='absolute top-14 w-full'>

        {children}
        </main>
      </body>
    </html>
  )
}
