import React, { useContext } from 'react';

import {
    Text,
    Center,
    Stack,
    SimpleGrid,
    Link,
    Button,
    useMediaQuery,
    Flex

} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import Triangle from '../Images/triangleimage.png';
import Oglas from './Oglas';
import { AuthContext } from '../helpers/AuthContext';

const Home = () => {
    const { isLoggedIn } = useContext(AuthContext);

    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');


    return (<>

        {isLargerThan1000 ? <SimpleGrid
            w='100%'
            bg='brand.normal'
            bgImage={Triangle}
            bgPosition='right'
            bgRepeat='no-repeat'
            bgSize='contain'
            padding='200px 100px'

        >

            <Center p='0 0 0 100px' w='50%' >
                <Stack spacing={6}>
                    <Text fontSize={['xl', '3xl']} fontWeight={['semibold', 'semibold']}> Razmjena Knjiga</Text>
                    <Text fontSize={['5xl', '8xl']} fontWeight={['bold', 'bold']} > Bookuj.me</Text>
                    <Text fontSize={['m', 'l']} fontWeight={['bold', 'bold']}> Vebsajt Bookuj.me nastao je sa idejom da kroz jednostavan interfejs omogući korisnicima razmjenu/trgovinu polovnih veoma očuvanih knjiga.ebsajt Bookuj.me nastao je sa idejom da kroz jednostava.ebsajt Bookuj.me nastao je sa idejom da kroz jednostavaebsajt Bookuj.me nastao je sa idejom da kroz jednebsajt Bookuj.me nastao je sa idejom da kroz jedn...ebsajt Bookuj.me nastao je sa idejom da kroz jednebsajt Bookujda kroz jedn...</Text>
                    {!isLoggedIn ? <Link as={ReactLink} to='/Registracija' w='40%'><Button width='100%' bgColor='button.normal'
                        color='white'
                        fontWeight='bold'
                        _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }}
                    >Registruj se</Button></Link> : <Link as={ReactLink} to='/PostaviOglas' w='40%'><Button width='100%' bgColor='button.normal'
                        color='white'
                        fontWeight='bold'
                        _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }}
                    >Postavi Oglas</Button></Link>}
                </Stack>

            </Center>



        </SimpleGrid> : <Flex
            w='100%'
            bg='brand.normal'
            justifyContent='center'
            alignItems='center'
            padding='30px'


        >

            <Center w='90%' padding='10px'>
                <Stack spacing={6}>
                    <Text fontSize={['xl', '2xl', '3xl']} fontWeight={['semibold', 'semibold']}> Razmjena Knjiga</Text>
                    <Text fontSize={['5xl', '7xl', '8xl']} fontWeight={['bold', 'bold']} > Bookuj.me</Text>
                    <Text fontSize={['m', 'm', 'l']} fontWeight={['bold', 'bold']}>  Bookuj.me nastao je sa idejom da kroz jednostava.ebsajt Bookuj.me nastao je sa idejom da kroz jednostavaebsajt Bookuj.me nastao je sa idejom da kroz jednebsajt Bookuj.me nastao je sa idejom da kroz jedn...ebsajt Bookuj.me nastao je sa idejom da kroz jednebsajt Bookujda kroz jedn...</Text>
                    {!isLoggedIn ? <Link as={ReactLink} to='/Registracija'><Button bgColor='button.normal'
                        color='white'
                        fontWeight='bold'
                        _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }}
                    >Registruj se</Button></Link> : <Link as={ReactLink} to='/'><Button bgColor='button.normal'
                        color='white'
                        fontWeight='bold'
                        _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }}
                    >Postavi Oglas</Button></Link>}
                </Stack>

            </Center>



        </Flex>}

        <Flex flexDirection='column' gap={['100px', '100px', '0px']}>
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3 }}
                w='100%'
                h='auto'
                p='10%'
                spacing='5%'

            >
                <Oglas />
                <Oglas />
                <Oglas />
            </SimpleGrid>
            <Center><Link as={ReactLink} to='/Oglasi' width={['40%', "20%"]} display='flex' justifyContent='center' alignItems='center' _hover={{ textDecoration: 'none' }}><Button mb='5%' bgColor='button.normal'
                color='white'
                fontWeight='bold'
                _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }}>Svi oglasi</Button></Link>
            </Center>
        </Flex>


    </>);
}

export default Home;