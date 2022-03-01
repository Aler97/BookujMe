import { Box, Button, Collapse, Flex, FormControl, FormLabel, Image, Input, Link, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import Reading from '../Images/reading.jpg';
import { Link as ReactLink } from 'react-router-dom';


function SinglePost() {
    const { isOpen, onToggle } = useDisclosure();
    const [isLargerThan750] = useMediaQuery('(min-width:750px)');


    return (
        <Flex flexDirection='column'>
            <Flex flexDir='column' minH='80vh'>
                {isLargerThan750 ? <Flex w='100%' flexDir='row' gap='10px' padding='10px'>
                    <Image src={Reading} w='100%' h='300px' />
                    <Image src={Reading} w='100%' h='300px' />
                    <Image src={Reading} w='100%' h='300px' />
                </Flex> : <Flex w='100%' justifyContent='center' alignItems='center' padding='10px'><Image src={Reading} w={['90%', '80%']} /></Flex>}
                <Flex flexDir={['column', 'column', 'row']} gap={['30px', '50px', '100px']} w='100%' justifyContent='center' alignItems='flex-start' padding={['20px', '30px', '50px']}>
                    <Flex flexDir='column' gap='30px'>
                        <Text> <b> Naziv knjige: </b> Noćna smena</Text>
                        <Text> <b> Autor: </b> Stiven King</Text>
                        <Text> <b> Očuvanost: </b> 8</Text>
                        <Text> <b> Razmjena/Prodaja </b></Text>
                    </Flex>
                    <Flex flexDir='column' gap='30px' w={['100%', '70%', '60%', '40%', '30%']}>
                        <Text> <b>Vlasnik:</b> Aleksandar Radičević </Text>
                        <Text> <b>Grad: </b> Podgorica</Text>
                        <Text> <b>E-mail:</b> radicevicsasa836@gmail.com </Text>
                        <Flex flexDir={['row']} gap='10px' justifyContent='center' w='100%'>
                            <Button w={['50%']} bgColor='button.normal'
                                color='white'
                                fontWeight='bold'
                                fontSize={['13px', 'md']}
                                _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }} onClick={onToggle}>
                                Pošalji ponudu
                            </Button>
                            <Link as={ReactLink} to='/Oglasi' w={['40%', '45%']}>
                                <Button w='100%' bgColor='button.normal'
                                    color='white'
                                    fontWeight='bold'
                                    fontSize={['13px', 'md']}
                                    _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }}>
                                    Svi Oglasi
                                </Button>
                            </Link>
                        </Flex>

                    </Flex>
                </Flex>

            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <Flex w='100%' flexDirection='column' alignItems='center' gap='10px' >
                    <Text fontWeight='bold' fontSize='3xl'>Pošalji ponudu:</Text>
                    <FormControl w={['95%', '80%', '70%', '60%', '50%']} border='1px solid black' padding={['10px', '20px', '30px', '40px', '80px']} rounded='lg'>
                        <FormLabel htmlFor='nazivKnjige'>Naziv knjige:</FormLabel>
                        <Input id='nazivKnjige' type='text' isRequired placeholder='Naziv knjige' ></Input>
                        <FormLabel htmlFor='imeAutora' marginTop='15px'>Ime autora:</FormLabel>
                        <Input id='imeAutora' type='text' isRequired placeholder='Ime autora'></Input>
                        <FormLabel marginTop='20px'>Očuvanost Knjige:</FormLabel>
                        <Slider defaultValue={5} min={0} max={10} step={1} >
                            <SliderMark value={1} mt='1' ml='-1' fontSize='sm'>
                                1
                            </SliderMark>
                            <SliderMark value={2} mt='1' ml='-1' fontSize='sm'>
                                2
                            </SliderMark>
                            <SliderMark value={3} mt='1' ml='-1' fontSize='sm'>
                                3
                            </SliderMark>
                            <SliderMark value={4} mt='1' ml='-1' fontSize='sm'>
                                4
                            </SliderMark>
                            <SliderMark value={5} mt='1' ml='-1' fontSize='sm'>
                                5
                            </SliderMark>
                            <SliderMark value={6} mt='1' ml='-1' fontSize='sm'>
                                6
                            </SliderMark>
                            <SliderMark value={7} mt='1' ml='-1' fontSize='sm'>
                                7
                            </SliderMark>
                            <SliderMark value={8} mt='1' ml='-1' fontSize='sm'>
                                8
                            </SliderMark>
                            <SliderMark value={9} mt='1' ml='-1' fontSize='sm'>
                                9
                            </SliderMark>
                            <SliderMark value={10} mt='1' ml='-1' fontSize='sm'>
                                10
                            </SliderMark>
                            <SliderTrack bg='white'>
                                <Box position='relative' right={10} />
                                <SliderFilledTrack bg='brand.normal' />
                            </SliderTrack>
                            <SliderThumb boxSize={4} bgColor='brand.normal' />
                        </Slider>
                        <FormLabel htmlFor='foto' marginTop='30px'>Priložite do 3 fotografije:</FormLabel>
                        <Input type='file' multiple id='foto' isRequired padding='6px' accept='image/*'></Input>
                        <Button bgColor='button.normal'
                            color='white'
                            fontWeight='bold'
                            _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }} marginTop='30px' float='right'>Pošalji Ponudu</Button>
                    </FormControl>
                </Flex>
            </Collapse>

        </Flex >);
}

export default SinglePost;