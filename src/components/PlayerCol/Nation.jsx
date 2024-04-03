import PropTypes from 'prop-types'
const Nation = ({nation}) => {
  return (
    <>
        <img src={`/svgs/nations/${nation?nation:"Blank"}.svg`} alt={nation?nation:'Nation'} />
    </>
  )
}

Nation.propTypes = {
  nation: PropTypes.string.isRequired
}

export default Nation
