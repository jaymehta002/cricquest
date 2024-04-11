import Orange from "./Tiers/Orange";
import Purple from "./Tiers/Purple";
import Green from "./Tiers/Green";
import Silver from "./Tiers/Silver";
import Golden from "./Tiers/Golden";
import PropTypes from "prop-types";
const PlayersGuessed = ({ playersGuessed }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {playersGuessed < 3 ? (
        <Orange data={playersGuessed} />
      ) : playersGuessed < 7 ? (
        <Purple data={playersGuessed} />
      ) : playersGuessed < 16 ? (
        <Green data={playersGuessed} />
      ) : playersGuessed < 25 ? (
        <Silver data={playersGuessed} />
      ) : (
        <Golden data={playersGuessed} />
      )}
      <p className="text-center mt-2 text-sm font-semibold">Players Guessed</p>
    </div>
  );
};

PlayersGuessed.propTypes = {
  playersGuessed: PropTypes.number,
};

export default PlayersGuessed;
