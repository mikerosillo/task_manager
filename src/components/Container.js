import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Add from "./Add"


const Container = props => {
  const [show, setShow] = useState(props.showModal);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const value = () => {
  //   console.log('this')
  //   props.handleValues({showModal:true})
  //   plusOne('1')
  // }
  const renderTasks = (props) => {
    console.log(props)
    // let listItems = props.tasks.map((data, key) =>
    //   <li key={key}>{data.name}</li>
     
    // );
    // if(props.tasks.lenght > 0){
    //   return listItems
    // } else {
    //   alert(props.tasks);
    // }
  }
  return(
    <div className = "container" style={{backgroundColor:'rgba(217, 0, 255, 0.842)'}}>
      <div className="row">
        <div className="col-12 col-md-4 text-white"><h3>ADD TASK</h3><br /><FontAwesomeIcon onClick={handleShow} size="4x" icon={faPlusCircle} /></div>
        <Add hours={props.hours} minutes={props.minutes} seconds={props.seconds} show={show} taskEstimatedTime={props.taskEstimatedTime} handleClose={handleClose} taskDescription={props.taskDescription} taskName={props.taskName} handleValues={props.handleValues} tasks={props.tasks} />
        < div className="col-12 col-md-4 text-white"><h3>TASK TO BE COMPLETED</h3><br />{renderTasks(props)}</div>
        < div className="col-12 col-md-4 text-white"><h3>TASK COMPLETED</h3><br />{props.three}</div>
      </div>
    </div>
  )
}

export default Container;