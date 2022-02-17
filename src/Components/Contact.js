import React from 'react';
import {
    Box,
    Text,
    Center,
    Img,
    Stack,
    SimpleGrid

} from '@chakra-ui/react';

import books from '../Images/Books-High-Quality-PNG.png'
import logo from '../assets/logo.png'

const Contact = () => {
    return (<> <Center padding="15px" flexDirection='column' gap='20px'><Center>
        <Text fontSize={['3xl', '4xl', '5xl', '6xl']}>Neka se i Vaš  Glas Čuje!</Text>
    </Center>
        <Center>
            <Text fontSize={['sm', 'md']}>Bilo da vas zanimaju funkcije, besplatna probna verzija ili čak štampa - spremni smo da odgovorimo na sva pitanja.</Text>
        </Center></Center>
        <br />
        <Box >
            <Center>
                <Img src={books} alt='books' width={['80%', '60%', '40%']} height='30%' />
            </Center>
        </Box>
        <br />
        <Center><SimpleGrid
            columns={{ sm: 1, md: 2 }}
            spacing='20'
            rounded='lg'
            padding='3%'
            w={['95%', '80%', '70%']}
            h='auto'
            margin='3%'
            bg='none'>
            <Box >
                <Stack spacing={4}>
                    <Text fontSize={['md', 'lg', 'xl']} textDecoration='underline'> Telefon: 069/777/888 (040-555-663)</Text>
                    <Text fontSize={['md', 'lg', 'xl']} textDecoration='underline'> Email: bookujMe@gmail.com</Text>
                    <Text fontSize={['md', 'lg', 'xl']} textDecoration='underline'> Adresa: zgrada Maksim ,Podgorica</Text>
                    <Text fontSize={['md', 'lg', 'xl']} textDecoration='underline'> Fax: 20000 Podgorica</Text>
                </Stack>
            </Box>
            <Box marginBottom='100px'>
                <Img src={logo} alt='logo' />
            </Box>

        </SimpleGrid>
        </Center>
    </>
    );
}

export default Contact;