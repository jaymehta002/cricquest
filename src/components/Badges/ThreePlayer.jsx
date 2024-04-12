import Orange from "./Tiers/Orange";
import Purple from "./Tiers/Purple";
import Green from "./Tiers/Green";
import Silver from "./Tiers/Silver";
import Golden from "./Tiers/Golden";
import PropTypes from "prop-types";
import Completed from "./Tiers/Completed";
const ThreePlayer = ({ threePlayer }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {threePlayer <= 2 ? (
        <Orange data={threePlayer} />
      ) : threePlayer <= 6 ? (
        <Purple data={threePlayer} />
      ) : threePlayer <= 15 ? (
        <Green data={threePlayer} />
      ) : threePlayer <= 24 ? (
        <Silver data={threePlayer} />
      ) : threePlayer <= 49 ? (
        <Golden data={threePlayer} />
      ):(
        <Completed />
      )}
      <p className="text-center text-sm mt-2 font-semibold">
        Three Player Guessed
      </p>
    </div>
  );
};

ThreePlayer.propTypes = {
  threePlayer: PropTypes.number,
};

export default ThreePlayer;
