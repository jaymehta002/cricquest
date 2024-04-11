import Orange from './Tiers/Orange'
import Purple from './Tiers/Purple'
import Green from './Tiers/Green'
import Silver from './Tiers/Silver'
import Golden from './Tiers/Golden'
import PropTypes from 'prop-types'

const TwoPlayer = ({twoPlayer}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        {twoPlayer < 3 ? <Orange data={twoPlayer}/> : twoPlayer < 7 ? <Purple data={twoPlayer}/> : twoPlayer < 16 ? <Green data={twoPlayer}/> : twoPlayer < 25 ? <Silver data={twoPlayer}/>: <Golden data={twoPlayer}/> }
        <p className='text-center mt-2 text-sm font-semibold'>Two Player Guessed</p>
    </div>
  )
}

TwoPlayer.propTypes = {
  twoPlayer: PropTypes.number
}

export default TwoPlayer
