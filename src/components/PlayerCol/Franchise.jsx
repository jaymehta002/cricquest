import PropTypes from 'prop-types'

const Franchise = ({team}) => {
  return (
    <div>
        <img src={`/svgs/teams/${team?team:'Blank'}.svg`} height={50} alt={team?team:'TEAM'} />
    </div>
  )
}

Franchise.propTypes = {
    team: PropTypes.string.isRequired
}

export default Franchise
