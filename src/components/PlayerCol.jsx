import { CountryFlag } from '../utils/TeamDesign';
import {Batsman, Bowler, WicketKeeper, AllRounder, Franchise, Age, BlankGuess} from '../utils/design'

const PlayerCol = ({index, hero, player, hintMode, revealHint }) => {
  return (
    <div className={`flex bg-design-white w-auto font-inter flex-col gap-2 design-border justify-center rounded-xl items-center ${player.playerName? 'completed-blue-bg': 'bg-design-white' }`}>
      <span className={`w-full text-center md:px-6 py-1 design-text-black font-semibold rounded-t-lg ${player.playerName? 'completed-blue-head' : 'bg-design-gray'}`}>{hero.price}</span>
      <span className={`px-1 design-text-black flex flex-col items-center justify-center text-center text-xs font-semibold ${player.playerName? 'completed-blue-bg': 'bg-design-white'}`}>
        {hero.role === 'BT' ? 
          (  
            <>
              <Batsman />
              <span className='mb-4 md:mb-0'>BATSMAN</span>
            </>   
          ) : hero.role === 'BW' ? (
            <>
              <Bowler />
              <p className='mb-4 md:mb-0'>BOWLER</p>
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
      <div className={`flex flex-col items-center justify-center ${hintMode? 'animate-pulse' : '' } `} onClick={
        hintMode? ()=> revealHint(index, 'team', hero) : () => {}
      }>
        <span className={`design-text-black text-center font-semibold ${player.team ? 'design-text-black' : 'text-gray-500'}`}>
          <Franchise team={player.team} />
          <p className={`${player.team ? 'design-text-black' : 'text-gray-400'}`}>{player.team?player.team:"TEAM"}</p>
        </span>
      </div>
        <div onClick={
        hintMode? ()=> revealHint(index, 'age', hero) : () => {}
      }>
        <span className={`text-center font-semibold ${hintMode? 'animate-pulse': '' }`}>
          {player.age ? (
            <p className='font-luckiest-guy age my-3 text-5xl'>{player.age}</p>
          ) : (
            <span className='text-gray-400'>
              <Age />
              <p style={{ marginTop: '-2px' }}>AGE</p>
            </span>
          )}
        </span>
      </div>
      <div className={`design-text-black text-center font-semibold ${hintMode? 'animate-pulse': '' }`} onClick={
        hintMode? ()=> revealHint(index, 'nation', hero) : () => {}
      }>
      <CountryFlag country={player.nation} />
                <span className=''>{player.nation? player.nation.toUpperCase() : (
                    <p style={{marginTop: '-4px'}} className='text-gray-400'>NATION</p>
        )}</span>
      </div>
      
      <span className={`bg-design-gray w-full text-center flex justify-center items-center py-1 design-text-black font-semibold rounded-b-lg ${player.playerName? 'completed-blue-head' : 'bg-design-grayy'}`}>
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
