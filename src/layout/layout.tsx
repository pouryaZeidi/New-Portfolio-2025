import Footer from '@/components/Footer'
import Welcome from '@/components/Welcome'
import WelcomeText from '@/components/WelcomeText'
import React from 'react'

const Layout = ({ children }: { children: any }) => {
  return (
    <div className='relative bg-black w-full h-[100vh] overflow-hidden '>
      <Welcome />
      <WelcomeText />
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
