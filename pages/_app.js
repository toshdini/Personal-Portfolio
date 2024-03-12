import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layouts/main';

const Website = ( { Component, pageProps, router } ) => {
    return (
        <ChakraProvider>
            <Layout router={router}>
                <Component {...pageProps} key={router.route}  />
            </Layout>
        </ChakraProvider>
    )
}

export default Website;

// The Website component is the root component of the app. It is used to persist layout between page changes.
// The Component prop is the active page, so whenever you navigate between routes, Component will change to the new page.
// The pageProps prop is the initial props that were preloaded for your page by one of our data fetching methods, and router is the Next.js router object.