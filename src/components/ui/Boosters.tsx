import React from 'react'

const Boosters = () => {
  return (
    <button className='flex flex-row gap-[15px] h-[65px] items-center'>
      <div className='w-[65px] h-[65px] rounded-[5px] bg-[#83694D]'>
        <img src='E:\Projects\so2\public\static\svg\boost-icons\AIM.svg' />
      </div>
      <div className='flex flex-row justify-between w-[230px] items-center'>
        <div className='flex flex-col gap-[12px]'>
            <div className='flex flex-row gap-[15px]'>
                <p>AIM</p>
                <p>4lvl</p>
            </div>
            <div></div>
        </div>
        <img src="E:\Projects\so2\public\static\svg\boost-icons\Line.svg" ></img>
      </div>
    </button>
  )
}

export default Boosters
