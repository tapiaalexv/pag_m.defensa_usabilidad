import Layout from "./components/layout";
import {Box, Button, ButtonGroup, Container, Typography} from "@mui/material";
import React from "react";
import {ButtonBack, ButtonNext, CarouselProvider, DotGroup, Image, Slide, Slider} from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';
import CustomCardSlide from "./components/CustomCardSlide";

function Noticias() {
    return (
        <Layout>
            <Box sx={{padding: '0.5em 1.5em 0 1.5em'}}>
                <h1 style={{paddingBottom: '2px'}}>Noticias</h1>
                <h4>Más Destacadas</h4>
                <hr color="gray"/>
                <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                    <Box
                        sx={{
                            background: '#527D66',
                            width: '42.5%',
                            padding: '1em'
                        }}
                    >
                        <Button
                            sx={{
                                flexDirection: "column",
                                textTransform: 'none',
                            }}
                            onClick={() => window.open('https://www.defensa.gob.ec/primera-fase-de-remediacion-en-zaruma-fue-entregada/')}
                        >
                            <Typography
                                variant={'subtitle1'}
                                sx={{color: 'white', fontWeight: 'bold', marginBottom: '0.70em'}}
                            >
                                Primera fase de remediación en Zaruma fue entregada
                            </Typography>
                            <img
                                src={'https://www.defensa.gob.ec/wp-content/uploads/2022/09/Primera-fase-de-remediacion-en-Zaruma-fue-entregada02.jpeg'}
                                alt={'Noticia - Primera fase de remediación en Zaruma fue entregada'}
                                height={'200'}
                                width={'65%'}
                            />
                            <Typography
                                variant={'body2'}
                                sx={{color: 'white', textAlign: 'justify', marginTop: '0.70em'}}
                            >
                                El presidente de la República, Guillermo Lasso, junto al Ministro de Defensa Nacional,
                                Grad. Luis Lara y varias autoridades, asistieron al acto de entrega de la primera fase
                                de la regeneración urbana del socavón en Zaruma.
                            </Typography>
                        </Button>
                    </Box>

                    <Box
                        sx={{
                            background: '#527D66',
                            width: '42.5%',
                            padding: '1em'
                        }}
                    >
                        <Button
                            sx={{
                                flexDirection: "column",
                                textTransform: 'none',
                            }}
                            onClick={() => window.open('https://www.defensa.gob.ec/instituto-de-seguridad-social-de-las-fuerzas-armadas-conmemoro-30-anos-de-vida-institucional/')}
                        >
                            <Typography
                                variant={'subtitle1'}
                                sx={{color: 'white', fontWeight: 'bold', marginBottom: '0.70em'}}
                            >
                                Instituto de Seguridad Social de las Fuerzas Armadas conmemoró 30 años de vida
                                institucional
                            </Typography>
                            <img
                                src={'https://www.defensa.gob.ec/wp-content/uploads/2022/08/Instituto-de-Seguridad-Social-de-las-Fuerzas-Armadas-conmemoro-30-anos-de-vida-institucional01.jpeg'}
                                alt={'Noticia - Instituto de Seguridad Social de las Fuerzas Armadas conmemoró 30 años de vida institucional'}
                                height={'200'}
                                width={'65%'}
                            />
                            <Typography
                                variant={'body2'}
                                sx={{color: 'white', textAlign: 'justify', marginTop: '0.70em'}}
                            >
                                El pasado viernes 26 de agosto, en las instalaciones del Instituto Geográfico
                                Militar “IGM” en Quito, se realizó la ceremonia conmemorativa por los 30 años
                                de vida institucional del Instituto de Seguridad Social de las Fuerzas Armadas, ISSFA.
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{padding: '1em 1.5em 1.5em 1.5em'}}>
                <h4>Más Recientes</h4>
                <hr color="gray"/>

                <div style={{
                    position: "relative",
                    margin: "auto",
                    width: '90%',
                    border: 'solid 5px orange',
                    padding: '0 1.5em 0 1.5em',
                    textAlign: 'center'
                }
                }>
                    <CarouselProvider
                        naturalSlideWidth={16}
                        naturalSlideHeight={13}
                        totalSlides={4}
                        visibleSlides={3}
                    >
                        <Slider>
                            <CustomCardSlide
                                index={0}
                                source={'noticias/noticia1.jpg'}
                                alt="alt"
                                titulo={"Soy un titulo 1"}
                                descripcion={"Soy un descripcion 1"}
                                height={190}
                            />
                            <CustomCardSlide
                                index={1}
                                source={'noticias/noticia2.jpeg'}
                                alt="alt"
                                titulo={"Soy un titulo 2"}
                                descripcion={"Soy un descripcion 2"}
                                height={190}
                            />
                            <CustomCardSlide
                                index={2}
                                source={'noticias/noticia3.jpeg'}
                                alt="alt"
                                titulo={"Soy un titulo 3"}
                                descripcion={"Soy un descripcion 3"}
                                height={190}
                            />
                            <CustomCardSlide
                                index={3}
                                source={'noticias/noticia4.png'}
                                alt="alt"
                                titulo={"Soy un titulo 4"}
                                descripcion={"Soy un descripcion 4"}
                                height={190}
                            />

                        </Slider>
                        <ButtonBack style={{
                            position: 'absolute',
                            top: '50%',
                            left: '0',
                            transform: 'translateY(-50%)',
                            padding:"0",
                        }}>
                            <img  src={'iconos/arrow_back.svg'}
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
                            padding:"0",
                        }}>
                            <img  src={'iconos/arrow_forward.svg'}
                                  width="50"
                                  height="50"
                                  alt={"btnSiguiente"}
                            />
                        </ButtonNext>
                        <DotGroup/>
                    </CarouselProvider>
                </div>
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

export default Noticias;