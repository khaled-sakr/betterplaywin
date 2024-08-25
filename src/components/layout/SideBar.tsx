import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface Props {
  sidebarShow: boolean;
  setSidebarShow: (show: boolean) => void;
}

const SideBar: React.FC<Props> = ({ sidebarShow, setSidebarShow }) => {
  const pathname: string = usePathname();
  return (
    <>
      <div
        className={`z-20 ${
          sidebarShow ? "expanded" : "shrinked"
        } md:flex flex-col hidden gap-3 fixed left-0 top-0 h-full min-h-screen bg-primary-normal text-primary-light-sec text-sm`}
      >
        <button
          onClick={() => {
            setSidebarShow(!sidebarShow);
          }}
          className="flex items-center justify-center gap-6 h-[80px] border-r  border-r-primary-normal-hover/45 shadow-xl"
        >
          <Image
            src="/icons/menu-button.svg"
            alt="logo"
            width={23}
            height={23}
          />
          {sidebarShow && (
            <span
              className={`max-w-fit ${pathname === "/" && "text-white"} ${
                sidebarShow ? "expanded" : "shrinked"
              }`}
            >
              Main
            </span>
          )}
        </button>
        <div className="overflow-hidden h-56 py-2 rounded-md bg-primary-nav-bar w-[88%] mx-auto flex flex-col">
          <Link
            onClick={() => setSidebarShow(false)}
            href="/"
            className="flex items-center h-[42px] hover:text-white hover:brightness-200"
          >
            <div className={`flex justify-center w-[90px] `}>
              <Image
                src="/icons/home.png"
                alt="logo"
                width={16}
                height={16}
                className={`${pathname === "/" && "brightness-200 "}`}
              />
            </div>

            {sidebarShow && (
              <div
                className={`max-w-2 ${pathname === "/" && "text-white"} ${
                  sidebarShow ? "expanded" : "shrinked"
                }`}
              >
                Home
              </div>
            )}
          </Link>
          <Link
            onClick={() => setSidebarShow(false)}
            href="/wagers"
            className="flex items-center h-[42px] hover:text-white hover:brightness-200"
          >
            <div
              className={`flex hover:brightness-200 hover:text-white justify-center w-[90px] `}
            >
              <Image
                src="/icons/matches.svg"
                alt="logo"
                width={16}
                height={16}
                className={`${pathname === "/wagers" && "brightness-200"}`}
              />
            </div>

            {sidebarShow && (
              <div
                className={`max-w-2 ${pathname === "/wagers" && "text-white"} ${
                  sidebarShow ? "expanded" : "shrinked"
                }`}
              >
                wagers
              </div>
            )}
          </Link>
          <Link
            onClick={() => setSidebarShow(false)}
            href="/leaderboard"
            className="flex items-center h-[42px] hover:text-white hover:brightness-200"
          >
            <div
              className={`flex hover:brightness-200 hover:text-white justify-center w-[90px] `}
            >
              <Image
                src="/icons/leaderboard.svg"
                alt="logo"
                width={16}
                height={16}
                className={`${
                  pathname === "/leaderboard" && "brightness-200 "
                }`}
              />
            </div>

            {sidebarShow && (
              <div
                className={`max-w-2 ${
                  pathname === "/leaderboard" && "text-white"
                } ${sidebarShow ? "expanded" : "shrinked"}`}
              >
                leaderboard
              </div>
            )}
          </Link>
          <Link
            onClick={() => setSidebarShow(false)}
            href="/tournaments"
            className="flex items-center h-[42px] hover:text-white hover:brightness-200"
          >
            <div className="flex hover:brightness-200 hover:text-white justify-center w-[90px]  ">
              <Image
                src="/icons/tournament.png"
                alt="logo"
                width={16}
                height={16}
                className={`${
                  pathname === "/tournaments" && "brightness-200 "
                }`}
              />
            </div>

            {sidebarShow && (
              <div
                className={` max-w-2 ${
                  pathname === "/tournaments" && "text-white"
                } ${sidebarShow ? "expanded" : "shrinked"}`}
              >
                Tournaments
              </div>
            )}
          </Link>
          <Link
            onClick={() => setSidebarShow(false)}
            href="/shop"
            className="flex w-full items-center h-[42px] hover:text-white hover:brightness-200"
          >
            <div className="flex hover:brightness-200 hover:text-white justify-center w-[90px] ">
              <Image
                src="/icons/shop.svg"
                alt="logo"
                width={16}
                height={16}
                className={` ${
                  pathname === "/shop" && "brightness-200 "
                } hover:brightness-200`}
              />
            </div>

            {sidebarShow && (
              <div
                className={`max-w-2 ${pathname === "/shop" && "text-white"} ${
                  sidebarShow ? "expanded" : "shrinked"
                }`}
              >
                shop
              </div>
            )}
          </Link>
        </div>
      </div>
      <div className="md:hidden flex absolute bottom-0 bg-primary-normal border-t border-t-primary-normal-hover w-full sm:h-20 h-16 shadow-2xl sm:px-10 px-0 justify-evenly sm:text-[13px] text-[10px] font-[380]">
        <Link
          href="/"
          className="inline-flex w-fit flex-col my-auto hover:text-white hover:brightness-200 gap-1"
        >
          <div className="flex justify-center">
            <Image
              src="/icons/menu-button.svg"
              alt="logo"
              width={20}
              height={20}
              className={` sm:h-[20px] sm:w-[20px] xs:w-[18px] xs:h-[18px] w-[13px] h-[13px]   ${
                pathname === "/" && "brightness-200 "
              }`}
            />
          </div>
          <div className={`text-center ${pathname === "/" && "text-white"}`}>
            Menu
          </div>
        </Link>
        <Link
          href="/"
          className="inline-flex flex-col my-auto hover:text-white hover:brightness-200 gap-1"
        >
          <div className="flex justify-center  ">
            <Image
              src="/icons/home.png"
              alt="logo"
              width={20}
              height={20}
              className={` sm:h-[20px] sm:w-[20px] xs:w-[18px] xs:h-[18px] w-[13px] h-[13px]   ${
                pathname === "/" && "brightness-200 "
              }`}
            />
          </div>
          <div className={`text-center ${pathname === "/" && "text-white"}`}>
            Home
          </div>
        </Link>
        <Link
          href="/wagers"
          className="inline-flex flex-col my-auto hover:text-white hover:brightness-200 gap-1"
        >
          <div className="flex justify-center">
            <Image
              src="/icons/matches.svg"
              alt="logo"
              width={20}
              height={20}
              className={` sm:h-[20px] sm:w-[20px] xs:w-[18px] xs:h-[18px] w-[13px] h-[13px]   ${
                pathname === "/wagers" && "brightness-200 "
              }`}
            />
          </div>
          <div className="text-center">Wegars</div>
        </Link>
        <button className="flex flex-col my-auto hover:text-white hover:brightness-200 gap-1">
          <div className="flex mx-auto justify-center">
            <Image
              src="/icons/chat.svg"
              alt="logo"
              width={20}
              height={20}
              className="brightness-75 sm:h-[20px] sm:w-[20px] xs:w-[18px] xs:h-[18px] w-[13px] h-[13px]  mx-auto"
            />
          </div>
          <div className="text-center">chat</div>
        </button>
      </div>
    </>
  );
};

export default SideBar;
