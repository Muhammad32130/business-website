import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Intro from '@/components/intro'
import About from '@/components/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
    <Intro></Intro>
    <About></About>
        
    </>
  )
}
