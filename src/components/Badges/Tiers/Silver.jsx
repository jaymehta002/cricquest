import PropTypes from 'prop-types'

const Silver = ({data}) => {
    const percent = (data / 25) * 100;
  return (
    <>
        <div className="bg-silver relative font-inter">
        <span className="uppercase text-xs  silver title-silver font-bold">silver</span>
        <span className="level-silver font-bold">{data}</span>
        <div className="progress-bar-silver">
            <div className="progress" style={{ width: `${percent}%` }}></div>
        </div>
        <p className="progress-count-silver text-xs font-inter silver">{data} of 25</p>
      </div>
    </>
  )
}

Silver.propTypes = {
    data: PropTypes.number
}

export default Silver
