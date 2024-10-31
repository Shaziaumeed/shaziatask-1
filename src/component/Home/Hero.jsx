import React from "react";

const Hero = () => {
  return (
    <div className="main-container  bg-[#F1F1F2]">
      <div className="flex md:flex-row flex-col justify-between">
        <div className=" flex flex-col items-center justify-center w-1/2 md:my-0 my-10 ">
          <div style={{maxWidth:"60%"}}>
             <h1 className="mb-2 text-[50px]   font-semibold leading-tight">Find a gift for your wife or girlfriend</h1>
          <p className="mb-6   text-[18px] pt-[20px]  ">
            Struggling to find a gift or girlfriend? No problem!
          </p>
          <a className="hover:text-[#F7941E]  hover:border-[#F7941E] text-white  hover:bg-[#F1F1F2] flex
           justify-center transition-all duration-300 ease-in-out items-center
            border bg-[#F7941E]  max-w-[150px] w-full px-2 pt-[6px] pb-2 rounded ">Find Gift Now</a>
         </div>
        </div>

        <div>
          <div className="">
            <img
              src="https://giftstore.netlify.app/assets/images/Background.png"
              className="w-[100%] h-[80%] "
            />
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse justify-between">
        <div>
          <div className="">
            <img
              src="https://giftstore.netlify.app/assets/images/Media.png"
              className="w-[94%] h-[80%]"
            />
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center w-1/2 md:my-0 my-10 ">
        <div style={{maxWidth:"60%"}}>
             <h1 className="mb-2 text-[50px]   font-semibold leading-tight">How we work</h1>
          <p className="mb-6   text-[18px] pt-[20px]  ">
          We’ve actually already asked hundreds of women what they want, and made a database with results. All you have to do is take our short survey that only
           takes seconds, and our proprietary algorithm will match you with a few perfect gift options.
          </p>
          <a className="hover:text-[#F7941E]  hover:border-[#F7941E] text-white  hover:bg-[#F1F1F2] flex
           justify-center transition-all duration-300 ease-in-out items-center
            border bg-[#F7941E]  max-w-[150px] w-full px-2 pt-[6px] pb-2 rounded ">Learn More</a>
         </div>
        </div>

        
      </div>
    </div>
  );
};

export default Hero;
