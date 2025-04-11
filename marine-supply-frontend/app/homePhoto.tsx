import React from 'react'

function HomePhoto(){
  return (
    <div className="bg-[url('./pexels-pixabay-164037.jpg')]" 
    style={{
        height: '85vh', 
        width: '100%', 
        backgroundPosition: 'center',
        backgroundSize: 'contain', 
        backgroundRepeat: 'no-repeat'}}>
        <div className='flex flex-col justify-center items-center text-center' style={{height: '100%'}}>
            <h1 className='text-5xl'>Louisiana's #1 Marine Equipment Distributor Since 2001</h1>
            <p className='text-2xl mt-[20px] text-lime-500'>"Powering the Gulf Coast, One Vessel at a Time."</p>
        </div>
    </div>
  )
}

export default HomePhoto