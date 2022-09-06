import PropTypes from "prop-types";
import {Slide} from "pure-react-carousel";
import React from "react";
import Card from '@mui/material/Card';
import {Box,CardActions, CardContent, CardMedia, Typography} from "@mui/material";

// @ts-ignore
const CustomCardSlide = ({index, source, alt, titulo, descripcion, height}) => (
    <Slide index={index}>
        <Box sx={{
            height: "80vh"
        }}>
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
        </Box>
    </Slide>
);

CustomCardSlide.propTypes = {
    index: PropTypes.number.isRequired
};

export default CustomCardSlide;