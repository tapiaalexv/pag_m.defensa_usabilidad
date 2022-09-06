import PropTypes from "prop-types";
import {Slide} from "pure-react-carousel";
import React from "react";
import Card from '@mui/material/Card';
import {CardActions, CardContent, CardMedia, Typography } from "@mui/material";

// @ts-ignore
const CustomCardSlide = ({index, height, source,alt,titulo,descripcion}) => (
    <Slide index={index}>
        <Card sx={{ maxWidth:1000}}>
            <CardMedia
                component="img"
                height={height}
                image={source}
                alt={alt}
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
    </Slide>
);

CustomCardSlide.propTypes = {
    index: PropTypes.number.isRequired
};

export default CustomCardSlide;