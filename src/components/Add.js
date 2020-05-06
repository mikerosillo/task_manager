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
        <Modal.Body><TaskDetails hours={props.hours} minutes={props.minutes} seconds={props.seconds} taskEstimatedTime={props.taskEstimatedTime} taskDescription={props.taskDescription} taskName={props.taskName} handleClose={props.handleClose} handleValues={props.handleValues} tasks={props.tasks} /></Modal.Body>
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