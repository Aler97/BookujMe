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
    import { useForm } from "react-hook-form";


const Login=()=>{
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
   
   const { register, handleSubmit, formState: { errors } } = useForm();
  
   const onSubmit = (data)=>{
       console.log(data);
       data.preventDefault();
   };
  
    return(<Center><Box w='400px'
    h='auto' 
    bg='#89D0CA'
    boxShadow='md' 
    rounded='lg' 
    padding='5%' 
   >
       <Text fontSize='3xl' align='center'>Bookuj.me</Text>
       <br />
       
       <form action="submit" h='auto' onSubmit={handleSubmit(onSubmit)}>
           <Stack spacing={3}>
           
       <FormControl isRequired>
       <InputGroup>
               <InputLeftElement children={<EmailIcon />} />
       <Input type='email' placeholder='email' backgroundColor='white'/>
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
      />
      
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Sakrij' : 'Prikazi'}
        </Button>
      </InputRightElement>
      
        </InputGroup>
        
        {errors.password &&<p >{errors.password.message}</p>}
      
       <Button type='submit' boxShadow='sm' _hover={{boxShadow:'md'} } >Log in!</Button>
       </Stack>

   </form>
   </Box>
   </Center>);
}
export default Login;
