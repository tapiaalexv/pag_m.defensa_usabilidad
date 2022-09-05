import type {NextPage} from 'next'
import Layout from "./components/layout";
import {Box, Container} from "@mui/material";


const Home: NextPage = () => {

    return (
        <Layout>
            <Box sx={{border: 'solid 5px purple',padding:'0 1.5em 0 1.5em'}}>
                <h1>Servicios</h1>
            </Box>
            <Box sx={{border: 'solid 5px orange',padding:'0 1.5em 0 1.5em'}}>
                <h1>Destacado</h1>
            </Box>
        </Layout>
    )
}

export default Home
