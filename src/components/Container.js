import React, {useState} from 'react';


const Container = props => {
  // const [ isOne, plusOne ] = useState(props.one)
  const value = () => {
    props.handleValues({one:'new'})
    // plusOne('1')

  }
  return(
    <div className = "container" style={{backgroundColor:'rgba(217, 0, 255, 0.842)'}}>
      <div className="row">
        < div className="col-12 col-md-4 text-white"><h3>ADD TASK</h3></div>
        < div className="col-12 col-md-4 text-white"><h3>TASK TO BE COMPLETED</h3></div>
        < div className="col-12 col-md-4 text-white"><h3>TASK COMPLETE</h3></div>
      </div>
      <div className="row">
        < div className="col-12 col-md-4 text-white"onClick={value}>{props.one}</div>
        < div className="col-12 col-md-4 text-white">{props.two}</div>
        < div className="col-12 col-md-4 text-white">{props.three}</div>
      </div>
    </div>
  )
}

export default Container;