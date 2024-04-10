import React from 'react'

const Golden = ({data}) => {
    const percent = (data / 50) * 100;
    const level = 1
  return (
    <>
        <div>
            <div className="bg-[url('./goldenBadge.png')] h-60 w-48 rounded-lg p-4 relative">
                <span className='title golden font-inter text-sm font-bold uppercase'>Golden</span>
                <h1 className='level-golden font-inter'>{data}</h1>
                <div className="progress-bar-golden">
                    <div className="progress" style={{ width: `${percent}%` }}></div> {/* Adjust width dynamically for progress */}
                </div>
                <p className='font-inter progress-count golden'>{data} of 50</p>
            </div>
        </div>
    </>
  )
}

export default Golden
