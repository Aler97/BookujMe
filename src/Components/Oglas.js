import React from 'react';
import { Link as ReactLink } from 'react-router-dom'
import books from '../Images/Books-High-Quality-PNG.png'
import {
    Text,
    Center,
    Img,
    Stack,
    SimpleGrid,
    Button,
    Link

} from '@chakra-ui/react';


const Oglas = () => {
    return (<><SimpleGrid
        columns={{ sm: 1, md: 1 }}
        w='100%'
        h='auto'
        border='solid'
        borderColor='black'
        borderRadius='0.5em'
    ><Img src={books} alt='books'></Img>
        <Center><Stack spacing={4} mb='15px'>
            <Text>Something</Text>
            <Text>Something</Text>
            <Text>Something</Text>
            <Text>Something</Text>
            <Link as={ReactLink} to='/Oglasi/:id'><Button bgColor='button.normal'
                color='white'
                fontWeight='bold'
                _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }}>Opširnije</Button></Link>

        </Stack></Center>

    </SimpleGrid></>);
}

export default Oglas;