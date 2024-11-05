import React from 'react'


const Signup = () => {
  return (
    <div>
      <div className=' bg-[#F7941E] pt-[84px] pb-[80px] max-w-[1440px]  w-full mx-auto flex justify-evenly flex-wrap mt-[4%] '>
      <div className='   '>
      <div className='leading-9 font-serif' >
        <h3 className=' text-[36px]'>Ready to get started?</h3>
        <p className='text-[34px]'>
          Sign up or contact us
        </p>
        </div>
        </div>
       
      <div className=' flex font-serif flex-wrap sm:text-center gap-4 ' > 
      <div>
          <button className= ' border border-[black] rounded-md w-[190px] h-[50px] hover:bg-[black] hover:text-white' >Find Gift Now</button>
          </div>
          <div>
          <button className='border border-[black] rounded-md w-[190px] h-[50px] hover:bg-[black] hover:text-white' >How it Works</button>
          </div>
          </div>
        </div>
        </div>
      
     
   
  )
}

export default Signup
