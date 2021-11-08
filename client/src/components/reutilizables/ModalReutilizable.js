import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    overflowY: 'auto',
    transform: 'translate(-50%, -50%)',
    width: 800,
    maxHeight: 870,
    display: 'block',
    bgcolor: 'background.paper',
    borderRadius: '5px',
    boxShadow: 24,
    p: 7,
    flexGrow: 1,
  };

const ModalReutilizable = ({Boton, Contenido}) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return ( 
        <>
            <Box maxWidth="0px" color='inherit' onClick={handleOpen}>{Boton}</Box>
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
                <Box sx={style}>
                    {Contenido}
                </Box>
            </Modal>
        </>
     );
}

ModalReutilizable.propTypes = {
    Boton: PropTypes.object.isRequired,
    Contenido: PropTypes.object.isRequired,
  }
 
export default ModalReutilizable;