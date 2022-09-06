import PropTypes from "prop-types";
import {Slide} from "pure-react-carousel";
import React from "react";
import Card from '@mui/material/Card';
import {Container, CardContent, CardMedia, Typography} from "@mui/material";

// @ts-ignore
const CustomCardSlide = ({index, source, alt, titulo, descripcion, height}) => (
    <Slide index={index}>
        <Container>
            <Card>
                <CardMedia
                    component="img"
                    image={source}
                    alt={alt}
                    height={height}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {descripcion}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    </Slide>
);

CustomCardSlide.propTypes = {
    index: PropTypes.number.isRequired
};

export default CustomCardSlide;