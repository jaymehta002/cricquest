import React from 'react'
import Orange from './Tiers/Orange'
import Purple from './Tiers/Purple'
import Green from './Tiers/Green'
import Silver from './Tiers/Silver'
import Golden from './Tiers/Golden'

const ThreePlayer = ({threePlayer}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        {threePlayer < 3 ? <Orange data={threePlayer}/> : threePlayer < 7 ? <Purple data={threePlayer}/> : threePlayer < 16 ? <Green data={threePlayer}/> : threePlayer < 25 ? <Silver data={threePlayer}/>: <Golden data={threePlayer}/> }
        <p className='text-center text-sm mt-2 font-semibold'>Three Player Guessed</p>
    </div>
  )
}

export default ThreePlayer
