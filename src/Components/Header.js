import React, { useContext } from 'react';
import {
    Box, Image, Flex, Link, Spacer, Button, useMediaQuery, IconButton, Drawer, DrawerBody, DrawerContent, DrawerCloseButton, useDisclosure, Menu, MenuButton, MenuList, MenuItem
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink as ReactLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Profile from '../assets/profile.png';
import SmallLogo from '../assets/smallLogo.png';
import { AuthContext } from '../helpers/AuthContext';
import { UserIdContext } from '../helpers/userIdContext';


function Header() {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const { userId, setUserId } = useContext(UserIdContext);

    const navigate = useNavigate();
    const [isLargerThan850] = useMediaQuery('(min-width: 850px)');
    const [isLargerThan450] = useMediaQuery('(min-width: 450px)');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef();

    const logOut = () => {
        setIsLoggedIn(false);
        setUserId('');
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        navigate('/')
    }

    return (<Box w='100%' h={['70px', '80px', '90px', '100px']} display='flex' flexDir='row' justifyContent={'space-between'} alignItems='center' px={['20px', '40px']} borderBottom='1px solid black' >
        {isLargerThan450 ? <Link as={ReactLink} to='/'><Image src={Logo} w={{ base: '110px', sm: '130px', md: '140px', lg: '200px' }} h={["50px", '60px', '70px']}></Image></Link> : <Link as={ReactLink} to='/'><Image src={SmallLogo} w='40px' h='40px'></Image></Link>}
        {isLargerThan850 ? <Flex w={{ md: '60%', xl: '45%' }} justifyContent='space-evenly' alignItems='center'>
            <Link fontSize={[20]} _hover={{ textDecoration: 'none', borderBottom: '1px solid black' }} as={ReactLink} to='/' _activeLink={{ fontWeight: 'extrabold' }}>Početna</Link>
            <Spacer />
            <Link fontSize={[20]} _hover={{ textDecoration: 'none', borderBottom: '1px solid black' }} as={ReactLink} to='/ONama' _activeLink={{ fontWeight: 'extrabold' }}>O Nama</Link>
            <Spacer />
            <Link fontSize={[20]} _hover={{ textDecoration: 'none', borderBottom: '1px solid black' }} as={ReactLink} to='/Kontakt' _activeLink={{ fontWeight: 'extrabold' }}>Kontakt</Link>
            <Spacer />
            {!isLoggedIn ? <Link as={ReactLink} to='/Prijavljivanje'><Button border='1px solid black' fontWeight='light' bgColor='transparent' borderRadius='0' fontSize={20} py='6' _hover={{ boxShadow: '0 0 10px black' }} _active={{ transform: 'scale(0.95)' }} >Prijavi Se</Button></Link>
                :
                <Menu>
                    <MenuButton
                        as={Button}
                        bgImage={Profile}
                        bgSize='contain'
                        bgColor='white'
                        _hover={{ bgImage: { Profile }, bgSize: 'containe' }}
                        _active={{ bgImage: { Profile }, bgSize: 'containe' }}

                    />
                    <MenuList>
                        <Link as={ReactLink} to={`/Profil/${userId}`} _hover={{ textDecoration: 'none' }}>
                            <MenuItem>
                                Profil
                            </MenuItem>
                        </Link>
                        <Link as={ReactLink} to='/PostaviOglas' _hover={{ textDecoration: 'none' }}>
                            <MenuItem>
                                Postavi Oglas
                            </MenuItem>
                        </Link>
                        <MenuItem color='red' fontWeight='semibold' onClick={logOut}>
                            Odjavi Se
                        </MenuItem>
                    </MenuList>
                </Menu>}

        </Flex> :
            <Flex justifyContent='space-evenly' alignItems='center' gap='5px'>
                {!isLoggedIn ? <Link as={ReactLink} to='/Prijavljivanje' ><Button border='1px solid black' fontWeight='light' bgColor='transparent' borderRadius='0' fontSize={12} _hover={{ boxShadow: '0 0 10px black', textDecoration: 'none' }} _active={{ transform: 'scale(0.95)' }} >Prijavi Se</Button></Link>
                    : <Menu>
                        <MenuButton
                            as={Button}
                            bgImage={Profile}
                            bgSize='contain'
                            bgColor='white'
                            _hover={{ bgImage: { Profile }, bgSize: 'containe' }}
                            _active={{ bgImage: { Profile }, bgSize: 'containe' }}

                        />
                        <MenuList>
                            <Link as={ReactLink} to={`/Profil/${userId}`} _hover={{ textDecoration: 'none' }}>
                                <MenuItem>
                                    Profil
                                </MenuItem>
                            </Link>
                            <Link as={ReactLink} to='/PostaviOglas' _hover={{ textDecoration: 'none' }}>
                                <MenuItem>
                                    Postavi Oglas
                                </MenuItem>
                            </Link>
                            <MenuItem color='red' fontWeight='semibold' onClick={logOut}>
                                Odjavi Se
                            </MenuItem>
                        </MenuList>
                    </Menu>
                }
                <IconButton ref={btnRef} bgColor='brand.normal' onClick={onOpen} aria-label='Menu' icon={<GiHamburgerMenu />} _hover={{ bgColor: 'brand.normalt' }} _active={{ bgColor: 'brand.normal' }} />

                <Drawer
                    isOpen={isOpen}
                    placement='top'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >

                    <DrawerContent>
                        <DrawerCloseButton />


                        <DrawerBody display='flex' flexDirection='column' justifyContent='flex-start' alignItems='center' mt='40px' gap='10px'>
                            <Link fontSize={[20]} _hover={{ textDecoration: 'none' }} onClick={onClose} as={ReactLink} to='/' >Početna</Link>
                            <Link fontSize={[20]} _hover={{ textDecoration: 'none' }} onClick={onClose} as={ReactLink} to='/ONama' >O Nama</Link>
                            <Link fontSize={[20]} _hover={{ textDecoration: 'none' }} onClick={onClose} as={ReactLink} to='/Kontakt' >Kontakt</Link>
                        </DrawerBody>


                    </DrawerContent>
                </Drawer>
            </Flex>
        }
    </Box >);
}

export default Header;