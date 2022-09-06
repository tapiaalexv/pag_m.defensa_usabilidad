import type {NextPage} from 'next'
import Layout from "./components/layout";
import {Box, Button, ButtonGroup, Container, Typography} from "@mui/material";
import React from 'react';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    ImageWithZoom,
    ButtonFirst,
    ButtonLast, DotGroup, Image
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function Home(){
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
                        onClick={() => window.open('http://intranet.midena.gob.ec/index.php/inicio')}
                    >
                        <img
                            src={'iconos/intranet.svg'}
                            alt={'Servicio de intranet'}
                            height={'75'}
                        />
                        <Typography sx={{color: 'white'}}>Intranet</Typography>
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

                <div style={{
                    position: "relative",
                    margin: "auto",
                    width: '60%',
                    height: '60%',
                    border: 'solid 5px orange',
                    padding: '0 1.5em 0 1.5em',
                    textAlign: 'center'
                }
                }>
                    <CarouselProvider
                        naturalSlideWidth={16}
                        naturalSlideHeight={9}
                        totalSlides={4}
                    >
                        <Slider>
                            <Slide index={0}>
                                <Image hasMasterSpinner={true} src={'noticias/noticia1.jpg'}/>
                                hola asdasdasd
                            </Slide>
                            <Slide index={1}>
                                <Image hasMasterSpinner={true} src={'noticias/noticia2.jpeg'}/>
                            </Slide>
                            <Slide index={2}>
                                <Image hasMasterSpinner={true} src={'noticias/noticia3.jpeg'}/>
                            </Slide>
                            <Slide index={3}>
                                <Image hasMasterSpinner={true} src={'noticias/noticia4.png'}/>
                            </Slide>
                        </Slider>
                        <ButtonBack style={{
                            position: 'absolute',
                            top: '50%',
                            left: '0',
                            transform: 'translateY(-50%)',
                        }}>
                            Back
                        </ButtonBack>
                        <ButtonNext style={{
                            position: 'absolute',
                            top: '50%',
                            right: '0',
                            transform: 'translateY(-50%)',
                        }}>
                            Next
                        </ButtonNext>
                        <DotGroup></DotGroup>
                    </CarouselProvider>
                </div>

            </Box>

            <Box sx={{
                margin: '0 1.5em 1em 1.5em',
            }}>
                <ButtonGroup
                    variant="text" aria-label="outlined primary button group" fullWidth={true}
                    sx={{backgroundColor:'#f8f8f8',border:'solid 1px #cecece'}}
                >
                    <Button
                        sx={{textTransform: 'none', color: 'black',fontWeight:'bold'}}
                        onClick={()=>window.open('https://www.trabajo.gob.ec/sistema-contacto-ciudadano-mantenimiento/')}
                    >
                        Contacto Ciudadano
                    </Button>
                    <Button
                        sx={{textTransform: 'none', color: 'black',fontWeight:'bold'}}
                        onClick={()=>window.open('https://www.gob.ec')}
                    >
                        Portal trámites ciudadanos
                    </Button>
                    <Button
                        sx={{textTransform: 'none', color: 'black',fontWeight:'bold'}}
                        onClick={()=>window.open('https://sni.gob.ec/inicio')}
                    >
                        Sistema Nacional de Información (SNI)
                    </Button>
                </ButtonGroup>
            </Box>
        </Layout>
    )
}

export default Home;
