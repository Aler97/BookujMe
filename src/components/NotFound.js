import { Center, Text, Link, Button, Image, Flex } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import sadBook from '../assets/sadBook.png'

function NotFound() {
    return (<Flex justifyContent={['flex-start', 'center']} alignItems='center' gap={['0px', '0px', '50px']} w={['100%']} h={['100vh', '80vh']} padding='20px' flexDir={['column', 'column', 'column', 'row']}>
        <Center h={['200px', '300px', '400px']} flexDirection='column' gap='20px' m={['0', '0', '20px']}>
            <Text fontSize={['xl', '2xl', '3xl', '5xl']} fontWeight='bold'>Stranica koju tražite ne postoji!</Text>
            <Link as={ReactLink} to='/'>
                <Button bgColor='button.normal' color='white' _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }}>Početna strana</Button>
            </Link>

        </Center ><Image src={sadBook} h={['400px', '400px', '40vh']} /></Flex>);
}

export default NotFound;