import React, {useState} from 'react';


const Container = props => {
  const [ isOne, plusOne ] = useState(props.one)
  const value = () => {
    props.handleValues({one:'new'})
    plusOne('1')

  }
  return(
    <div className = "jumbotron" style={{backgroundColor:'#000'}}>
      <div className="row">
        < div className="col-12 col-md-4 text-white"onClick={value}>{props.one}</div>
        < div className="col-12 col-md-4 text-white">{props.two}</div>
        < div className="col-12 col-md-4 text-white">{props.three}</div>
      </div>
    </div>
  )
}

export default Container;