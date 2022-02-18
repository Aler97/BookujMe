import React, { useState } from 'react';
import {
    VStack, Link, useMediaQuery, useDisclosure, Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    IconButton,
    Flex,
    Button,
    Grid
} from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
import Oglas from './Oglas';

function Profil() {
    const [toShow, setToShow] = useState('podaci');

    const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (<Flex minHeight='70vh'>
        {isLargerThan900 ?
            <VStack position='sticky' left='0' w={['20%']} height='100vh' bgColor='brand.normal' justifyContent='flex-start' gap='10px' paddingTop='200px' borderRight='1px solid black' borderBottom='1px solid black'>
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
                                <Link onClick={() => { setToShow('podaci'); onClose() }} >Tvoj Podaci</Link>
                                <Link onClick={() => { setToShow('oglasi'); onClose() }} >Tvoji Oglasi</Link>
                                <Link onClick={() => { setToShow('ponude'); onClose() }} >Tvoje Ponude</Link>
                                <Link color='red' fontWeight='bold'>Izbriši Nalog</Link>
                            </Flex>

                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </>}

        {toShow === 'podaci' ? <Flex w={['95%', '90%', '80%']} flexDirection='column' gap='20px' justifyContent='flex-start' alignItems='flex-start' padding={['10px', '40px', '60px', '100px']}>
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
            : toShow === 'oglasi' ? <Grid w={['100%', '90%', '80%']} templateColumns={['1fr', '1fr 1fr', '1fr 1fr', 'repeat(3, 1fr)']} padding={['10px', ' 20px', ' 30px', '40px']} gap='10px'>
                <Oglas />
                <Oglas />
                <Oglas />
                <Oglas />
                <Oglas />
            </Grid>
                : <Grid w={['100%', '90%', '80%']} templateColumns={['1fr', '1fr 1fr', '1fr 1fr', 'repeat(3, 1fr)']} padding={['10px', ' 20px', ' 30px', '40px']} gap='10px'>
                    <Oglas />
                    <Oglas />
                    <Oglas />
                    <Oglas />
                    <Oglas />
                    <Oglas />
                    <Oglas />
                    <Oglas />
                    <Oglas />
                    <Oglas />
                </Grid>}

    </Flex>);
}

export default Profil;