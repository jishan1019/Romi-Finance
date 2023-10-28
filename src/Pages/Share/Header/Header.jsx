import React from "react";
import icon from "../../../assets/icon/romi.png";
import { Link } from "react-router-dom";
import { BiWallet } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-black backdrop-blur-md backdrop-filter text-white fixed z-10 max-w-[1600px] mx-auto shadow-2xl lg:px-8">
        <div className="navbar-start">
          <label tabIndex={0} className="lg:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>{" "}
          <Link to="/">
            <div className="flex items-center">
              <img
                className="-ml-2 lg:-ml-0 h-10 lg:h-12 lg:w-12"
                src={icon}
                alt=""
              />
              <p className="-ml-2 lg:-ml-0  lg:text-xl font-bold">
                Romi Finance
              </p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden md:block">
          <ul className="flex items-center gap-6 secondaryColor cursor-pointer">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/">
              <li>Dashboard</li>
            </Link>
            <Link to="/">
              <li>NFT</li>
            </Link>
            <Link to="/">
              <li>Earn</li>
            </Link>
            <Link to="/">
              <li>Buy</li>
            </Link>
            <Link to="/">
              <li>Referrals</li>
            </Link>
            <Link to="/">
              <li>Ecosystem</li>
            </Link>
            <Link to="/">
              <li>About</li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end gap-2 lg:gap-4">
          {/* Trade */}
          <div>
            <button className="primaryBg px-2 py-1">Trade</button>
          </div>

          {/* Wallet */}
          <div className="borderAll px-1 lg:px-2 py-[6px] inline-flex items-center gap-1">
            <BiWallet />
            <p className="inline-flex gap-1 text-sm">
              Connect <span className="hidden md:block">Wallet</span>
            </p>
          </div>

          {/* More */}
          <div className="borderAll px-1 lg:px-2 py-[6px] inline-flex items-center gap-1">
            <div className="borderRight pr-1">
              <img
                className="h-6 w-6"
                src="https://zomi.finance/static/media/ic_eth_24.6b1d8a1d.svg"
                alt=""
              />
            </div>
            <div className="cursor-pointer">
              <FiMoreVertical />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
