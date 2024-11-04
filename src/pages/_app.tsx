
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import Layout from "@/layout/layout";
import Provider from "@/components/Provider";
import { defaultSystem , ChakraProvider } from '@chakra-ui/react';
import 'tailwindcss/tailwind.css'; 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ThemeProvider attribute="class" disableTransitionOnChange>
      <ChakraProvider value={defaultSystem}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    // </ThemeProvider>
  );
}

export default MyApp;
