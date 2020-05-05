import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const TaskDetails = props => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };
    return(
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
                <div className='col-12'>
                    <Form.Group  controlId="validationCustom01">
                        <Form.Control
                        required
                        type="text"
                        placeholder="Task name"
                        onChange={props.valueHandler}
                        />
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                        <Form.Control.Feedback type="invalid">
                        Please choose a task name.
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
                <div className='col-12'>
                    <Form.Group  controlId="validationCustom01">
                        <Form.Control
                        required
                        type="text"
                        placeholder="Task description"
                        as="textarea" aria-label="With textarea"
                        />
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                        <Form.Control.Feedback type="invalid">
                        Please add description.
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
            </Form.Row>
            <Form.Row>
                <div className="d-flex col-12">
                    <div className="ml-auto">
                        <Button className="mr-5" variant="secondary" onClick={props.handleClose}>
                        cancel
                        </Button>
                        <Button type="submit" variant="primary">
                            create task
                        </Button>
                    </div>
                </div>
            </Form.Row>
        </Form> 
    )
  }
  
  export default TaskDetails;