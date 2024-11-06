import React from 'react'
const  Best = () => {
  return (
    <div >
     <div className="text-3xl text-center mt-[100px] font-bold font-serif">
        <p >Our Best Blogs Ever</p>
      </div>
      <div className="text-center">
        <p className='pb-20 pt-3'>"Try our blog to find the best tips and tricks to select your gift"</p>
      </div>
      <div className='flex   flex-wrap bg-[#201f1f] max-w-[1170px]   mx-auto   max-lg:justify-center  max-lg:text-center '>
      <div>
        <img src="https://giftstore.netlify.app/assets/images/couple.png"/>
        </div>
        <div className='py-20 text-white px-20 max-md:text-center  max-w-[1200px min-h-[370px] font-serif' >
          <p>Mr. john Doe</p>
        <p className='text-[40px]  '>The best way to<br /> wish your wife</p>
        <p className='pt-10'>Read More</p>
        </div>
      </div>
    </div>
  )
}

export default   Best