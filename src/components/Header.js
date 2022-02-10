import React, { useState } from 'react';
import {
    Box, Image, Flex, Link, Spacer, Button, useMediaQuery, IconButton, Drawer, DrawerBody, DrawerContent, DrawerCloseButton, useDisclosure
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link as ReactLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Profile from '../../assets/profile.png';
import SmallLogo from '../../assets/smallLogo.png';
function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [isLargerThan850] = useMediaQuery('(min-width: 850px)');
    const [isLargerThan450] = useMediaQuery('(min-width: 450px)');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef();

    return (<Box w='100%' h={['70px', '80px', '90px', '100px']} display='flex' flexDir='row' justifyContent={'space-between'} alignItems='center' px={['20px', '40px']} borderBottom='1px solid black'>
        {isLargerThan450 ? <Image src={Logo} w={{ base: '110px', sm: '130px', md: '140px', lg: '200px' }} h={["50px", '60px', '70px']}></Image> : <Image src={SmallLogo} w='40px' h='40px'></Image>}
        {isLargerThan850 ? <Flex w={{ md: '60%', xl: '45%' }} justifyContent='space-evenly' alignItems='center'>
            <Link fontSize={[20]} _hover={{ textDecoration: 'none', borderBottom: '1px solid black' }} as={ReactLink} to='/'>Početna</Link>
            <Spacer />
            <Link fontSize={[20]} _hover={{ textDecoration: 'none', borderBottom: '1px solid black' }} as={ReactLink} to='/ONama'>O Nama</Link>
            <Spacer />
            <Link fontSize={[20]} _hover={{ textDecoration: 'none', borderBottom: '1px solid black' }} as={ReactLink} to='/Kontakt'>Kontakt</Link>
            <Spacer />
            {!isLoggedIn ? <Button as='a' href='#' border='1px solid black' fontWeight='light' bgColor='transparent' borderRadius='0' fontSize={20} py='6' _hover={{ bgColor: 'brand.normal' }} _active={{ bgColor: 'brand.normal', transform: 'scale(0.95)' }} onClick={() => { setIsLoggedIn(true) }}>Prijavi Se</Button>
                :
                <Link><Image src={Profile} w='60px' h='60px'></Image></Link>}

        </Flex> :
            <Flex justifyContent='space-evenly' alignItems='center' gap='5px'>
                {!isLoggedIn ? <Button as='a' href='#' border='1px solid black' fontWeight='light' bgColor='transparent' borderRadius='0' fontSize={12} _hover={{ bgColor: 'brand.normal' }} _active={{ bgColor: 'brand.normal', transform: 'scale(0.95)' }}>Prijavi Se</Button>
                    : <Link><Image src={Profile} w='30px' h='30px'></Image></Link>}
                <IconButton ref={btnRef} bgColor='brand.normal' onClick={onOpen} aria-label='Menu' icon={<GiHamburgerMenu />} _hover={{ bgColor: 'brand.normalt' }} _active={{ bgColor: 'brand.normal' }} />

                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >

                    <DrawerContent>
                        <DrawerCloseButton />


                        <DrawerBody display='flex' flexDirection='column' justifyContent='flex-start' alignItems='center' mt='40px' gap='10px'>
                            <Link fontSize={[20]} _hover={{ textDecoration: 'none', borderBottom: '1px solid black' }} as={ReactLink} to='/' >Početna</Link>
                            <Link fontSize={[20]} _hover={{ textDecoration: 'none', borderBottom: '1px solid black' }} as={ReactLink} to='/ONama' >O Nama</Link>
                            <Link fontSize={[20]} _hover={{ textDecoration: 'none', borderBottom: '1px solid black' }} as={ReactLink} to='/Kontakt' >Kontakt</Link>
                        </DrawerBody>


                    </DrawerContent>
                </Drawer>
            </Flex>}
    </Box>);
}

export default Header;