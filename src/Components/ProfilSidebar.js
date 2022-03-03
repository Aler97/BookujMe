import { useContext } from 'react';
import { Link, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { RiAccountBoxLine } from 'react-icons/ri';
import { GiBookshelf } from 'react-icons/gi';
import { GoBook } from 'react-icons/go';
import { UserIdContext } from '../helpers/userIdContext';

function ProfilSidebar() {

    const { userId } = useContext(UserIdContext);

    return (
        <Flex w='100%' justifyContent='center' alignItems='center' flexDirection={['column', 'column', 'row']} gap={[0, 0, '10px']}>
            <Link as={NavLink} to={`/profil/${userId}`} bgColor='brand.normal' color='white' padding={['5px', '10px', '30px']} w='100%' display='flex' justifyContent='center' fontWeight='bold' alignItems='center' gap={['3px', '5px', '8px']} _hover={{ textDecoration: 'none' }} _activeLink={{ bgColor: 'white', border: '1px solid brand.normal', color: 'brand.normal' }}><RiAccountBoxLine /> Moj Podaci</Link>
            <Link as={NavLink} to={`/moji-oglasi/${userId}`} bgColor='brand.normal' color='white' padding={['5px', '10px', '30px']} w='100%' display='flex' justifyContent='center' fontWeight='bold' alignItems='center' gap={['3px', '5px', '8px']} _hover={{ textDecoration: 'none' }} _activeLink={{ bgColor: 'white', border: '1px solid brand.normal', color: 'brand.normal' }} ><GiBookshelf /> Moji Oglasi</Link>
            <Link as={NavLink} to={`/moje-ponude/${userId}`} bgColor='brand.normal' color='white' padding={['5px', '10px', '30px']} w='100%' display='flex' justifyContent='center' fontWeight='bold' alignItems='center' gap={['3px', '5px', '8px']} _hover={{ textDecoration: 'none' }} _activeLink={{ bgColor: 'white', border: '1px solid brand.normal', color: 'brand.normal' }} ><GoBook /> Moje Ponude</Link>
        </Flex>);
}

export default ProfilSidebar;