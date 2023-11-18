import { Box, Heading, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <section className='w-screen h-screen grid place-items-center'>
            <Box className='' textAlign='center'>
                <Heading
                    display='inline-block'
                    as='h2'
                    fontSize='100px'
                    bgGradient='linear(to-r, teal.400, teal.600)'
                    backgroundClip='text'
                >
                    404
                </Heading>
                <Text fontSize='28px' mt={3} mb={2}>
                    Page Not Found
                </Text>
                <Text fontSize='20px' color={'gray.500'} mb={6}>
                    Halaman yang anda cari tidak ditemukan
                </Text>

                <Link to={'/ruang-muslim-v1/'}>
                    <Button
                        colorScheme='teal'
                        bgGradient='linear(to-r, teal.400, teal.500, teal.600)'
                        color='white'
                        variant='solid'
                    >
                        Kembali ke beranda
                    </Button>
                </Link>
            </Box>
        </section>
    )
}
