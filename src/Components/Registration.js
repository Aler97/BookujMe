import React from 'react';
import {Box,
    Input,
    Stack,
    Center, 
    InputLeftElement,
     InputGroup,
     Button ,
     InputRightElement,
    FormControl,
Text}from '@chakra-ui/react';
import { PhoneIcon, 
    InfoIcon, 
    EmailIcon,
    ViewOffIcon ,
    ViewIcon} from '@chakra-ui/icons'


const Reg=() =>{
    const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

 const SubmitHandler=(e)=>{
     e.preventDefault();
 }

    return (<Center><Box w='400px'
     h='auto' 
     bg='#89D0CA'
     boxShadow='md' 
     rounded='lg' 
     padding='5%' 
    >
        <Text fontSize='3xl' align='center'>Bookuj.me</Text>
        <br />
        
        <form action="submit" h='auto'>
            <Stack spacing={3}>
            <FormControl isRequired>
                <InputGroup>
                <InputLeftElement children={<InfoIcon />} />
        <Input type='name' placeholder='Ime' area-lable='Ime' backgroundColor='white'/>
        
        </InputGroup>
        </FormControl>
        <FormControl isRequired>
        <InputGroup>
                <InputLeftElement children={<InfoIcon />} />
        <Input type='name' placeholder='Prezime' area-lable='Prezime'backgroundColor='white' />
        </InputGroup>
        </FormControl>
        <FormControl isRequired>
        <InputGroup>
                <InputLeftElement children={<InfoIcon />} />
        <Input type='text' placeholder='Grad' backgroundColor='white'/>
        </InputGroup>
        </FormControl>
        <FormControl isRequired>
        <InputGroup>
                <InputLeftElement children={<EmailIcon />} />
        <Input type='email' placeholder='email' backgroundColor='white'/>
        </InputGroup>
        </FormControl>
        <FormControl isRequired>
        <InputGroup>
                <InputLeftElement children={<PhoneIcon />} />
        <Input type='number' placeholder='Broj telefona' backgroundColor='white' />
        </InputGroup>
        </FormControl>
        <FormControl isRequired>
    
        <InputGroup>
        
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Unesi Lozinku'
        backgroundColor='white'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Sakrij' : 'Prikazi'}
        </Button>
      </InputRightElement>
        </InputGroup>
        </FormControl>
        <Button type='submit' boxShadow='sm' _hover={{boxShadow:'md'}} onSubmit={SubmitHandler} >Sign up!</Button>
        </Stack>

    </form>
    </Box>
    </Center>);
}
 
export default Reg;