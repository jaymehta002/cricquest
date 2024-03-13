import PropTypes from "prop-types";

const KeyBoard = ({ onKeyPress, checkDisabled }) => {
  const keyboardLayout = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M", "DEL"],
    ["HINT", "SPACE", "GUESS"],
  ];

  return (
    <>
      <div className="keyboard flex flex-col gap-1 lg:gap-2 text-center justify-center items center font-inter pb-12">
        {keyboardLayout.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-row gap-0 lg:gap-1 justify-center"
          >
            {row.map((key, keyIndex) => (
              <button
                key={keyIndex}
                onClick={() => onKeyPress(key)}
                className={`kbd outline-none border-none border-2 p-3 bg-white font-inter font-bold hover:bg-gray-200 cursor-pointer design-text-black ${
                  key === "SPACE"
                    ? "px-20 mx-1"
                    : key === "GUESS"
                    ? "guess-key px-1"
                    : key === "DEL"
                    ? "del-key px-2"
                    : key === "HINT"
                    ? "hint-key px-2"
                    : ""
                }`}
                disabled={checkDisabled(key)}
              >
                {key}
              </button>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

KeyBoard.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
};

export default KeyBoard;
