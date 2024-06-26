import Age from "./PlayerCol/Age";
import Blank from "./PlayerCol/Blank";
import Franchise from "./PlayerCol/Franchise";
import Nation from "./PlayerCol/Nation";
import Role from "./PlayerCol/Role";
const playerCol = ({
  index,
  hero,
  player,
  hintMode,
  revealHint,
  mask,
  gameOver,
}) => {
  return (
    <>
      <div
        className={`bg-design-white grid grid-col-1 gap-1 text-center md:w-24 w-20 md:h-[400] h-96 font-inter font-bold design-border rounded-xl ${
          player.playerName
            ? "completed-blue-bg blue-border"
            : "bg-design-white"
        }`}
      >
        <div
          className={`p-1 md:text-base text-sm bg-design-gray rounded-t-lg ${
            player.playerName
              ? "completed-blue-head text-white"
              : "design-text-black"
          }`}
        >
          {hero.price}
        </div>
        <div
          className={`grid h-16 text-xs ${
            player.playerName ? "text-white" : "design-text-black"
          }`}
        >
          <Role role={hero.role} />
        </div>
        <div
          className={`grid md:h-20 h-16 text-mt ${
            mask && player.team == "" ? "animate-item-1" : ""
          } ${hintMode && player.team === "" ? "animate-pulse" : ""}`}
          onClick={hintMode ? () => revealHint(index, "team", hero) : () => {}}
        >
          <div className="flex flex-col items-center justify-center">
            <Franchise team={gameOver ? hero.team : player.team} />
            <p
              className={` ${
                player.playerName
                  ? "text-white"
                  : player.team
                  ? "design-text-black"
                  : "text-gray-400"
              }`}
            >
              {gameOver
                ? hero.team.toUpperCase()
                : player.team
                ? player.team.toUpperCase()
                : "TEAM"}
            </p>
          </div>
        </div>

        <div
          className={`grid h-16 text-mt ${
            mask && player.age == "" ? "animate-item-2" : ""
          } ${hintMode && player.age === "" ? "animate-pulse" : ""}`}
          onClick={hintMode ? () => revealHint(index, "age", hero) : () => {}}
        >
          <div className="flex flex-col items-center justify-center">
            {gameOver ? (
              <>
                <p className=" pt-4 md:pt-2 pb-2">
                  <span className="font-luckiest-guy age my-3 text-5xl">
                    {hero.age}
                  </span>
                </p>
              </>
            ) : player.age ? (
              <p className=" pt-4 md:pt-2 pb-2">
                <span className="font-luckiest-guy age my-3 text-4xl md:text-5xl">
                  {player.age}
                </span>
              </p>
            ) : (
              <>
                <Age />
                <p className="mb-0">
                  <span className="text-gray-500">AGE</span>
                </p>
              </>
            )}
          </div>
        </div>

        <div
          className={`grid h-16 mb-1 text-mt   mt-1 ${
            mask && player.nation == "" ? "animate-item-3" : ""
          } ${hintMode && player.nation === "" ? "animate-pulse" : ""}`}
          onClick={
            hintMode ? () => revealHint(index, "nation", hero) : () => {}
          }
        >
          <div className="flex flex-col items-center justify-center">
            <Nation nation={gameOver ? hero.nation : player.nation} />
            <p
              className={`mb-0 ${
                player.playerName
                  ? "text-white"
                  : player.nation
                  ? "design-text-black"
                  : "text-gray-400"
              }`}
            >
              {gameOver
                ? hero.nation.toUpperCase()
                : player.nation
                ? player.nation.toUpperCase()
                : "NATION"}
            </p>
          </div>
        </div>

        <div
          className={`grid max-w-full  h-full bg-design-gray rounded-b-lg ${
            player.playerName ? "completed-blue-head" : "bg-design-gray"
          }`}
        >
          {gameOver ? (
            <p className="text-xs font-bold pt-1 font-inter">
              {hero.playerName.split(" ")[0].toUpperCase()} <br />
              <span className="text-[10px] font-bold">
                {hero.playerName.split(" ")[1].toUpperCase()}
              </span>
            </p>
          ) : player.playerName ? (
            <p className="text-xs  font-bold  sm:text-xs py-1 pt-2 font-inter">
              {player.playerName.split(" ")[0].toUpperCase()} <br />
              <span className="text-[10px] font-bold">
                {player.playerName.split(" ")[1].toUpperCase()}
              </span>
            </p>
          ) : (
            <div className="grid items-center justify-center py-1">
              <Blank />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default playerCol;
