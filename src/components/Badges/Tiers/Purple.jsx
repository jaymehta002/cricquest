import PropTypes from 'prop-types';
const Purple = ({ data }) => {
  const percent = (data / 7) * 100;
  return (
    <>
      <div className="bg-purple relative font-inter">
        <span className="uppercase text-xs  purple title-purple font-bold">
          Purple
        </span>
        <span className="level-purple font-bold">{data}</span>
        <div className="progress-bar-purple">
          <div className="progress" style={{ width: `${percent}%` }}></div>
        </div>
        <p className="progress-count-purple text-xs font-inter purple">
          {data} of 7
        </p>
      </div>
    </>
  );
};

Purple.propTypes = {
  data: PropTypes.number,
};

export default Purple;
