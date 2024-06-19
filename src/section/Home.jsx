import React from "react";

function Home() {
  return (
    <div className="flex max-md:flex-col-reverse items-center font-[monospace] h-[100vh] max-md:justify-center">
      <div className=" max-[765px]:text-center">
        <p className="text-[20px] opacity-95 max-[995px]:text-[14px]">
          Web Developer
        </p>
        <div className="font-bold text-[65px] max-[455px]:text-[35px]  max-[995px]:text-[50px] mt-[-15px] max-[765px]:mt-[-10px]">
          <h1>Hello I&apos;m</h1>
          <p className="text-[#eb4646] mt-[-25px] max-[765px]:mt-[-10px]">
            {" "}
            Daniel Panturas
          </p>
        </div>
        <p className="text-[18px] opacity-80 max-[995px]:text-[14px]">
          I excel at building website with elegant digital experiences and I am
          proficient in various programming languages and technologies.
        </p>
        <div className="mt-5">
          <button className="border-2 border-[#eb4646] py-2 px-4 rounded-full bg-transparent font-bold text-[18px] text-[#eb4646] hover:bg-[#eb4646] hover:text-white">
            DOWNLOAD CV
          </button>
        </div>
      </div>
      <div className="w-full max-md:mt-[50px] flex justify-end max-md:h-[50vh]">
        <div className="w-full md:w-1/2 flex justify-center items-center transform md:scale-125 ">
          <img
            className="w-[200px] h-[200px] rounded-full custom-shadow object-cover"
            src="/Daniel.jpg"
            alt=""
          />
          <div className="h-[250px] w-[250px] flex justify-between items-center absolute border-2 border-[#cecece] rounded-full animate-spin-mid anim-8s">
            <div className="bg-white p-1 rounded-full h-8 w-8  transform -translate-x-5 ">
              <img
                className="h-7 w-7 object-center animate-rotate-img anim-8s"
                src="/next-js.png"
                alt=""
              />
            </div>
            <div className="bg-white overflow-hidden rounded-full custom-shadow h-8 w-8 transform translate-x-5 ">
              <img
                className="h-7 w-7 object-center animate-rotate-img anim-8s"
                src="/tailwind.png"
                alt=""
              />
            </div>
          </div>
          <div className="h-[340px] w-[340px] flex justify-between items-center absolute border border-[#808080] rounded-full animate-spin-slow ">
            <div className="bg-white p-1 rounded-full custom-shadow h-8 w-8  transform -translate-x-5 ">
              <img
                className="h-7 w-7 object-center animate-rotate-img anim-8s"
                src="/next-js.png"
                alt=""
              />
            </div>
            <div className="bg-white overflow-hidden rounded-full custom-shadow h-8 w-8 transform translate-x-5 ">
              <img
                className="h-7 w-7 object-center animate-rotate-img anim-8s"
                src="/tailwind.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
