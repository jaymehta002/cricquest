import Orange from "./Tiers/Orange";
import Purple from "./Tiers/Purple";
import Green from "./Tiers/Green";
import Silver from "./Tiers/Silver";
import Golden from "./Tiers/Golden";
import PropTypes from "prop-types";
import Completed from "./Tiers/Completed";

const TwoPlayer = ({ twoPlayer }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {twoPlayer <= 2 ? (
        <Orange data={twoPlayer} />
      ) : twoPlayer <= 6 ? (
        <Purple data={twoPlayer} />
      ) : twoPlayer <= 15 ? (
        <Green data={twoPlayer} />
      ) : twoPlayer <= 24 ? (
        <Silver data={twoPlayer} />
      ) : twoPlayer <=49 ? (
        <Golden data={twoPlayer} />
      ) : (
        <Completed />
      )}
      <p className="text-center mt-2 text-sm font-semibold">
        Two Player Guessed
      </p>
    </div>
  );
};

TwoPlayer.propTypes = {
  twoPlayer: PropTypes.number,
};

export default TwoPlayer;
