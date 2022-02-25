import { Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import Reading from '../Images/reading.jpg';
import { Link as ReactLink } from 'react-router-dom';

function SinglePost() {
    return (
        <Flex flexDir='column' minH='80vh'>
            <Flex w='100%' flexDir='row' gap='10px' padding='10px'>
                <Image src={Reading} w='100%' h='300px' />
                <Image src={Reading} w='100%' h='300px' />
                <Image src={Reading} w='100%' h='300px' />
            </Flex>
            <Flex flexDir={['column', 'column', 'row']} gap={['30px', '50px', '100px']} w='100%' justifyContent='center' alignItems='flex-start' padding={['20px', '30px', '50px']}>
                <Flex flexDir='column' gap='30px'>
                    <Text> <b> Naziv knjige: </b> Noćna smena</Text>
                    <Text> <b> Autor: </b> Stiven King</Text>
                    <Text> <b> Očuvanost: </b> 8</Text>
                    <Text> <b> Razmjena/Prodaja </b></Text>
                </Flex>
                <Flex flexDir='column' gap='30px'>
                    <Text> <b>Vlasnik:</b> Aleksandar Radičević </Text>
                    <Text> <b>Grad: </b> Podgorica</Text>
                    <Text> <b>Broj Telefona: </b> 069576040</Text>
                    <Text> <b>E-mail:</b> radicevicsasa836@gmail.com </Text>
                    <Flex flexDir={['column', 'row']} gap='10px' justifyContent='center'>
                        <Button w='50%' bgColor='button.normal'
                            color='white'
                            fontWeight='bold'
                            _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }}>
                            Pošalji ponudu
                        </Button>
                        <Link as={ReactLink} to='/Oglasi' w='45%'>
                            <Button w='100%' bgColor='button.normal'
                                color='white'
                                fontWeight='bold'
                                _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }}>
                                Svi Oglasi
                            </Button>
                        </Link>
                    </Flex>

                </Flex>
            </Flex>
        </Flex>);
}

export default SinglePost;