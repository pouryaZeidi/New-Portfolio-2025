import React from 'react'
import { ChakraProvider } from "@chakra-ui/react/styled-system";
import { defaultSystem } from '@chakra-ui/react';

const Provider = ({children}:any) => {
  return (
    <ChakraProvider value={defaultSystem}>
        {children}
    </ChakraProvider>
  )
}

export default Provider