import React from 'react';
import {Box,
Text,
Center,
Img ,
Stack,
SimpleGrid

} from '@chakra-ui/react';

import books from '../Images/Books-High-Quality-PNG.png'
import logo from '../assets/logo.png'

const Contact = () => {
    return (<> <Box padding="15px"><Center>
        <Text fontSize='6xl'>Neka se Vaš Glas Čuje!</Text>
    </Center>
    <Center>
            <Text fontSize='sm'>Bilo da vas zanimaju funkcije, besplatna probna verzija ili čak štampa - spremni smo da odgovorimo na sva pitanja.</Text>
        </Center></Box>
        <br/>
        <Box >
        <Center>
           <Img src={books} alt='books' width='40%' height='30%'/>
        </Center>
        </Box>
        <br/>
       <Center><SimpleGrid
       columns={{ sm: 2, md: 2}}
       spacing='20'
        rounded='lg' 
        padding='3%'
        w='70%'
    h='auto' 
    margin='3%'
    bg='none'>
        <Box>
        <Stack spacing={4}>
       <Text fontSize='xl' textDecoration='underline'> Telefon: 069/777/888 (040-555-663)</Text>
       <Text fontSize='xl'textDecoration='underline'> Email: bookujMe@gmail.com</Text>
       <Text fontSize='xl'textDecoration='underline'> Adresa: zgrada Maksim ,Podgorica</Text>
       <Text fontSize='xl'textDecoration='underline'> Fax: 20000 Podgorica</Text>
       </Stack>
       </Box>
        <Box> 
            <Img src={logo} alt='logo'/>
        </Box>
       
        </SimpleGrid> 
        </Center>
        </>
 );
} 
 
export default Contact;