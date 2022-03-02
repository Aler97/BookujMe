import React, { useEffect, useState, useContext } from 'react';
import {
    Flex,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Text,
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ProfilSidebar from './ProfilSidebar';
import { UserIdContext } from '../helpers/userIdContext';
import { AuthContext } from '../helpers/AuthContext';
import axios from 'axios';



function Profil() {
    const { userId, setUserId } = useContext(UserIdContext);
    const { setIsLoggedIn } = useContext(AuthContext);
    const [editInfo, setEditInfo] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://api.bookuj.ml/users/${userId}`)
            .then(response => {
                setFirstName(response.data.first_name);
                setLastName(response.data.last_name);
                setEmail(response.data.email);
                setCity(response.data.city);
            })
    }, [userId])


    const onSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://api.bookuj.ml/users/${userId}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            },
            data: {
                first_name: firstName,
                last_name: lastName,
                email: email,
                city: city
            }
        }
        ).then(() => { setEditInfo(false) })
            .catch((error) => { console.log(error); window.location.reload() })

    }

    const deleteProfile = () => {
        axios.delete(`https://api.bookuj.ml/users/${userId}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(() => {
                setUserId('');
                setIsLoggedIn(false);
                localStorage.removeItem('token');
                localStorage.removeItem('id');
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
            })

    }

    return (<Flex w='100%' flexDirection='column' alignItems='center'>

        <ProfilSidebar />
        {!editInfo ? <Flex w={['100%', '100%', '90%', '80%', '70%', '60%']} h='80vh' flexDirection='column' gap='30px' alignItems='flex-start' padding={['60px 30px', '40px', '60px', '100px 200px']}>
            <Text fontSize={['md', 'md', 'lg', 'xl']}><b>Ime:  </b>{firstName}</Text>
            <Text fontSize={['md', 'md', 'lg', 'xl']}><b>Prezime:  </b> {lastName}</Text>
            <Text fontSize={['md', 'md', 'lg', 'xl']}><b>E-mail:  </b>{email}</Text>
            <Text fontSize={['md', 'md', 'lg', 'xl']}><b>Grad:  </b>{city}</Text>
            <Flex justifyContent='space-between' w={['100%', '80%', '50%', '60%', '50%']} alignItems='center' alignSelf={['center', 'center', 'center', 'center']} marginTop='40px'>
                <Button width='48%' bgColor='button.normal'
                    color='white'
                    fontWeight='bold'
                    _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }}
                    onClick={() => { setEditInfo(true) }}
                >Izmijeni</Button>
                <Button w='48%' bgColor='red' color='white' fontWeight='bold' padding='5px 30px' _hover={{ bgColor: 'darkred' }} _active={{ bgColor: 'darkred' }} onClick={onOpen}>Izbriši nalog</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text padding='40px' fontWeight='bold'>Da li ste sigurni da želite da izbrišete vaš nalog?</Text>
                        </ModalBody>
                        <ModalFooter>
                            <Button bgColor='red' color='white' _hover={{ bgColor: 'darkred', color: 'white' }} _active={{ bgColor: 'darkred', color: 'white' }} mr={3} onClick={deleteProfile}>
                                Potvrdi
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
        </Flex> :
            <Flex w={['100%', '100%', '90%', '80%', '70%', '60%']} h='80vh' flexDirection='column' gap='30px' alignItems='flex-start' padding={['60px 30px', '40px', '60px', '100px 200px']}>
                <form action="submit" onSubmit={(e) => onSubmit(e)} w='100%'>
                    <FormControl w='100%'>
                        <FormLabel htmlFor='ime'><b>Ime:</b></FormLabel>
                        <Input type='text' isRequired id='ime' value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                        <FormLabel htmlFor='prezime' marginTop='20px'><b>Prezime:</b></FormLabel>
                        <Input type='text' isRequired id='prezime' value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                        <FormLabel htmlFor='email' marginTop='20px' ><b>E-mail:</b></FormLabel>
                        <Input type='email' isRequired id='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <FormLabel htmlFor='grad' marginTop='20px'><b>Grad:</b></FormLabel>
                        <Input type='grad' isRequired id='grad' value={city} onChange={(e) => { setCity(e.target.value) }} />
                        <Button width='48%' bgColor='button.normal'
                            color='white'
                            fontWeight='bold'
                            _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }}
                            float='right'
                            marginTop='20px'
                            type='submit'
                        >Sačuvaj</Button>
                    </FormControl>
                </form>
            </Flex>
        }


    </Flex>);
}

export default Profil;