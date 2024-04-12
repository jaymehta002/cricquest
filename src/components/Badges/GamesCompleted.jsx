import PlayersGuessed from "./PlayersGuessed";
import Completed from "./Tiers/Completed";
import Golden from "./Tiers/Golden";
import Green from "./Tiers/Green";
import Orange from "./Tiers/Orange";
import Purple from "./Tiers/Purple";
import Silver from "./Tiers/Silver";
import PropTypes from "prop-types";
const GamesCompleted = ({ gamesCompleted }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {gamesCompleted <= 2 ? (
        <Orange data={gamesCompleted} />
      ) : gamesCompleted <= 6 ? (
        <Purple data={gamesCompleted} />
      ) : gamesCompleted <= 15 ? (
        <Green data={gamesCompleted} />
      ) : gamesCompleted <= 24 ? (
        <Silver data={gamesCompleted} />
      ) : gamesCompleted <= 49 ? (
        <Golden data={gamesCompleted} />
      ) : (
        <Completed />
      )}
      <p className="font-semibold text-sm text-center mt-2 ">Games Completed</p>
    </div>
  );
};

GamesCompleted.propTypes = {
  gamesCompleted: PropTypes.number,
};

export default GamesCompleted;
