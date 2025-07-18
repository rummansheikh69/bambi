import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiLockClosed } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { GoArrowUpRight } from "react-icons/go";



function App() {
  return (
    <div className="">
      {/* 1st section  */}
      <div
        className="h-screen bg-no-repeat bg-center bg-cover relative font-knick "
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dsdg8ke2n/image/upload/v1752689170/bambo_siunor.webp)",
        }}
      >
        <div className=" px-6 md:px-36 z-50">
          <div className=" flex items-center justify-between mt-6 pt-1">
            <div className=" w-64">
{/*               <img
                src="https://res.cloudinary.com/dsdg8ke2n/image/upload/f_auto,q_auto/lphydyop3jbhs7zzgc5p"
                alt="logo"
                className=" w-full h-full object-cover"
              /> */}
<h1 className="text-5xl text-white">BAMBO</h1>
            </div>
            {/* nav for large screen  */}
            <div className=" hidden md:flex items-center gap-5 text-white  ">
              <button className=" text-lg w-36 h-9 rounded-2xl bg-black/55">
                About
              </button>
              <a href="https://x.com/bambosolana" target="_blank">
                <button className=" text-lg w-28 h-9 rounded-2xl bg-black/55 flex items-center justify-center">
                  <FaXTwitter className=" w-6 h-6" />
                </button>
              </a>
              <a href="https://x.com/i/communities/1945320771062005777" target="_blank">
                <button className=" text-lg w-28 h-9 rounded-2xl bg-black/55 flex items-center justify-center">
                  <span>Community</span>
                </button>
              </a>
              <button className=" text-lg w-36 h-9 rounded-2xl bg-black/55 flex items-center justify-center gap-[1px]">
                <span>Quest</span>
                <HiLockClosed />
              </button>
            </div>

            {/* nav for mobile  */}
            <div className=" md:hidden">
              <button
                id="menu-btn"
                className=" w-16 h-16 text-white"
                onClick={() => {
                  document.getElementById("sidebar").classList.toggle("hidden");
                  document
                    .getElementById("sidebar")
                    .classList.toggle("animate-slide-in");
                }}
              >
                <FiMenu className=" w-16 h-16" />
              </button>
              <div
                id="sidebar"
                className="hidden absolute inset-0 w-full h-screen bg-[#eed5ab] shadow-md z-20 animate-slide-out transition duration-1000 ease-in-out"
              >
                <div className=" h-full w-full flex flex-col items-center justify-center">
                  <a href="/">
                    <button className=" text-6xl">HOME</button>
                  </a>
                  <a href="/">
                    <button className=" mt-8 text-6xl">ABOUT</button>
                  </a>
                  <a href="/">
                    <button className=" mt-8 text-6xl">QUEST</button>
                  </a>
                </div>
                <button
                  id="close-btn"
                  className="absolute top-10 right-5 text-black"
                  onClick={() => {
                    document
                      .getElementById("sidebar")
                      .classList.toggle("hidden");
                    document
                      .getElementById("sidebar")
                      .classList.toggle("animate-slide-in");
                  }}
                >
                  <RxCross2 className=" w-20 h-20" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-3xl text-white absolute bottom-5  w-full">
          <div className=" w-full flex items-center justify-center">
            <IoIosArrowDown className=" w-14 h-14 animate-bounce" />
          </div>
        </div>

        {/* CA  */}
        <div className=" absolute w-full z-10">
          <div className=" w-full h-full flex items-center justify-center md:px-0 px-3">
            <div className=" mt-32 md:text-lg shadow-[3px_5px_0px_1px_#402f04] md:w-1/2 w-80 h-10 flex items-center justify-between md:px-5 px-2 bg-white rounded-full">
              <p className=" text-[#402F04] truncate">
                DGuau6yY8EQQZxhMKRjCtYYQX7j1FAanoFYv4m2Wbonk
              </p>
              <a
                href="https://letsbonk.fun/token/DGuau6yY8EQQZxhMKRjCtYYQX7j1FAanoFYv4m2Wbonk"
                target="_blank"
              >
                <div className=" w-7 h-7 rounded-full bg-[#402F04] flex items-center justify-center">
                  <GoArrowUpRight className=" text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd section  */}
      <div
        className="min-h-screen bg-no-repeat bg-center bg-cover relative font-knick"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dsdg8ke2n/image/upload/f_auto,q_auto/n8wvd2g5lrbftcqqdiu9)",
        }}
      >
        <div className=" w-full py-[105px]">
          <h1 className=" text-center text-7xl text-[#402F04]">HELLO BAMBO</h1>
          <div className=" px-5 md:px-[160px] 2xl:px-[225px] mt-[60px] text-4xl text-white tracking-wide">
            <p className=" text-center">
              Bambo is an Memecoin collection on Solana, inspired by the unique
              charm of koalas. We're building a creative community that loves
              storytelling and collecting digital art.
            </p>
            <br />
            <p className=" text-center">
              Bambo is more than just a cute character — it's a growing IP and
              launching as the first ever launchpad and Memecoin on Solana.
            </p>
          </div>
        </div>
      </div>

      {/* 3rd section  */}
      <div
        className="h-[70vh] md:h-[80vh] bg-no-repeat bg-center bg-cover relative"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dsdg8ke2n/image/upload/f_auto,q_auto/ifnghquuhyia0i0wl9jg)",
        }}
      >
        <div className=" w-full h-full flex flex-col items-center justify-center">
          <div className=" ">
{/*             <img
              src="https://res.cloudinary.com/dsdg8ke2n/image/upload/f_auto,q_auto/v72gjkndv2ofqgdc3pmr"
              alt=""
            /> */}
<h1 className="text-5xl">BAMBO</h1>
          </div>
          <div className=" flex items-center gap-5 mt-5">
            
            <a href="https://x.com/i/communities/1945320771062005777" target="_blank">
              <FaXTwitter className=" w-8 h-8" />
            </a>
          </div>
        </div>

        <div className=" absolute bottom-0 w-full bg-black h-[50px] flex items-center justify-center font-sans">
          <p className=" text-center text-white text-sm">
            Copyright © {new Date().getFullYear()} BAMBO. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
