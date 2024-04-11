import React from 'react'
import Orange from './Tiers/Orange'
import Purple from './Tiers/Purple'
import Green from './Tiers/Green'
import Silver from './Tiers/Silver'
import Golden from './Tiers/Golden'

const OnePlayer = ({onePlayer}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        {onePlayer < 3 ? <Orange data={onePlayer}/> : onePlayer < 7 ? <Purple data={onePlayer}/> : onePlayer < 16 ? <Green data={onePlayer}/> : onePlayer < 25 ? <Silver data={onePlayer}/>: <Golden data={onePlayer}/> }
        <p className='text-center text-sm mt-2 font-semibold'>One Player Guessed</p>
    </div>
  )
}

export default OnePlayer
