import React from 'react'
import Orange from './Tiers/Orange'
import Purple from './Tiers/Purple'
import Green from './Tiers/Green'
import Silver from './Tiers/Silver'
import Golden from './Tiers/Golden'

const WinStreak = ({streak}) => {
  return (
    <div>
        {streak < 3 ? <Orange data={streak}/> : streak < 7 ? <Purple data={streak}/> : streak < 16 ? <Green data={streak}/> : streak < 25 ? <Silver data={streak}/>: <Golden data={streak}/> }
        <p className='text-center mt-2 text-sm font-semibold'>Win Streak</p>
    </div>
  )
}

export default WinStreak
