import React from 'react'
import Orange from './Tiers/Orange'
import Purple from './Tiers/Purple'
import Green from './Tiers/Green'
import Silver from './Tiers/Silver'
import Golden from './Tiers/Golden'

const ShareStreak = ({count}) => {
  return (
    <div>
        {count < 3 ? <Orange data={count}/> : count < 7 ? <Purple data={count}/> : count < 16 ? <Green data={count}/> : count < 25 ? <Silver data={count}/>: <Golden data={count}/> }
        <p className='text-center font-bold'>Win Streak</p>
    </div>
  )
}

export default ShareStreak
