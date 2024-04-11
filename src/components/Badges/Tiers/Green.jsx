import PropTypes from "prop-types";
const Green = ({ data }) => {
  const percent = (data / 15) * 100;
  return (
    <>
      <div className="bg-green relative font-inter">
        <span className="uppercase text-xs  green title-green font-bold">
          green
        </span>
        <span className="level-green font-bold">{data}</span>
        <div className="progress-bar-green">
          <div className="progress" style={{ width: `${percent}%` }}></div>
        </div>
        <p className="progress-count-green text-xs font-inter green">
          {data} of 15
        </p>
      </div>
    </>
  );
};

Green.propTypes = {
  data: PropTypes.number,
};

export default Green;
