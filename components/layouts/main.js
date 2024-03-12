import Head from 'next/head';  // import Head from Next.js
import { Box, Container } from '@chakra-ui/react';  // import Box from Chakra UI

const Main = ( { childern, router } ) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Abdirahman - Homepage</title>
            </Head>

            <Container maxW="container.md" pt={14}>
                {childern}
            </Container>
        </Box>
    )
}

export default Main;  // export the Main component