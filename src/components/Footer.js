import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';


function Footer() {


    return (<Box bgColor='brand.normal' w='100%' h={['145px', '150px', '250px', '357px']} px={['10px', '20px', '200px']} py={['7px', '10px', '30px']} position='relative' >
        <Flex direction='column' gap={['10px', '10px', '20px', '30px']}>
            <Text fontSize={['15px', '20px', '25px', '30px']}><span style={{ fontWeight: 'bold' }}>Bookuj</span>.me</Text>
            <Flex dir='row' gap={['15px', '20px', '80px']}>
                <Flex fontSize={['12px', '15px', '20px']} gap={['5px', '10px', '10px', '30px']} direction='column'>
                    <Link as={ReactLink} to='/'>Početna Strana</Link>
                    <Link as={ReactLink} to='/ONama'>O Nama</Link>
                    <Link as={ReactLink} to='/Kontakt'>Kontakt</Link>
                </Flex>
                <Flex fontSize={['12px', '15px', '20px']} gap={['5px', '10px', '10px', '30px']} direction='column'>
                    <Link as={ReactLink} to='/' >Svi Oglasi</Link>
                    <Link >Tvoj Profil</Link>
                    <Link >Registruj Se</Link>
                </Flex>
            </Flex>
        </Flex>
        <Text position='absolute' right='10px' bottom='10px' fontSize={['12px', '15px', '20px']}>Copyright © 2022 Bookuj.me</Text>

    </Box >);
}

export default Footer;