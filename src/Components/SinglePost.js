import { Box, Button, Collapse, Flex, FormControl, FormLabel, Image, Input, Link, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Stat, StatLabel, StatNumber, Text, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import Reading from '../Images/reading.jpg';
import { Link as ReactLink, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import ApiCall from "../service/ApiCall";
import { UserIdContext } from "../helpers/userIdContext";


function SinglePost() {
    const { isOpen, onToggle } = useDisclosure();
    const [isLargerThan750] = useMediaQuery('(min-width:750px)');
    const { id } = useParams();
    const [book, setBook] = useState();
    const { userId } = useContext(UserIdContext);
    const [data, setData] = useState({
        name: "",
        author: "",
        genre: "",
        edition: "",
        preservation_level: "5",
    });

    const handleChange = e => {

        setData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));
    }

    useEffect(() => {
        ApiCall.get(`/books/${id}/`)
            .then(response => { setBook(response.data) })
            .catch(error => { window.alert('Došlo je do greške  ' + error) })

    }, [id])


    return (<>
        {book ? <Flex flexDirection='column'>
            <Flex flexDir='column' minH='80vh'>
                {isLargerThan750 ? <Flex w='100%' flexDir='row' gap='10px' padding='10px'>
                    <Image src={Reading} w='100%' h='300px' />
                    <Image src={Reading} w='100%' h='300px' />
                    <Image src={Reading} w='100%' h='300px' />
                </Flex> : <Flex w='100%' justifyContent='center' alignItems='center' padding='10px'><Image src={Reading} w={['90%', '80%']} /></Flex>}
                <Flex flexDir={['column', 'column', 'row']} gap={['30px', '50px', '100px']} w='100%' justifyContent='center' alignItems='flex-start' padding={['20px', '30px', '50px']}>
                    <Flex flexDir='column' gap='30px'>
                        <Text> <b> Naziv knjige: </b> {book.name}</Text>
                        <Text> <b> Autor: </b> {book.author.first_name} {book.author.last_name}</Text>
                        <Text> <b> Očuvanost: </b> {book.preservation_level}</Text>
                        {book.for_exchange && <Text fontWeight='bold' w="50%">Razmjena</Text>}
                        {book.for_sale && <Text fontWeight='bold'>Prodaja</Text>}
                        {book.price && <Stat> <StatLabel>Cijena</StatLabel><StatNumber>20&euro;</StatNumber></Stat>}


                    </Flex>
                    <Flex flexDir='column' gap='30px' w={['100%', '70%', '60%', '40%', '30%']}>
                        <Text> <b>Vlasnik:</b> {book.original_owner.first_name} {book.original_owner.last_name} </Text>
                        <Text> <b>Grad: </b> {book.original_owner.city}</Text>
                        <Text> <b>E-mail:</b> {book.original_owner.email} </Text>
                        <Flex flexDir={['row']} gap='10px' justifyContent='center' w='100%'>
                            {parseInt(userId) !== book.original_owner.id && <Button w={['50%']} bgColor='button.normal'
                                color='white'
                                fontWeight='bold'
                                fontSize={['13px', 'md']}
                                _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }} onClick={onToggle}>
                                Pošalji ponudu
                            </Button>}
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
                <Flex w='100%' minH='50vh' flexDirection='column' alignItems='center' gap='10px' padding={['10px', '20px', '30px', '40px']}>
                    < Text fontWeight='bold' fontSize='3xl' > Pošalji ponudu:</Text>
                    <form style={{ border: '1px solid black', padding: '50px', borderRadius: "20px" }} onSubmit={() => { window.alert('Ponuda Poslata') }} >
                        <FormControl w='100%' h='auto'>
                            <FormLabel htmlFor='nazivKnjige'>Naziv knjige:</FormLabel>
                            <Input id='nazivKnjige' type='text' isRequired placeholder='Naziv knjige' onChange={handleChange} name="name"></Input>
                            <FormLabel htmlFor='autor' marginTop="20px">Autor:</FormLabel>
                            <Input id='autor' type='text' isRequired placeholder='Autor' onChange={handleChange} name="author"></Input>
                            <FormLabel htmlFor='zanr' marginTop="20px">Žanr</FormLabel>
                            <Input id='zanr' type='text' isRequired placeholder='Žanr' onChange={handleChange} name="genre"></Input>
                            <FormLabel htmlFor='edicija' marginTop="30px">Naziv knjige:</FormLabel>
                            <Input id='edicija' type="number" placeholder='Edicija' onChange={handleChange} name="edition"></Input>
                            <FormLabel marginTop='20px'>Očuvanost Knjige:</FormLabel>
                            <Slider defaultValue={5} min={0} max={10} step={1} onChangeEnd={(val) => { setData(prevData => ({ ...prevData, "preservation_level": `${val}` })); }} name="preservation_level">
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
                                type='submit'
                                _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }} marginTop='30px' float='right'>Pošalji</Button>
                        </FormControl>
                    </form>
                </Flex >
            </Collapse>

        </Flex > : <Flex w='100%' minHeight='80vh' justifyContent='center' marginTop='50px'><Text fontWeight='bold' fontSize={['lg', 'xl', '2xl', '3xl']}>Učitavanje...</Text></Flex>
        }</>);
}

export default SinglePost;