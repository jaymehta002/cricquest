import React from 'react'
import Orange from './Tiers/Orange'
import Purple from './Tiers/Purple'
import Green from './Tiers/Green'
import Silver from './Tiers/Silver'
import Golden from './Tiers/Golden'

const PlayersGuessed = ({playersGuessed}) => {
  return (
    <div>
        {playersGuessed < 3 ? <Orange data={playersGuessed}/> : playersGuessed < 7 ? <Purple data={playersGuessed}/> : playersGuessed < 16 ? <Green data={playersGuessed}/> : playersGuessed < 25 ? <Silver data={playersGuessed}/>: <Golden data={playersGuessed}/> }
        <p className='text-center font-bold'>Players Guessed</p>
    </div>
  )
}

export default PlayersGuessed
