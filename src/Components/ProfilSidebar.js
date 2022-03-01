import { Link, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { RiAccountBoxLine } from 'react-icons/ri';
import { GiBookshelf } from 'react-icons/gi';
import { GoBook } from 'react-icons/go';

function ProfilSidebar() {
    return (
        <Flex w='100%' justifyContent='center' alignItems='center' flexDirection={['column', 'column', 'row']} gap={[0, 0, '10px']}>
            <Link as={NavLink} to='/Profil/:id' bgColor='brand.normal' color='white' padding={['5px', '10px', '30px']} w='100%' display='flex' justifyContent='center' fontWeight='bold' alignItems='center' gap={['3px', '5px', '8px']} _hover={{ textDecoration: 'none' }} _activeLink={{ bgColor: 'white', border: '1px solid brand.normal', color: 'brand.normal' }}><RiAccountBoxLine /> Tvoji Podaci</Link>
            <Link as={NavLink} to='/TvojiOglasi/:id' bgColor='brand.normal' color='white' padding={['5px', '10px', '30px']} w='100%' display='flex' justifyContent='center' fontWeight='bold' alignItems='center' gap={['3px', '5px', '8px']} _hover={{ textDecoration: 'none' }} _activeLink={{ bgColor: 'white', border: '1px solid brand.normal', color: 'brand.normal' }} ><GiBookshelf /> Tvoji Oglasi</Link>
            <Link as={NavLink} to='/TvojePonude/:id' bgColor='brand.normal' color='white' padding={['5px', '10px', '30px']} w='100%' display='flex' justifyContent='center' fontWeight='bold' alignItems='center' gap={['3px', '5px', '8px']} _hover={{ textDecoration: 'none' }} _activeLink={{ bgColor: 'white', border: '1px solid brand.normal', color: 'brand.normal' }} ><GoBook /> Tvoje Ponude</Link>
        </Flex>);
}

export default ProfilSidebar;