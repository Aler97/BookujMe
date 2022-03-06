import {
    FormControl,
    FormLabel,
    Input,
    Flex,
    Text,
    Slider,
    SliderTrack,
    Box,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Stack,
    Button,
    RadioGroup,
    Radio,
} from '@chakra-ui/react'
import React, { useState } from 'react';
import ApiCall from '../service/ApiCall';

function PostaviOglas() {
    const [data, setData] = useState({
        name: "",
        author: "",
        genre: "",
        edition: "",
        preservation_level: "5",
    });

    const [sale, setSale] = useState('false');
    const [price, setPrice] = useState('false');

    const [exchange, setExchange] = useState('true')

    const handleChange = e => {

        setData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if ((sale === 'false' && exchange === 'true') || (sale === 'false' && exchange === 'false')) {
            ApiCall.post("/books/", {
                data: {

                    name: data.name,
                    author: data.author,
                    genre: data.genre,
                    edition: data.edition,
                    preservation_level: data.preservation_level,
                    for_exchange: true,
                    for_sale: false


                }
            }
            )
        } else if (sale === 'true' && exchange === 'true') {
            ApiCall.post("/books/", {
                data: {

                    name: data.name,
                    author: data.author,
                    genre: data.genre,
                    edition: data.edition,
                    preservation_level: data.preservation_level,
                    for_exchange: false,
                    for_sale: true,
                    price: price


                }
            }
            )
        } else if (sale === 'true' && exchange === 'false') {
            ApiCall.post("/books/", {
                data: {

                    name: data.name,
                    author: data.author,
                    genre: data.genre,
                    edition: data.edition,
                    preservation_level: data.preservation_level,
                    for_sale: true,
                    price: price,
                    for_exchange: false


                }
            }
            )
        }


    }


    return (
        <Flex w='100%' minH='70vh' marginTop={['40px', '60px', '100px']} flexDirection='column' alignItems='center' gap='10px' padding={['10px', '20px', '30px', '40px', '80px']}>
            <Text fontWeight='bold' fontSize='3xl'>Postavi Oglas:</Text>
            <form style={{ border: '1px solid black', padding: '50px', borderRadius: "20px" }} onSubmit={onSubmit} >
                <FormControl w='100%' h='auto'>
                    <FormLabel htmlFor='nazivKnjige'>Naziv knjige:</FormLabel>
                    <Input id='nazivKnjige' type='text' isRequired placeholder='Naziv knjige' onChange={handleChange} name="name"></Input>
                    <FormLabel htmlFor='autor' marginTop="20px">Autor:</FormLabel>
                    <Input id='autor' type='text' isRequired placeholder='Autor' onChange={handleChange} name="author"></Input>
                    <FormLabel htmlFor='zanr' marginTop="20px">Žanr</FormLabel>
                    <Input id='zanr' type='text' isRequired placeholder='Žanr' onChange={handleChange} name="genre"></Input>
                    <FormLabel htmlFor='edicija' marginTop="20px">Naziv knjige:</FormLabel>
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
                    <Stack spacing={5} direction='column' marginTop='40px'>

                        <RadioGroup onChange={setExchange} value={exchange} >
                            <Stack direction='row'>
                                <FormLabel >Razmjena: </FormLabel>
                                <Radio colorScheme='teal' value='true'>Da</Radio>
                                <Radio colorScheme='teal' value='false'>Ne</Radio>
                            </Stack>
                        </RadioGroup>
                        <RadioGroup onChange={setSale} value={sale} >
                            <Stack direction='row' spacing={6}>
                                <FormLabel >Prodaja: </FormLabel>
                                <Radio colorScheme='teal' value='true'>Da</Radio>
                                <Radio colorScheme='teal' value='false'>Ne</Radio>
                            </Stack>
                        </RadioGroup>
                    </Stack>
                    {sale === "true" ?
                        <>
                            <FormLabel htmlFor='cijena' marginTop="30px">Cijena:</FormLabel>
                            <Input id='cijena' type="number" placeholder='Cijena' name="price" onChange={(e) => { setPrice(`${e.target.value}`) }}></Input>
                        </> :
                        <></>
                    }
                    <FormLabel htmlFor='foto' marginTop='30px'>Priložite do 3 fotografije:</FormLabel>
                    <Input type='file' multiple id='foto' isRequired padding='6px' accept='image/*'></Input>
                    <Button bgColor='button.normal'
                        color='white'
                        fontWeight='bold'
                        type='submit'
                        _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }} marginTop='30px' float='right'>Postavi Oglas</Button>
                </FormControl>
            </form>
        </Flex >);
}

export default PostaviOglas;