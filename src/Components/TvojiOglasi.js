import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import { UserIdContext } from "../helpers/userIdContext";
import ApiCall from "../service/ApiCall";
import Oglas from "./Oglas";
import ProfilSidebar from "./ProfilSidebar";



function TvojiOglasi() {
    const { setIsLoggedIn } = useContext(AuthContext);
    const { setUserId } = useContext(UserIdContext);
    const navigate = useNavigate();
    const [myBooks, setMyBooks] = useState([]);


    const logOut = () => {
        setIsLoggedIn(false);
        setUserId('id');
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        navigate('/prijavljivanje')
    }
    useEffect(() => {
        ApiCall.get('/books/my/', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then(response => {
                setMyBooks(response.data);
            })
            .catch(error => {
                if (401 === error.response.status) {
                    logOut();
                } else {
                    window.alert('Došlo je do greške ')
                }
            })
    }, [])


    return (
        <Flex w='100%' flexDirection='column' justifyContent='space-start' gap='50px'>
            <ProfilSidebar />
            <Box w='100%' minH='80vh'>
                <Grid w='100%' templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr', 'repeat(4, 1fr)']} padding={['30px', ' 20px', ' 30px', '40px']} gap='10px' >
                    {myBooks.length > 0 ? myBooks.map(book => {
                        return (<Oglas key={book.id} id={book.id} name={book.name}
                            author_firstname={book.author.first_name}
                            author_lastname={book.author.last_name}
                            preservation_level={book.preservation_level}
                            genre={book.genre} />)
                    })
                        : <Flex w='100%' minHeight='80vh' justifyContent='center' marginTop='50px'>
                            <Text fontWeight='bold' fontSize={['lg', 'xl', '2xl', '3xl']}>Učitavanje...</Text>
                        </Flex>}

                </Grid>
            </Box>

        </Flex>);
}

export default TvojiOglasi;