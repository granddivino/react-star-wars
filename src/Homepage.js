import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Style.css'

import {Link} from 'react-router-dom';

const Homepage = () => {
  let [ships, setShips] = useState([])
  let [loading, setLoading] = useState(true)


  useEffect(() => {
    let url = `https://swapi.dev/api/starships/`
    axios.get(url)
    .then(res => {
      console.log(res.data.results)
      setLoading(false)
      setShips(res.data.results)
    })
    .catch (err => console.log(err))
  }, [])

  if (!loading) {
    return(
      <div className='ship-container'>
        {ships = ships.map((s, i) => {
          return (
            <div key={i} className='ship'>
              <Link to={{
                pathname: '/starship',
                state: s
              }}
              key={i} 
              className='link-text'>
              <button className='butt'>{s.name} </button>
              </Link>
            </div>
          )
        })}
      </div>
    )

  } else {
    return(
      <h1 className='loading'>Loading...</h1>
    )
  }
}

export default Homepage;