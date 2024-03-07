import { CountryFlag } from '../utils/TeamDesign';
import {Batsman, Bowler, WicketKeeper, AllRounder, Franchise, Age, BlankGuess} from '../utils/design'

const PlayerCol = ({index, hero, player, hintMode, revealHint }) => {
  return (
    <div className="flex bg-design-white w-auto font-inter flex-col gap-2 design-border justify-center rounded-xl items-center">
      <span className="bg-design-gray w-full text-center px-6 py-1 design-text-black font-semibold rounded-t-lg">{hero.price}</span>
      <span className="px-1 design-text-black flex flex-col items-center justify-center text-center text-xs font-semibold">
        {hero.role === 'BT' ? 
          (  
            <>
              <Batsman />
              <span className=''>BATSMAN</span>
            </>   
          ) : hero.role === 'BW' ? (
            <>
              <Bowler />
              <p className=''>BOWLER</p>
            </>
          ) : hero.role === 'AR' ? (
            <>
              <AllRounder />
              <span>ALL ROUNDER</span>
            </>
          ) : (
            <>
              <WicketKeeper />
              <span className=''>WICKET KEEPER</span>
            </>
          )}
      </span>
      <div className={`flex flex-col items-center justify-center ${hintMode && player.team !== hero.team ? "animate-pulse" : ""}`} onClick={
        hintMode && player.team != hero.team ?
        revealHint(index, 'team', hero.team) : () =>{}
      }>
        <span className={`design-text-black text-center font-semibold ${player.team ? 'design-text-black' : 'text-gray-500'}`}>
          <Franchise team={player.team} />
          <p className={`${player.team ? 'design-text-black' : 'text-gray-400'}`}>{player.team?player.team:"TEAM"}</p>
        </span>
        </div>
        <div>
        <span className="text-center font-semibold">
          {player.age ? (
            <p className='font-luckiest-guy age my-3 text-5xl'>{player.age}</p>
          ) : (
            <span>
              <Age />
              <p style={{ marginTop: '-2px' }}>AGE</p>
            </span>
          )}
        </span>
      </div>
      <span className="design-text-black text-center font-semibold">
      <CountryFlag country={player.nation} />
                <span className=''>{player.nation? player.nation.toUpperCase() : (
                    <p style={{marginTop: '-4px'}} className='text-gray-400'>NATION</p>
        )}</span>
      </span>
      
      <span className={`bg-design-gray w-full text-center flex justify-center items-center py-1 design-text-black font-semibold rounded-b-lg`}>
        {player.playerName ? (
          <>
            <p className='text-xs pt-1 font-bold font-inter'>{player.playerName.split(' ')[0].toUpperCase()} <br />
            <span className='text-base'>{player.playerName.split(' ')[1].toUpperCase()}</span></p>
          </>
        ) : (
          <>
          <div className='py-1'>
          <BlankGuess />
          </div>
          </>
        )}
      </span>
    </div>
  );
};

export default PlayerCol;
