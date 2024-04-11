import PropTypes from "prop-types";

const Orange = ({ data }) => {
  const percent = (data / 3) * 100;
  return (
    <>
      <div className="bg-orange relative font-inter">
        <span className="uppercase text-xs  orange title-orange font-bold">Orange</span>
        <span className="level font-bold">{data}</span>
        <div className="progress-bar-orange">
            <div className="progress" style={{ width: `${percent}%` }}></div>
        </div>
        <p className="progress-count text-xs font-inter orange">{data} of 3</p>
      </div>
      </>
  );
};

Orange.propTypes = {
  data: PropTypes.number,
};

export default Orange;
