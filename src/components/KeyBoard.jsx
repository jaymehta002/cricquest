import { useEffect } from "react";
import PropTypes from "prop-types";

const KeyBoard = ({ onKeyPress, checkDisabled }) => {
  const keyboardLayout = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M", "DEL"],
    ["HINT", "SPACE", "GUESS"],
  ];

  const handleKeyDown = (event) => {
    const key = event.key.toUpperCase();
    if (key === " " || key === "SPACE") {
      // Handle Space key
      event.preventDefault(); // Prevent default behavior for Space key
      if (!checkDisabled("SPACE")) {
        onKeyPress("SPACE");
      }
    } else if (key === 'ENTER' || key === 'RETURN'){
      event.preventDefault(); // Prevent default behavior for Enter key
      if (!checkDisabled("GUESS")) {
        onKeyPress("GUESS");
      }
    }else if (key === "DELETE" || key === "DEL" || key === "BACKSPACE") {
      // Handle Delete key
      event.preventDefault(); // Prevent default behavior for Delete key
      if (!checkDisabled("DEL")) {
        onKeyPress("DEL");
      }
    } else if (checkDisabled(key)) {
      event.preventDefault(); // Prevent default behavior for disabled keys
    } else {
      onKeyPress(key);
    }
  };
  

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onKeyPress]);

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
                className={`rounded kbd outline-none border-none border-2 w-10 margen flex gap-1 py-2 bg-white font-inter font-bold cursor-pointer design-text-black ${
                  key === "SPACE"
                    ? "px-20 w-60 mx-1"
                    : key === "GUESS"
                    ? "guess-key px-4"
                    : key === "DEL"
                    ? "del-key px-2"
                    : key === "HINT"
                    ? "hint-key px-4"
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
  checkDisabled: PropTypes.func.isRequired,
};

export default KeyBoard;
