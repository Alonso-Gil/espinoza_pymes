import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
  };

const ModalReutilizable = ({Boton, Contenido}) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return ( 
        <>
            <Button onClick={handleOpen}>{Boton}</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <Box sx={style}>
                    {Contenido}
                </Box>
                </Fade>
            </Modal>
        </>
     );
}

ModalReutilizable.propTypes = {
    Boton: PropTypes.object.isRequired,
    Contenido: PropTypes.object.isRequired,
  }
 
export default ModalReutilizable;