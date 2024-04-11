import PropTypes from "prop-types";
const Golden = ({ data }) => {
  const percent = (data / 50) * 100;
  return (
    <>
      <div className="bg-golden relative font-inter">
        <span className="uppercase text-xs  golden title-golden font-bold">
          golden
        </span>
        <span className="level-golden font-bold">{data}</span>
        <div className="progress-bar-golden">
          <div className="progress" style={{ width: `${percent}%` }}></div>
        </div>
        <p className="progress-count-golden text-xs font-inter golden">
          {data} of 50
        </p>
      </div>
    </>
  );
};

Golden.propTypes = {
  data: PropTypes.number,
};

export default Golden;
