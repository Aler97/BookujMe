import React from 'react';
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
    Text
} from '@chakra-ui/react';
import ProfilSidebar from './ProfilSidebar';


function Profil() {

    const { isOpen, onOpen, onClose } = useDisclosure();


    return (<Flex w='100%' flexDirection='column' alignItems='center'>

        <ProfilSidebar />
        <Flex w={['100%', '100%', '90%', '80%', '70%', '60%']} h='80vh' flexDirection='column' gap='30px' alignItems='flex-start' padding={['60px 30px', '40px', '60px', '100px 200px']}>
            <b>Ime:</b>
            <b>Prezime:</b>
            <b>Grad:</b>
            <b>E-mail:</b>
            <Flex justifyContent='space-between' w={['100%', '80%', '50%', '60%', '50%']} alignItems='center' alignSelf={['center', 'center', 'center', 'center']} marginTop='40px'>
                <Button width='48%' bgColor='button.normal'
                    color='white'
                    fontWeight='bold'
                    _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }}
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
                            <Button bgColor='red' color='white' _hover={{ bgColor: 'darkred', color: 'white' }} _active={{ bgColor: 'darkred', color: 'white' }} mr={3} onClick={onClose}>
                                Potvrdi
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
        </Flex>


    </Flex>);
}

export default Profil;