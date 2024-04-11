import React from 'react'

const Silver = ({data}) => {
    const percent = (data / 25) * 100;
    const level = 1
  return (
    <>
        <div className="bg-silver relative font-inter">
        <span className="uppercase text-xs  silver title-silver font-bold">silver</span>
        <span className="level-silver font-bold">{data}</span>
        <div className="progress-bar-silver">
            <div className="progress" style={{ width: `${percent}%` }}></div>
        </div>
        <p className="progress-count-silver text-xs font-inter silver">{data} of 25</p>
      </div>
        {/* <div>
            <div className="bg-[url('/silverBadge.png')] h-60 w-48 rounded-lg p-4 relative">
                <span className='title silver font-inter text-sm font-bold uppercase'>Silver</span>
                <h1 className='level-silver font-inter'>{data}</h1>
                <div className="progress-bar-silver">
                    <div className="progress" style={{ width: `${percent}%` }}></div> 
                </div>
                <p className='font-inter progress-count silver'>{data} of 25</p>
            </div>
        </div> */}
    </>
  )
}

export default Silver
