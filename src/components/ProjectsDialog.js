import React from "react";

import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";



export default function ProjectsDialog(props) {
    const { onClose, open, details} = props;
  
    const handleClose = () => {
      onClose();
    };
  
    return (
      
        <Dialog onClose={handleClose} open={open} maxWidth='lg'>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <DialogTitle className='text-center'>{details.title}</DialogTitle>
              </div>
            </div>
            
            <div className='row'>
              <div className='col-4'>
                <img src={details.image[0] } alt='image' className='img-fluid'/>
              </div>
            </div>
            <p>{details.details}</p>
          </div>
        </Dialog>
      
    );
  }
  
  ProjectsDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };