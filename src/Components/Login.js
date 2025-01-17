import React, { useContext, useState } from 'react';
import {
    Box,
    Input,
    Stack,
    Center,
    InputLeftElement,
    InputGroup,
    Button,
    InputRightElement,
    FormControl,
    Text,
    Link,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogCloseButton,
    AlertDialogBody,
    AlertDialogFooter,
    useDisclosure
} from '@chakra-ui/react';
import {
    EmailIcon
} from '@chakra-ui/icons'
import { useForm } from "react-hook-form";
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../helpers/AuthContext';
import { UserIdContext } from '../helpers/userIdContext';
import axios from 'axios';




const Login = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { setIsLoggedIn } = useContext(AuthContext);
    const { setUserId } = useContext(UserIdContext);
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""

    })
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const { register, formState: { errors } } = useForm();



    function onSubmit(e) {
        e.preventDefault();
        axios.post("https://api.bookuj.ml/login/", data)
            .then(function (response) {
                setIsLoggedIn(response.data.access);
                setUserId(response.data.user_id);
                localStorage.setItem('token', response.data.access);
                localStorage.setItem('id', response.data.user_id);
                navigate('/');
            }).catch((error) => {
                onOpen();
            })

    };

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)

    }

    return (<Center w='100%' h={['400px', '400px', '500px', '600px']} mb='500px'><Center w='100%'><Box w={['95%', '80%', '60%', '35%']}
        h='auto'
        bg='#89D0CA'
        boxShadow='md'
        rounded='lg'
        padding='5%'
    >
        <Text fontSize='3xl' align='center'>Bookuj.me</Text>
        <br />

        <form action="submit" h='auto' onSubmit={onSubmit}>
            <Stack spacing={3}>

                <FormControl isRequired>
                    <InputGroup>
                        <InputLeftElement children={<EmailIcon />} />
                        <Input type='email' placeholder='email' backgroundColor='white'
                            id="email"
                            value={data.email}
                            onChange={(e) => handle(e)} />
                    </InputGroup>
                </FormControl>




                <InputGroup>

                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Unesi Lozinku'
                        backgroundColor='white'
                        {...register("password", {
                            required: "Please enter Password!",
                            minLength: { value: 8, message: "Too Short! It needs to be at least 8 characters long!" }

                        })}
                        id="password"
                        value={data.password}
                        onChange={(e) => handle(e)} />

                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Sakrij' : 'Prikaži'}
                        </Button>
                    </InputRightElement>

                </InputGroup>

                {errors.password && <p >{errors.password.message}</p>}

                <Button type='submit' boxShadow='sm' _hover={{ boxShadow: 'md' }} >Uloguj Se</Button>
            </Stack>
            <Text marginTop='15px' float='right' fontWeight='thin'>Ako nemate nalog <Link as={ReactLink} to='/registracija' fontWeight='semibold'>Registrujte se</Link></Text>
        </form>
    </Box>
    </Center>
        <AlertDialog
            motionPreset='slideInBottom'
            onClose={onClose}
            isOpen={isOpen}
            isCentered
        >
            <AlertDialogOverlay />

            <AlertDialogContent>
                <AlertDialogHeader>Greška</AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>
                    Došlo je do greške pri prijavljivanju...
                </AlertDialogBody>
                <AlertDialogFooter>
                    <Button bgColor='button.normal'
                        color='white'
                        fontWeight='bold'
                        _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }} ml={3} onClick={onClose}>
                        Ok
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </Center>);
}
export default Login;
