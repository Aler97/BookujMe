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
    Checkbox,
    Button,
} from '@chakra-ui/react'
import React from 'react';

function PostaviOglas() {
    return (
        <Flex w='100%' minH='70vh' marginTop={['40px', '60px', '100px']} flexDirection='column' alignItems='center' gap='10px' >
            <Text fontWeight='bold' fontSize='3xl'>Postavi Oglas:</Text>
            <FormControl w={['90%', '80%', '70%', '60%', '50%']} border='1px solid black' padding={['10px', '20px', '30px', '40px', '80px']} rounded='lg'>
                <FormLabel htmlFor='nazivKnjige'>Naziv knjige:</FormLabel>
                <Input id='nazivKnjige' type='text' isRequired placeholder='Naziv knjige'></Input>
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
                <Stack spacing={5} direction='row' marginTop='25px'>
                    <Checkbox value='razmjena' colorScheme='teal' defaultChecked>Razmjena</Checkbox>
                    <Checkbox value='prodaja' colorScheme='teal'>
                        Prodaja
                    </Checkbox>
                </Stack>
                <FormLabel htmlFor='foto' marginTop='30px'>Priložite do 3 fotografije:</FormLabel>
                <Input type='file' multiple id='foto' isRequired padding='6px' accept='image/*'></Input>
                <Button bgColor='button.normal'
                    color='white'
                    fontWeight='bold'
                    _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }} marginTop='30px' float='right'>Postavi Oglas</Button>
            </FormControl>
        </Flex >);
}

export default PostaviOglas;