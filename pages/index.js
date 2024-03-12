import { Container, Box, Heading } from '@chakra-ui/react';

const Page = () => {
    return (
        <Container maxW="container.md" pt={14}>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello, I&apos;m a box!!!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Abdirahman Mohamed
                    </Heading>
                    <p>
                        I am a student at Seneca College. I am passionate about building many applications and solving problems.
                    </p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page