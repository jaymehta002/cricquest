import PropTypes from 'prop-types';

const KeyBoard = ({ onKeyPress, data}) => {
    const keyboardLayout = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL',],
        ['HINT', 'SPACE', 'GUESS']
    ];

    return (
        <>
        { data.gameCompleted ? (
            <>
                <div className='keyboard flex justify-center align-center items-center flex-col'>
                    <h1 className='text-lg font-inter font-bold design-text-black'>Congratulations! You&#39;ve completed the game.</h1>
                    <span className='font-bold design-text-black'>Stats</span>
                    <div className='flex flex-row text-center gap-8'>
                        <span className='font-bold design-text-black'>Games Completed <br /> {data.totalWins}</span>
                        <span className='font-bold design-text-black'>total games Played <br /> {data.totalGames}</span>
                        <span className='font-bold design-text-black'>Streak <br /> {data.streak}</span>
                    </div>

                </div>
            </>
        ) : data.gameOver ? (
            <>
                <h1>game over</h1>
            </>
        ) : (
            <div className="keyboard flex flex-col gap-1 lg:gap-2 text-center justify-center items center font-inter pb-12">
                {keyboardLayout.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex flex-row  gap-0 lg:gap-1 justify-center">
                        {row.map((key, keyIndex) => (
                            <kbd
                                key={keyIndex}
                                onClick={() => onKeyPress(key)}
                                className={`kbd border-2 bg-white font-inter font-bold hover:bg-gray-200 cursor-pointer design-text-black ${key === "SPACE" ? "px-20 mx-1" :
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
        )
    }   
    </>     
    );
};

KeyBoard.propTypes = {
    onKeyPress: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};

export default KeyBoard;
