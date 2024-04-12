import Orange from "./Tiers/Orange";
import Purple from "./Tiers/Purple";
import Green from "./Tiers/Green";
import Silver from "./Tiers/Silver";
import Golden from "./Tiers/Golden";
import PropTypes from "prop-types";
import Completed from "./Tiers/Completed";

const WinStreak = ({ streak }) => {
  return (
    <div>
      {streak <= 2 ? (
        <Orange data={streak} />
      ) : streak <= 6 ? (
        <Purple data={streak} />
      ) : streak <= 15 ? (
        <Green data={streak} />
      ) : streak <= 24 ? (
        <Silver data={streak} />
      ) : streak <=49 ? (
        <Golden data={streak} />
      ) : (
      <Completed />
      )}
      <p className="text-center mt-2 text-sm font-semibold">Win Streak</p>
    </div>
  );
};

WinStreak.propTypes = {
  streak: PropTypes.number,
};

export default WinStreak;
