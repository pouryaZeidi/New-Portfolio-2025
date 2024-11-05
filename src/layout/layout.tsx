import Welcome from '@/components/Welcome'
import WelcomeText from '@/components/WelcomeText'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Layout = ({children}:{children:any}) =>{
  return (
    <Box position={'relative'} bg={'black'} w={'100vw'} h={'100vh'}>
      <Welcome/>
      <WelcomeText/>
      {children}
    </Box>
    
  )
}

export default Layout