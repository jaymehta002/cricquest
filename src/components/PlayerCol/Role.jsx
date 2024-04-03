import PropTypes from "prop-types";

const Role = ({role}) => {
  return (
    <div className="flex text-xx md:text-xs flex-col items-center">
      <img src={`/svgs/role/${role}.svg`} alt={role} />
      <span className="bot">
        {role === "BT"
          ? "BATSMAN"
          : role === "BW"
          ? "BOWLER"
          : role === "WK"
          ? "WICKET KEEPER"
          : "ALL ROUNDER"
        }
      </span>
    </div>
  );
};

Role.propTypes = {
  role: PropTypes.string.isRequired,
};

export default Role;
