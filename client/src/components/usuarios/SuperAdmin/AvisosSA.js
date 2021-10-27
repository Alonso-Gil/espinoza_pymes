import React from 'react';
import Lottie from 'react-lottie';
import Skull from '../../../assets/lotties/81807-meditation-skull.json';
import Modal from '../../reutilizables/ModalReutilizable';

// Material UI
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { Typography } from '@mui/material';

const AvisosSA = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Skull,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
      
    return ( 
        <>
            <Typography sx={{textAlign: 'center', fontWeight: 'bold', marginBottom: 5}} color="black" variant="h3" component="div">
                Avisos
            </Typography>
            <p>
                Do in veniam reprehenderit culpa Lorem esse laborum tempor cillum. Occaecat veniam est duis non labore anim consequat nostrud occaecat esse adipisicing ipsum elit qui. Consectetur commodo consectetur ea anim nostrud irure. Nulla elit officia consectetur dolor nisi cillum dolor laboris.

                Amet do pariatur enim non excepteur velit reprehenderit ullamco. Veniam ut reprehenderit amet aliquip ut labore eiusmod aliqua magna aute excepteur. Duis exercitation magna aliqua mollit nostrud. Sit eu anim Lorem enim ut sunt nostrud eiusmod adipisicing sunt nisi labore consequat.

                Occaecat esse esse in in mollit enim reprehenderit aliquip. Lorem nulla irure aliquip ea irure in ipsum. Non consequat duis non id mollit id excepteur eiusmod duis elit. Labore consequat tempor quis eu sit excepteur consectetur deserunt ut dolore. Fugiat est reprehenderit consectetur dolor consequat nulla nostrud est eu ullamco nisi aliquip et. Ipsum adipisicing dolore adipisicing ut aliquip cillum ipsum nulla dolor laborum ex.
            </p>
            
            <Lottie options={defaultOptions} height={400} width={400} />

            <Box sx={{ mt: 5, textAlign: 'right'}}>
                
                        <Modal Boton={<Fab color="secondary" aria-label="edit" sx={{  }}>
                                    <EditIcon />
                                </Fab>}
                                Contenido={
                                    <>
                                        <Typography sx={{textAlign: 'center', fontWeight: 'bold', marginBottom: 5}} color="black" variant="h3" component="div">
                                            Modificar avisos
                                        </Typography>
                                        <Typography variant="h5" sx={{textAlign: 'justify'}}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                                            enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                                            imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                                            Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                                            Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                                            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                                            ni
                                            bh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                                            leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                                            feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                                            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                                            sapien faucibus et molestie ac.
                                        </Typography>
                                    </>
                                }
                        />
                
            </Box>
        </>
     );
}
 
export default AvisosSA;