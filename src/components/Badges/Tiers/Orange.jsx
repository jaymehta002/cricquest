import React from "react";

const Orange = ({ data }) => {
  const percent = (data / 3) * 100;
  const level = 1;
  return (
    <>
      <div className="bg-orange relative font-inter">
        <span className="uppercase text-xs  orange title-orange font-bold">Orange</span>
        <span className="level font-bold">{data}</span>
        <div className="progress-bar-orange">
            <div className="progress" style={{ width: `${percent}%` }}></div>
        </div>
        <p className="progress-count text-xs font-inter orange">{data} of 3</p>
      </div>
      {/* <div className="bg-[url('/orangeBadge.png')] h-60 w-48 rounded-lg p-4 relative">
                <span className='title orange font-inter text-sm font-bold uppercase'>Orange</span>
                <h1 className='level font-inter'>{data}</h1>
                <div className="progress-bar-orange">
                    <div className="progress" style={{ width: `${percent}%` }}></div>
                </div>
                <p className='font-inter orange progress-count'>{data} of 3</p>
            </div> */}
    </>
  );
};

export default Orange;
