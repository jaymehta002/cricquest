import Golden from "./Tiers/Golden";
import Green from "./Tiers/Green";
import Orange from "./Tiers/Orange";
import Purple from "./Tiers/Purple";
import Silver from "./Tiers/Silver";
import PropTypes from "prop-types";
const GamesCompleted = ({ gamesCompleted }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {gamesCompleted < 3 ? (
        <Orange data={gamesCompleted} />
      ) : gamesCompleted < 7 ? (
        <Purple data={gamesCompleted} />
      ) : gamesCompleted < 16 ? (
        <Green data={gamesCompleted} />
      ) : gamesCompleted < 25 ? (
        <Silver data={gamesCompleted} />
      ) : (
        <Golden data={gamesCompleted} />
      )}
      <p className="font-semibold text-sm text-center mt-2 ">Games Completed</p>
    </div>
  );
};

GamesCompleted.propTypes = {
  gamesCompleted: PropTypes.number,
};

export default GamesCompleted;
