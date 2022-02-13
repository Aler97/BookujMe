import React from 'react';

import {Box,
Text,
Center,
Img ,
Stack,
SimpleGrid,
Link,
Button

} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import Triangle from '../Images/triangleimage.png';

const Home = () => {
    return (  <><SimpleGrid
        columns={{ sm: 2, md: 2}}
         w='100%'
        h='auto' 
        bg='#89D0CA'
     >
         <Box  p='10%'>
             <Center>
         <Stack spacing={6}>
       <Text fontSize={['xl', '3xl']}  fontWeight={['semibold', 'semibold']}> Razmjena Knjiga</Text>
       <Text fontSize={['5xl', '8xl']} fontWeight={['bold', 'bold']}as='c'> Bookuj.me</Text>
       <Text fontSize={['m', 'l']}  as='c' fontWeight={['bold', 'bold']}> Vebsajt Bookuj.me nastao je sa idejom da kroz jednostavan interfejs omogući korisnicima razmjenu/trgovinu polovnih veoma očuvanih knjiga.ebsajt Bookuj.me nastao je sa idejom da kroz jednostava.ebsajt Bookuj.me nastao je sa idejom da kroz jednostava.ebsajt Bookuj.me nastao je sa idejom da kroz jednebsajt Bookuj.me nastao je sa idejom da kroz jedn...ebsajt Bookuj.me nastao je sa idejom da kroz jednebsajt Bookujda kroz jedn...</Text>
       <Button width='40%' bgColor= '#292E33'
            color= 'white'
            fontWeight= 'bold'
            >Registruj se</Button>
       </Stack>
        
        </Center>
        </Box>
         <Box h='100%'> 
          <Img src={Triangle} alt='books' h='100%' w='100%' />
         </Box>
        
         </SimpleGrid> 

         <Box >
         <Stack spacing={4}>
       <Text fontSize='2xl' padding='10%'> Vebsajt Bookuj.me nastao je sa idejom da kroz jednostavan interfejs omogući korisnicima razmjenu/trgovinu polovnih veoma očuvanih knjiga.</Text>
        
        </Stack>
        </Box>
         </>);
}
 
export default Home;