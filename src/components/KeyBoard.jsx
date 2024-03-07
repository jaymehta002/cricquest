// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import { PLAYERS } from '../assets/players';

// const KeyBoard = ({ onKeyPress }) => {
//   const [inputValue, setInputValue] = useState('');

//   const handleKeyPress = (key) => {
//     setInputValue((prevInputValue) => prevInputValue + key);
//     if (onKeyPress) {
//       onKeyPress(key);
//     }
//   };

//   const handleBackspace = () => {
//     setInputValue((prevInputValue) => prevInputValue.slice(0, -1));
//     if (onKeyPress) {
//       onKeyPress('backspace');
//     }
//   };

//   const handleSpace = () => {
//     setInputValue((prevInputValue) => prevInputValue + ' ');
//     if (onKeyPress) {
//       onKeyPress(' ');
//     }
//   };

//   const handleGuess = () => {
//     const val = handleSuggestions();
//     console.log(val.playerName);
//     setInputValue('');
//   };

//   const handleHint = () => {
//     alert('hint')
//   };

  // const handleSuggestions = () => {
  //   const input = inputValue.toLowerCase();
  //   const suggestions = PLAYERS.filter((player) => player.playerName.toLowerCase().includes(input));
  //   return suggestions[0];
  // }

  // const displaySuggestion = () => {
  //   const val = handleSuggestions();
  //   const idx = val.playerName.toLowerCase().indexOf(inputValue.toLowerCase());
  //   if (val) {
  //     return (
  //       <>
  //         {/* <span>{val.playerName.slice(0,idx)}</span> */}
  //         <span style={{opacity:0.3}}>{val.playerName.slice(0,idx).toUpperCase()}</span>
  //         <span>{inputValue.toUpperCase()}</span>
  //         <span style={{opacity:0.3}}>{val.playerName.slice(idx + inputValue.length).toUpperCase()}</span>
  //       </>
  //     )
  //   }


//     return (
//       <>
//         <span></span>
//       </>
//     )
//   };

//   return (
//     <>
//       <div className="flex justify-center my-1 w-full">
//       <span>{inputValue?displaySuggestion():"exter text here..."}</span>
//       </div>
//       <div className="keyboard">
//         <div className="flex justify-center gap-1 my-1 w-full">
//           <kbd className="kbd" onClick={() => handleKeyPress('q')}>q</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('w')}>w</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('e')}>e</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('r')}>r</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('t')}>t</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('y')}>y</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('u')}>u</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('i')}>i</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('o')}>o</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('p')}>p</kbd>
//         </div> 
//         <div className="flex justify-center gap-1 my-1 w-full">
//           <kbd className="kbd" onClick={() => handleKeyPress('a')}>a</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('s')}>s</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('d')}>d</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('f')}>f</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('g')}>g</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('h')}>h</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('j')}>j</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('k')}>k</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('l')}>l</kbd>
//         </div> 
//         <div className="flex justify-center gap-1 my-1 w-full">
//           <kbd className="kbd" onClick={() => handleKeyPress('z')}>z</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('x')}>x</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('c')}>c</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('v')}>v</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('b')}>b</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('n')}>n</kbd>
//           <kbd className="kbd" onClick={() => handleKeyPress('m')}>m</kbd>
//           {/* <div className="flex justify-center gap-1 my-1 w-full"> */}
//           <button className="kbd" onClick={handleBackspace}>DEL</button>
//         {/* </div> */}
//         </div>
//         <div className="flex justify-center gap-1 my-1 w-full">
//           <button className="kbd" onClick={handleHint}>HINT</button>
//           <button className="kbd px-20" onClick={handleSpace}>SPACE</button>
//           <button className="kbd" onClick={handleGuess}>GUESS</button>
//         </div>
//       </div>
//     </>
//   );
// };

// KeyBoard.propTypes = {
//   onKeyPress: PropTypes.func,
// };

// export default KeyBoard;

import PropTypes from 'prop-types';

const KeyBoard = ({ onKeyPress}) => {
    const keyboardLayout = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL',],
        ['HINT', 'SPACE', 'GUESS']
    ];

    return (
        <div className="keyboard flex flex-col gap-2 text-center justify-center items center font-inter">
            {keyboardLayout.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-row gap-1 justify-center">
                    {row.map((key, keyIndex) => (
                        <kbd
                            key={keyIndex}
                            onClick={() => onKeyPress(key)}
                            className={`kbd ${key === "SPACE" ? "px-20" :
                            key === "GUESS" ? "guess-key" :
                            key === "DEL" ? "del-key" :
                            key === "HINT" ? "hint-key" :
                            ""}`}
                        >
                            {key}
                        </kbd>
                    ))}
                </div>
            ))}
        </div>
    );
};

KeyBoard.propTypes = {
    onKeyPress: PropTypes.func.isRequired,
};

export default KeyBoard;
