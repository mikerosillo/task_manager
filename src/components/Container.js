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
  return(
    <div className = "container" style={{backgroundColor:'rgba(217, 0, 255, 0.842)'}}>
      <div className="row">
        <div className="col-12 col-md-4 text-white"><h3>ADD TASK</h3><br /><FontAwesomeIcon onClick={handleShow} size="4x" icon={faPlusCircle} /></div>
        <Add show={show} handleClose={handleClose} />
        < div className="col-12 col-md-4 text-white"><h3>TASK TO BE COMPLETED</h3><br />{props.two}</div>
        < div className="col-12 col-md-4 text-white"><h3>TASK COMPLETED</h3><br />{props.three}</div>
      </div>
    </div>
  )
}

export default Container;