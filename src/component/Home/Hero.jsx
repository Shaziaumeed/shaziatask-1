import React from "react";
const Hero = () => {
  return (
    <div className="main-container  bg-[#F1F1F2]">
      <div className="max-w-[1440px] w-full mx-auto">
      <div className="flex justify-between items-center bg-primary md:flex-row flex-col-reverse">
        <div className="  h-full md:w-1/2 w-full max-lg:w-[75%]">
          <div className="md:max-w-[60%] max-w-full w-full mx-auto md:px-0 px-8 md:py-0 py-14">
            <h1 className="lg:text-6xl md:text-3xl text-2xl">
              Find a gift for your wife or girlfriend
            </h1>
            <p className="lg:text-lg md:text-base text-sm pt-9 ">
              Struggling to find a gift or girlfriend? No !
            </p>
            <button className="hover:text-[#F7941E]  hover:border-[#F7941E] text-white  hover:bg-[#F1F1F2] 
            border bg-[#F7941E] px-4 py-2 mt-5  rounded-md">
              Find Gift Now
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <img src="https://giftstore.netlify.app/assets/images/Background.png" alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="flex justify-between items-center bg-primary md:flex-row flex-col">
        <div className="md:w-1/2 w-full">
          <img src="https://giftstore.netlify.app/assets/images/Media.png" alt="" className="w-full h-full" />
        </div>
        <div className="md:w-1/2 w-full">
          <div className="md:max-w-[60%] max-w-full w-full mx-auto md:px-0 px-8 md:py-0 py-14 max-lg:w-[75%] ">
            <h1 className="lg:text-6xl md:text-3xl text-2xl">
              How we work
            </h1>
            <p className="lg:text-lg md:text-base text-sm pt-7">
            We’ve actually already asked hundreds of women what they want, and made a database with results. All you have to do is take our short survey that only
            takes seconds, and our proprietary algorithm will match you with a few perfect gift options.
            </p>
            <button className="hover:text-[#F7941E]  hover:border-[#F7941E] text-white  hover:bg-[#F1F1F2] border bg-[#F7941E] px-4 py-2 mt-8 rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
