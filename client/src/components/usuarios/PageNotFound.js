import { Box } from '@mui/system';
import React from 'react';
import Lottie from 'react-lottie';
import image from '../../assets/lotties/404-notFound.json';

const PageNotFound =() => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: image,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <>
        <Box >
        <Lottie options={defaultOptions} height={800} width={1400}/>
        </Box>
        </>
    );

}

export default PageNotFound;