import Orange from "./Tiers/Orange";
import Purple from "./Tiers/Purple";
import Green from "./Tiers/Green";
import Silver from "./Tiers/Silver";
import Golden from "./Tiers/Golden";
import PropTypes from "prop-types";
import Completed from "./Tiers/Completed";
const PlayersGuessed = ({ playersGuessed }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {playersGuessed <= 2 ? (
        <Orange data={playersGuessed} />
      ) : playersGuessed <= 6 ? (
        <Purple data={playersGuessed} />
      ) : playersGuessed <= 15 ? (
        <Green data={playersGuessed} />
      ) : playersGuessed <= 24 ? (
        <Silver data={playersGuessed} />
      ) : playersGuessed <=49 ? (
        <Golden data={playersGuessed} />
      ) : (
        <Completed />
      )}
      <p className="text-center mt-2 text-sm font-semibold">Players Guessed</p>
    </div>
  );
};

PlayersGuessed.propTypes = {
  playersGuessed: PropTypes.number,
};

export default PlayersGuessed;
