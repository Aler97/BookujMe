import { Box, Flex, Grid } from "@chakra-ui/react";
import Oglas from "./Oglas";
import ProfilSidebar from "./ProfilSidebar";



function TvojiOglasi() {
    return (
        <Flex w='100%' flexDirection='column'>
            <ProfilSidebar />
            <Box w='100%' minH='80vh'>
                <Grid w='100%' templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr', 'repeat(4, 1fr)']} padding={['30px', ' 20px', ' 30px', '40px']} gap='10px' >
                    <Oglas />

                </Grid>
            </Box>

        </Flex>);
}

export default TvojiOglasi;