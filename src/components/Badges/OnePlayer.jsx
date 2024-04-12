import Orange from "./Tiers/Orange";
import Purple from "./Tiers/Purple";
import Green from "./Tiers/Green";
import Silver from "./Tiers/Silver";
import Golden from "./Tiers/Golden";
import PropTypes from "prop-types";

const OnePlayer = ({ onePlayer }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {onePlayer <= 2 ? (
        <Orange data={onePlayer} />
      ) : onePlayer <= 6 ? (
        <Purple data={onePlayer} />
      ) : onePlayer <= 15 ? (
        <Green data={onePlayer} />
      ) : onePlayer <= 24 ? (
        <Silver data={onePlayer} />
      ) : onePlayer <=49 ? (
        <Golden data={onePlayer} />
      ) : (
        <Completed />
      )}
      <p className="text-center text-sm mt-2 font-semibold">
        One Player Guessed
      </p>
    </div>
  );
};

OnePlayer.propTypes = {
  onePlayer: PropTypes.number,
};


export default OnePlayer;
