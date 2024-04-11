import Orange from "./Tiers/Orange";
import Purple from "./Tiers/Purple";
import Green from "./Tiers/Green";
import Silver from "./Tiers/Silver";
import Golden from "./Tiers/Golden";
import PropTypes from "prop-types";
const ShareStreak = ({ count }) => {
  return (
    <div>
      {count < 3 ? (
        <Orange data={count} />
      ) : count < 7 ? (
        <Purple data={count} />
      ) : count < 16 ? (
        <Green data={count} />
      ) : count < 25 ? (
        <Silver data={count} />
      ) : (
        <Golden data={count} />
      )}
      <p className="text-center text-sm mt-2 font-semibold">Share Streak</p>
    </div>
  );
};

ShareStreak.propTypes = {
  count: PropTypes.number,
};

export default ShareStreak;
