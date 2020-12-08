import React from 'react';
import {useHistory} from 'react-router-dom'


const Starships = (props) => {
  console.log('props', props)
  let history = useHistory();
  return(
    <div className='details'>
      <h1>
        NAME: {props.location.state.name}
      </h1>
      <h2>
        MODEL: {props.location.state.model} 
      </h2>
      <button className='go-back' onClick={() => history.goBack()}>Return to Starship List</button>
    </div>
  )
}

export default Starships;