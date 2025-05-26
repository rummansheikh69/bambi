import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiLockClosed } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

function App() {
  return (
    <div className="">
      {/* 1st section  */}
      <div
        className="h-screen bg-no-repeat bg-center bg-cover relative font-knick "
        style={{ backgroundImage: "url(/images/bg.png)" }}
      >
        <div className=" px-10 md:px-36">
          <div className=" flex items-center justify-between">
            <div className=" w-64 h-36">
              <img
                src="/images/logo.webp"
                alt="logo"
                className=" w-full h-full object-cover"
              />
            </div>
            <div className=" flex items-center gap-5 text-white">
              <button className=" text-lg w-36 h-9 rounded-2xl bg-black/55">
                About
              </button>
              <a href="">
                <button className=" text-lg w-28 h-9 rounded-2xl bg-black/55 flex items-center justify-center">
                  <FaTelegramPlane className=" w-6 h-6" />
                </button>
              </a>
              <a href="">
                <button className=" text-lg w-28 h-9 rounded-2xl bg-black/55 flex items-center justify-center">
                  <FaXTwitter className=" w-6 h-6" />
                </button>
              </a>
              <button className=" text-lg w-36 h-9 rounded-2xl bg-black/55 flex items-center justify-center gap-[1px]">
                <span>Quest</span>
                <HiLockClosed />
              </button>
            </div>
          </div>
        </div>
        <div className=" text-3xl text-white absolute bottom-5  w-full">
          <div className=" w-full flex items-center justify-center">
            <IoIosArrowDown className=" w-14 h-14 animate-bounce" />
          </div>
        </div>
      </div>

      {/* 2nd section  */}
      <div
        className="h-screen bg-no-repeat bg-center bg-cover relative font-knick"
        style={{ backgroundImage: "url(/images/bambi-floating.png)" }}
      >
        <div className=" w-full py-[105px]">
          <h1 className=" text-center text-7xl text-[#402F04]">HELLO BAMBI</h1>
          <div className=" md:px-[160px] 2xl:px-[225px] mt-[60px] text-4xl text-white tracking-wide">
            <p className=" text-center">
              Bambi is an Memecoin PFP collection on Somnia, inspired by the
              unique charm of koalas. We're building a creative community that
              loves storytelling and collecting digital art.
            </p>
            <br />
            <p className=" text-center">
              Bambi is more than just a cute character — it's a growing IP and
              launching as the first ever NFT launchpad and marketplace on
              Somnia called loomia.
            </p>
          </div>
        </div>
      </div>

      {/* 3rd section  */}
      <div
        className="h-[80vh] bg-no-repeat bg-center bg-cover relative"
        style={{ backgroundImage: "url(/images/bambi-surfing.png)" }}
      >
        <div className=" w-full h-full flex flex-col items-center justify-center">
          <div className="">
            <img src="/images/big-logo.webp" alt="" />
          </div>
          <div className=" flex items-center gap-5 mt-5">
            <a href="">
              <FaTelegramPlane className=" w-8 h-8" />
            </a>
            <a href="">
              <FaXTwitter className=" w-8 h-8" />
            </a>
          </div>
        </div>

        <div className=" absolute bottom-0 w-full bg-black h-[50px] flex items-center justify-center">
          <p className=" text-center text-white text-sm">
            Copyright © {new Date().getFullYear()} BAMBI. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
