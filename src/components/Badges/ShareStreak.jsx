import Orange from "./Tiers/Orange";
import Purple from "./Tiers/Purple";
import Green from "./Tiers/Green";
import Silver from "./Tiers/Silver";
import Golden from "./Tiers/Golden";
import PropTypes from "prop-types";
import Completed from "./Tiers/Completed";
const ShareStreak = ({ count }) => {
  return (
    <div>
      {count <= 2 ? (
        <Orange data={count} />
      ) : count <= 6 ? (
        <Purple data={count} />
      ) : count <= 15 ? (
        <Green data={count} />
      ) : count <= 24 ? (
        <Silver data={count} />
      ) : count <= 49 ? (
        <Golden data={count} />
      ) : (
        <Completed />
      )}
      <p className="text-center text-sm mt-2 font-semibold">Share Streak</p>
    </div>
  );
};

ShareStreak.propTypes = {
  count: PropTypes.number,
};

export default ShareStreak;
