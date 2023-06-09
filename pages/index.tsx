import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Intro from '@/components/intro'
import About from '@/components/About'
import Project from '@/components/Project'
import Footer from '@/components/Footer'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [modal, setModal] =  useState<boolean>(false)
if(modal){
  window.scrollTo(0, 0);
  document.body.classList += (' scrollNone')
}else if(process.browser){ 
  document.body.classList.remove('scrollNone')
}


  return (
    <div className='bg'>

    <Navbar modal={modal} setmodal={setModal} />
    <Intro modal={modal} setmodal={setModal}></Intro>
    <About></About>
    <Project />
    <Footer setmodal={setModal}/>
    </div>
  )
}
