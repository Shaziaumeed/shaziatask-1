import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='bg-[#F1F1F2] pt-[60px] pb-9 mt-20'>
    <div className='flex justify-between  max-w-[546px]  m-auto pt-10   max-sm:flex-col max-sm:items-center'>
    <div className='flex gap-12'>
<p>Home</p>
<p>About</p>
</div>
<div>
<img src="https://giftstore.netlify.app/assets/images/footer-logo.png"></img>
</div>
<div className='flex gap-12'>
<p>Service</p>
<p>Blog</p>
</div>
    </div>
    <div className='max-w-[1000px] m-auto  flex flex-wrap'>
      <hr className='w-[1000px] border-[#000000] m-[60px]' />
    </div>
    <div class="flex justify-between  w-[256px]  m-auto  flex-wrap ">
    <img src="https://giftstore.netlify.app/assets/images/fb.png"></img>
    <img src="https://giftstore.netlify.app/assets/images/twitter.png"></img>
    <img src="https://giftstore.netlify.app/assets/images/insta.png"></img>
    <img src="https://giftstore.netlify.app/assets/images/youtube.png"></img>
    <img src="https://giftstore.netlify.app/assets/images/pin.png"></img>
    </div>
    <div className='text-center pt-12 max-sm:text-center '>
    <span class="font-10"> 2010-2020</span>
    <span class="font-10 pl-5"> Privacy - Terms</span>
    </div>
</div> 
  )
}

export default Footer
