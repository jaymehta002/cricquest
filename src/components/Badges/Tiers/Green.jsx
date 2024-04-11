import React from 'react'

const Green = ({data}) => {
    const percent = (data / 15) * 100;
    const level = 1
  return (
    <>
        <div className="bg-green relative font-inter">
        <span className="uppercase text-xs  green title-green font-bold">green</span>
        <span className="level-green font-bold">{data}</span>
        <div className="progress-bar-green">
            <div className="progress" style={{ width: `${percent}%` }}></div>
        </div>
        <p className="progress-count-green text-xs font-inter green">{data} of 15</p>
      </div>
        {/* <div>
            <div className="bg-[url('/greenBadge.png')] h-60 w-48 rounded-lg p-4 relative">
                <span className='title green font-inter text-sm font-bold uppercase'>Green</span>
                <h1 className='level-green font-inter'>{data}</h1>
                <div className="progress-bar-green">
                    <div className="progress" style={{ width: `${percent}%` }}></div>
                </div>
                <p className='font-inter progress-count green'>{data} of 15</p>
            </div>
        </div> */}
    </>
  )
}

export default Green
