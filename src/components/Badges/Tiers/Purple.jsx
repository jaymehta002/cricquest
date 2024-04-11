import React from 'react'

const Purple = ({data}) => {
    const percent = (data / 7) * 100;
    const level = 1
  return (
    <>
        <div>
            <div className="bg-[url('/purpleBadge.png')] h-60 w-48 rounded-lg p-4 relative">
                <span className='title purple font-inter text-sm font-bold uppercase'>Purple</span>
                <h1 className='level-purple font-inter'>{data}</h1>
                <div className="progress-bar-purple">
                    <div className="progress" style={{ width: `${percent}%` }}></div> {/* Adjust width dynamically for progress */}
                </div>
                <p className='font-inter progress-count purple'>{data} of 7</p>
            </div>
        </div>
    </>
  )
}

export default Purple
