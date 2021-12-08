import { Box } from '@mui/system';
import React from 'react';
import Lottie from 'react-lottie';
import styled from '@emotion/styled';

import image from '../../assets/lotties/404-notFound.json';
import logo from '../../espinozaLogo.png'
import { Link } from 'react-router-dom';
// import { Typography } from '@mui/material';

const PageNotFound =() => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: image,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const Imagen = styled.img`
    max-width: 13%;
    display: flex;
    justify-content: center;
    position: absolute;
    margin-left: 5rem;
    margin-top: 1rem;
`;

    return (
        <>
        <Box >
            <Link to="/">
                <Imagen src={logo} alt="logo" />
            </Link>
            {/* <Typography sx={{position:'absolute', ml:90, mt:3}}>Parece que te has perdido</Typography>
            <Typography sx={{position:'absolute', ml:90, mt:8}}>Regresa tocando el Logo</Typography> */}
            <Lottie options={defaultOptions} height={800} width={1400}/>
        </Box>
        </>
    );

}

export default PageNotFound;