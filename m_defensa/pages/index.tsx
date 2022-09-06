import Layout from "./components/layout";
import {Box, Button, ButtonGroup, Container, Typography} from "@mui/material";
import React from 'react';
import {
    CarouselProvider,
    Slider,
    ButtonBack,
    ButtonNext,
    DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import CustomCardSlide from "./components/CustomCardSlide";

function Home() {
    return (
        <Layout>
            <Box sx={{padding: '0.5em 1.5em 0 1.5em'}}>
                <h1 style={{paddingBottom: '2px'}}>Servicios</h1>
                <Box sx={{background: '#527D66', display: 'flex', justifyContent: 'space-around'}}>
                    <Button
                        sx={{flexDirection: "column",}}
                        onClick={() => window.open('https://www.defensa.gob.ec/transparencia/')}
                    >
                        <img
                            src={'iconos/transparencia.svg'}
                            alt={'Servicio de transparencia'}
                            height={'75'}
                        />
                        <Typography sx={{color: 'white'}}>Transparencia</Typography>
                    </Button>

                    <Button
                        sx={{flexDirection: "column",}}
                        onClick={() => window.open('/certificados')}
                    >
                        <img
                            src={'iconos/certificados.svg'}
                            alt={'Servicio de certificados en línea'}
                            height={'75'}
                        />
                        <Typography sx={{color: 'white'}}>Certificados en línea</Typography>
                    </Button>

                    <Button
                        sx={{flexDirection: "column",}}
                        onClick={() => window.open('https://registro.midena.gob.ec/ContactoCiudadano/?ruta=ContactoCiudadano')}
                    >
                        <img
                            src={'iconos/contacto.svg'}
                            alt={'Servicio de contacto ciudadano'}
                            height={'75'}
                        />
                        <Typography sx={{color: 'white'}}>Contacto Ciudadano</Typography>
                    </Button>

                    <Button
                        sx={{flexDirection: "column",}}
                        onClick={() => window.open('/noticias')}
                    >
                        <img
                            src={'iconos/noticias.svg'}
                            alt={'Noticias'}
                            height={'75'}
                        />
                        <Typography sx={{color: 'white'}}>Noticias</Typography>
                    </Button>


                    <Button
                        sx={{flexDirection: "column",}}
                        onClick={() => window.open('https://mail.midena.gob.ec/zimbra/')}
                    >
                        <img
                            src={'iconos/correo.svg'}
                            alt={'Servicio de correo zimbra'}
                            height={'75'}
                        />
                        <Typography sx={{color: 'white'}}>Correo Zimbra</Typography>
                    </Button>

                </Box>
            </Box>

            <Box sx={{padding: '1em 1.5em 1em 1.5em'}}>
                <Box>
                    <h1>Destacado</h1>
                </Box>

                <Container sx={{
                    position: "relative",
                    margin: "auto",
                    border: 'solid 5px orange',
                    padding: '0 1.5em 0 1.5em',
                    textAlign: 'center'
                }
                }>
                    <CarouselProvider
                        naturalSlideWidth={160}
                        naturalSlideHeight={86}
                        totalSlides={4}
                    >
                        <Slider>
                            <CustomCardSlide
                                index={0}
                                source={'noticias/noticia1.jpg'}
                                alt="alt"
                                titulo={"Soy un titulo 1"}
                                descripcion={"Soy un descripcion 1"}
                                height={500}
                            />
                            <CustomCardSlide
                                index={1}
                                source={'noticias/noticia2.jpeg'}
                                alt="alt"
                                titulo={"Soy un titulo 2"}
                                descripcion={"Soy un descripcion 2"}
                                height={500}
                            />
                            <CustomCardSlide
                                index={2}
                                source={'noticias/noticia3.jpeg'}
                                alt="alt"
                                titulo={"Soy un titulo 3"}
                                descripcion={"Soy un descripcion 3"}
                                height={500}
                            />
                            <CustomCardSlide
                                index={3}
                                source={'noticias/noticia4.png'}
                                alt="alt"
                                titulo={"Soy un titulo 4"}
                                descripcion={"Soy un descripcion 4"}
                                height={500}
                            />

                        </Slider>
                        <ButtonBack style={{
                            position: 'absolute',
                            top: '50%',
                            left: '0',
                            transform: 'translateY(-50%)',
                            padding: "0",
                        }}>
                            <img src={'iconos/arrow_back.svg'}
                                 width="50"
                                 height="50"
                                 alt={"btnAtras"}
                            />
                        </ButtonBack>
                        <ButtonNext style={{
                            position: 'absolute',
                            top: '50%',
                            right: '0',
                            transform: 'translateY(-50%)',
                            padding: "0",
                        }}>
                            <img src={'iconos/arrow_forward.svg'}
                                 width="50"
                                 height="50"
                                 alt={"btnSiguiente"}
                            />
                        </ButtonNext>
                        <DotGroup/>
                    </CarouselProvider>
                </Container>

            </Box>

            <Box sx={{
                margin: '0 1.5em 1em 1.5em',
            }}>
                <ButtonGroup
                    variant="text" aria-label="outlined primary button group" fullWidth={true}
                    sx={{backgroundColor: '#f8f8f8', border: 'solid 1px #cecece'}}
                >
                    <Button
                        sx={{textTransform: 'none', color: 'black', fontWeight: 'bold'}}
                        onClick={() => window.open('https://www.trabajo.gob.ec/sistema-contacto-ciudadano-mantenimiento/')}
                    >
                        Contacto Ciudadano
                    </Button>
                    <Button
                        sx={{textTransform: 'none', color: 'black', fontWeight: 'bold'}}
                        onClick={() => window.open('https://www.gob.ec')}
                    >
                        Portal trámites ciudadanos
                    </Button>
                    <Button
                        sx={{textTransform: 'none', color: 'black', fontWeight: 'bold'}}
                        onClick={() => window.open('https://sni.gob.ec/inicio')}
                    >
                        Sistema Nacional de Información (SNI)
                    </Button>
                </ButtonGroup>
            </Box>
        </Layout>
    )
}

export default Home;
