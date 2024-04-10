import React from 'react'
import Orange from './Tiers/Orange'
import Purple from './Tiers/Purple'
import Silver from './Tiers/Silver'

const GamesCompleted = ({gamesCompleted}) => {
  return (
    <div>
        {gamesCompleted < 3 ? <Orange data={gamesCompleted}/> : <Purple data={gamesCompleted}/> }
        {/* <Silver data={gamesCompleted}/> */}
        <p className='text-center font-bold'>Games Completed</p>
    </div>
  )
}

export default GamesCompleted
