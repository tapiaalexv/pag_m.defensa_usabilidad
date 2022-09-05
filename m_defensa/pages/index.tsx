import type {NextPage} from 'next'
import Layout from "./components/layout";
import {Box, Container} from "@mui/material";
import React from 'react';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    ImageWithZoom,
    ButtonFirst,
    ButtonLast, DotGroup
} from 'pure-react-carousel';


const Home: NextPage = () => {

    return (
        <Layout>
            <Box sx={{border: 'solid 5px purple', padding: '0 1.5em 0 1.5em'}}>
                <h1>Servicios</h1>
            </Box>
            <Box sx={{border: 'solid 5px orange', padding: '0 1.5em 0 1.5em'}}>
                <h1>Destacado</h1>
                <CarouselProvider
                    visibleSlides={1}
                    totalSlides={3}
                    step={1}
                    naturalSlideWidth={400}
                    naturalSlideHeight={500}
                    hasMasterSpinner
                >
                    <h2>Carousel (With Master Loading Spinner)</h2>
                    <p>
                        This spinner will go away after all the images have loaded. You might want to use
                        Chrome dev tools to throttle the network connection so you can see the spinner.
                    </p>
                    <Slider>
                        <Slide index={0}>
                            <ImageWithZoom src='facebook.png'/>
                        </Slide>
                        <Slide index={1}>
                            <ImageWithZoom src='facebook.png'/>
                        </Slide>
                        <Slide index={2}>
                            <ImageWithZoom src='facebook.png'/>
                        </Slide>
                    </Slider>
                    <ButtonFirst>First</ButtonFirst>
                    <ButtonBack>Back</ButtonBack>
                    <ButtonNext>Next</ButtonNext>
                    <ButtonLast>Last</ButtonLast>
                    <DotGroup/>
                </CarouselProvider>
            </Box>
        </Layout>
    )
}

export default Home
