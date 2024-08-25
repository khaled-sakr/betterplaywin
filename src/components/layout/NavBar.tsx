"use client";
import Image from "next/image";
import Link from "next/link";

interface Props {
  sidebarShow: boolean;
  setSidebarShow: (show: boolean) => void;
}

const NavBar: React.FC<Props> = ({ sidebarShow, setSidebarShow }) => {
  return (
    <div
      className={` ${
        sidebarShow ? "expanded-pages" : "shrinked-pages"
      } z-10 left-0 fixed top-0 md:h-[80px] h-[70px] bg-primary-nav-bar text-primary-light-sec text-sm w-full  shadow-md`}
    >
      <div className="flex flex-row h-full">
        <div className="px-6 lg:ms-0 flex-1 flex flex-row justify-between h-full">
          <div className={`md:w-[240px] w-[40px] flex items-center gap-4`}>
            <Image src="/icons/logo.svg" alt="logo" width={34} height={34} />
            <div className="relative">
              <Image
                src="/icons/search.svg"
                alt="logo"
                width={12}
                height={12}
                className="absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-4"
              />
              <input
                placeholder="Search"
                className="h-10 hidden md:block text-xs ps-8 w-full rounded-md bg-primary-normal outline-none pe-2"
                type="search"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="md:w-[250px] md:flex hidden text-sm  text-primary-light items-center justify-between gap-4">
            <button className="md:w-3/12 xs:w-4/12 w-6/12">Sign In</button>
            <button className="bg-primary-button rounded-md h-[40px] text-center content-center w-6/12">
              Register
            </button>
            <button className="content-center bg-primary-normal md:block hidden rounded-md w-[44px] h-[45px]">
              <Image
                src="/icons/chat.svg"
                alt="logo"
                width={20}
                className="m-auto"
                height={20}
              />
            </button>
          </div>
          <div className="text-xs sm:w-[180px] xs:w-[170px] w-[150px] md:hidden flex text-primary-light items-center justify-between">
            <button className="bg-primary-button rounded-md sm:h-[38px] h-[33px] text-center content-center w-7/12">
              Register
            </button>
            <button className="xs:w-3/12 w-5/12">Sign In</button>
          </div>
          {/* ////////////////////// */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
