import React, { useState } from 'react';
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
  useDisclosure,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialog
} from '@chakra-ui/react';
import {
  InfoIcon,
  EmailIcon
} from '@chakra-ui/icons'
import { useForm } from "react-hook-form";
import { Link as ReactLink } from 'react-router-dom';
import Axios from 'axios';

const Reg = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const { register, formState: { errors } } = useForm();
  const [isSubmit, setIsSubmit] = useState(false);


  const url = "https://api.bookuj.ml/users/"
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    city: ""

  })
  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)

  }

  function onSubmit(e) {
    e.preventDefault();
    Axios.post(url,
      data)
      .then(res => {
        setIsSubmit(true);
      }).catch((error) => {
        onOpen();
      })
  };

  return (<Center w='100%' h='800px' mb='200px'><Center w='100%'><Box w={['95%', '80%', '70%', '50%', '35%']}
    h='auto'
    bg='brand.normal'
    boxShadow='md'
    rounded='lg'
    padding='5%'

  >
    <Text fontSize='3xl' align='center'>Bookuj.me</Text>
    <br />
    {isSubmit ? (<><Text fontSize='2xl'>Uspjesno ste Registrovani!!! </Text><Text>Ulogujte se <Link as={ReactLink} to='/Prijavljivanje' fontWeight='semibold'>ovdje</Link></Text></>
    ) : (
      <form action="submit" h='auto' onSubmit={(e) => onSubmit(e)}>
        <Stack spacing={3}>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<InfoIcon />} />
              <Input type='name'
                placeholder='Ime'
                area-lable='Ime'
                backgroundColor='white'
                {...register("Firstname")}
                onChange={(e) => handle(e)}
                id="first_name"
                value={data.first_name} />

            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<InfoIcon />} />
              <Input type='name'
                placeholder='Prezime'
                area-lable='Prezime'
                backgroundColor='white'
                {...register("Lastname")}
                onChange={(e) => handle(e)}
                id="last_name"
                value={data.last_name} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<InfoIcon />} />
              <Input type='text'
                placeholder='Grad'
                backgroundColor='white'
                {...register("City")}
                onChange={(e) => handle(e)}
                id="city"
                value={data.city} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<EmailIcon />} />
              <Input type='email'
                placeholder='email'
                backgroundColor='white'
                {...register("Email")}
                onChange={(e) => handle(e)}
                id="email"
                value={data.email} />
            </InputGroup>
          </FormControl>

          <FormControl >

            <InputGroup>

              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Unesi Lozinku'
                backgroundColor='white'
                {...register("password", {
                  required: "Please enter Password!",
                  minLength: { value: 8, message: "Prekratko! Mora da ima bar 8 karaktera!" }
                })}
                onChange={(e) => handle(e)}
                id="password"
                value={data.password}
              />

              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Sakrij' : 'Prikaži'}
                </Button>
              </InputRightElement>

            </InputGroup>
          </FormControl>
          {errors.password && <p >{errors.password.message}</p>}
          <Button type='submit'
            boxShadow='sm'
            _hover={{ boxShadow: 'md' }}
          >Registruj Se</Button>
        </Stack>

        <Text marginTop='15px' float='right'>Ako već imate nalog <Link as={ReactLink} to='/Prijavljivanje' fontWeight='semibold'>Ulogujte se</Link></Text>

      </form>)}
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
          Došlo je do greške pri registraciji...
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

export default Reg;