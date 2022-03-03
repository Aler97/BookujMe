import React, { useContext } from 'react';
import { Link as ReactLink } from 'react-router-dom'
import books from '../Images/Books-High-Quality-PNG.png'
import {
    Text,
    Img,
    SimpleGrid,
    Button,
    Link,
    Flex

} from '@chakra-ui/react';
import { UserIdContext } from '../helpers/userIdContext';


const Oglas = () => {
    const { userId } = useContext(UserIdContext);


    return (<><SimpleGrid
        columns={{ sm: 1, md: 1 }}
        w='100%'
        h='auto'
        border='solid'
        borderColor='black'
        borderRadius='0.5em'
    ><Img src={books} alt='books'></Img>
        <Flex flexDirection='column' mb='15px' paddingLeft='10px' gap='5px'>
            <Text marginTop='10px'><b>Naziv Knjige:</b></Text>
            <Text><b>Autor:</b></Text>
            <Text><b>Očuvanost:</b></Text>
            <Text><b>Edicija:</b></Text>
            <Link as={ReactLink} to={`/Oglasi/${userId}`} alignSelf='center' marginTop='10px'><Button bgColor='button.normal'
                color='white'
                fontWeight='bold'

                _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }}>Opširnije</Button></Link>

        </Flex>

    </SimpleGrid></>);
}

export default Oglas;