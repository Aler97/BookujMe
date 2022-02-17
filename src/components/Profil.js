import React, { useState } from 'react';
import {
    VStack, Link, Box, useMediaQuery, useDisclosure, Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    IconButton,
    Flex,
    Button
} from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'

function Profil() {
    const [toShow, setToShow] = useState('podaci');

    const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (<Box position='relative' h='70vh'>
        {isLargerThan900 ?
            <VStack position='absolute' left='0' w={['20%']} bgColor='brand.normal' h='130%' justifyContent='flex-start' gap='10px' paddingTop='200px' borderRight='1px solid black'>
                <Link onClick={() => { setToShow('podaci') }} >Tvoj Podaci</Link>
                <Link onClick={() => { setToShow('oglasi') }} >Tvoji Oglasi</Link>
                <Link onClick={() => { setToShow('ponude') }} >Tvoje Ponude</Link>
                <Link color='red' fontWeight='bold'>Izbriši Nalog</Link>
            </VStack> : <>
                <IconButton aria-label='drawer' icon={<ArrowRightIcon />} bgColor='white' onClick={onOpen} mt='10px' _hover={{ bgColor: 'white' }}>
                    Open
                </IconButton>
                <Drawer
                    isOpen={isOpen}
                    placement='left'
                    onClose={onClose}

                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody bgColor='brand.normal' >
                            <Flex justifyContent='center' alignItems='center' flexDirection='column' paddingTop='200px' gap='10px'>
                                <Link onClick={() => { setToShow('podaci') }} >Tvoj Podaci</Link>
                                <Link onClick={() => { setToShow('oglasi') }} >Tvoji Oglasi</Link>
                                <Link onClick={() => { setToShow('ponude') }} >Tvoje Ponude</Link>
                                <Link color='red' fontWeight='bold'>Izbriši Nalog</Link>
                            </Flex>

                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </>}

        {toShow === 'podaci' ? <Flex position='absolute' right='0' w={['95%', '90%', '80%']} flexDirection='column' gap='20px' justifyContent='flex-start' alignItems='flex-start' padding={['10px', '40px', '60px', '100px']}>
            <b>Ime:</b>
            <b>Prezime:</b>
            <b>Grad:</b>
            <b>E-mail:</b>
            <Button width={['40%', '30%', '20%', '13%']} bgColor='button.normal'
                color='white'
                fontWeight='bold'
                alignSelf='center'
                marginTop='20px'
                _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }}
            >Izmijeni</Button>
        </Flex>
            : toShow === 'oglasi' ? <Box position='absolute' right='0' w={['95%', '90%', '80%']}>Oglasi</Box>
                : <Box position='absolute' right='0' w={['95%', '90%', '80%']}>Ponude</Box>}

    </Box>);
}

export default Profil;