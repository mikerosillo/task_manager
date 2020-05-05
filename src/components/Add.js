import React from 'react';
import Modal from 'react-bootstrap/Modal'

import TaskDetails from './TaskDetails'

const Add = props => {
    return(
      <Modal 
      show={props.show} 
      aria-labelledby="contained-modal-title-vcenter"
      centered 
      onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task details</Modal.Title>
        </Modal.Header>
        <Modal.Body><TaskDetails handleClose={props.handleClose} valueHandler={props.valueHandler} /></Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal> 
    )
  }
  
  export default Add;