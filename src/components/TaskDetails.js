import React, {useState, useRef} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import InputGroup from 'react-bootstrap/InputGroup'
import TimeSelector from './TimeSelector'

const TaskDetails = props => {
    let tasks = useRef(props.tasks)
    const task_name = useRef(props.taskName)
    const task_description = useRef(props.taskDescription)
    const task_estimated_time = useRef(props.taskEstimatedTime)
    const hours = useRef(props.hours)
    const minutes = useRef(props.minutes)
    const seconds = useRef(props.seconds)
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }
        tasks.current ={name:`${task_name.current}`, description:`${task_description.current}`, hours:`${hours.current}`, minutes:`${minutes.current}`, seconds:`${seconds.current}`};
        alert(JSON.stringify(tasks.current))
        setValidated(true);
    };
    const handleTaskName = (event) => {
        const taskName = event.currentTarget.value
        task_name.current = taskName  
    };
    const handleTaskDescription = (event) => {
        const taskDescription = event.currentTarget.value
        task_description.current = taskDescription
    };
    const handleTaskEstimatedHours = (event) => {
        const taskEstimatedHours = event.currentTarget.value
        hours.current = taskEstimatedHours
    };
    const handleTaskEstimatedMinutes = (event) => {
        const taskEstimatedMinutes = event.currentTarget.value
        minutes.current = taskEstimatedMinutes
    };
    const handleTaskEstimatedSeconds = (event) => {
        const taskEstimatedSeconds = event.currentTarget.value
        seconds.current = taskEstimatedSeconds
    };
    return(
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
                <div className='col-12'>
                    <Form.Group  controlId="taskName">
                        <Form.Control
                        required
                        type="text"
                        placeholder="Task name"
                        onChange={handleTaskName}
                        />
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                        <Form.Control.Feedback type="invalid">
                        Please choose a task name.
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
                <div className='col-12'>
                    <Form.Group  controlId="taskDescription">
                        <Form.Control
                        required
                        type="text"
                        placeholder="Task description"
                        as="textarea" aria-label="With textarea"
                        onChange={handleTaskDescription}
                        />
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                        <Form.Control.Feedback type="invalid">
                        Please add description.
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
                <Form.Row>
                    <div className='col-4'>
                        <div className="form-group">
                            <label htmlFor="example3">Hours</label>
                            <input type="number"
                            placeholder="hh"
                            onChange={handleTaskEstimatedHours} id="hours" className="form-control form-control-sm" />
                        </div>       
                    </div>
                    <div className='col-4'>
                        <div className="form-group">
                            <label htmlFor="example3">Minutes</label>
                            <input type="number"
                            placeholder="mm"
                            onChange={handleTaskEstimatedMinutes} id="minutes" className="form-control form-control-sm" />
                        </div>       
                    </div>
                    <div className='col-4'>
                        <div className="form-group">
                            <label htmlFor="example3">Seconds</label>
                            <input type="number"
                            placeholder="ss"
                            onChange={handleTaskEstimatedSeconds} id="seconds" className="form-control form-control-sm" />
                        </div>
                    </div>
                </Form.Row>
            </Form.Row>
            <Form.Row>
                <div className="d-flex mt-4 col-12">
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