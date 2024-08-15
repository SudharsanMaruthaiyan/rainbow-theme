import React from "react";
import { logo } from "../../assets/image";
import { ChevronDown, Grid2X2, Search, ShoppingCart, User } from "lucide-react";

const Header = () => {
  return (
    <>
      <div className="2xl:container">
        <div className="w-[100%] mx-auto grid grid-cols-2 gap-5 xl:grid-cols-3 px-5 lg:px-10 py-5 items-center shadow-2xl">
          <div className=" flex gap-3 items-center">
            <img src={logo} alt="logo" className="w-[50%] lg:w-[30%]" />
            <div className="flex gap-2 px-5 py-3 rounded-full bg-[#F5F5F5]">
                <Grid2X2 />
                <p className="hidden  font-[euclid] font-medium text-base text-[#192335] cursor-pointer hover:text-[#2f57ef] lg:flex gap-1">Categories</p>
            </div>
          </div>
          <div className="hidden xl:flex justify-center">
            <ul className="flex items-center gap-3 justify-center">
              <li>
                <div className="flex gap-1">
                  <p className="font-[euclid] font-medium text-base text-[#192335] cursor-pointer hover:text-[#2f57ef] flex gap-1">Demo <ChevronDown /></p> 
                </div>
              </li>
              <li>
                <div className="flex gap-1">
                  <p className="font-[euclid] font-medium text-base text-[#192335] cursor-pointer hover:text-[#2f57ef] flex gap-1">Courses <ChevronDown /></p> 
                </div>
              </li>
              <li>
                <div className="flex gap-1">
                  <p className="font-[euclid] font-medium text-base text-[#192335] cursor-pointer hover:text-[#2f57ef] flex gap-1">Pages <ChevronDown /></p> 
                </div>
              </li>
              <li>
                <div className="flex gap-1">
                  <p className="font-[euclid] font-medium text-base text-[#192335] cursor-pointer hover:text-[#2f57ef] flex gap-1">Elements <ChevronDown /></p> 
                </div>
              </li>
              <li>
                <div className="flex gap-1">
                  <p className="font-[euclid] font-medium text-base text-[#192335] cursor-pointer hover:text-[#2f57ef] flex gap-1">Blog <ChevronDown /></p> 
                </div>
              </li>
              <li>
                <div className="flex gap-1">
                  <p className="font-[euclid] font-medium text-base text-[#192335] cursor-pointer hover:text-[#2f57ef] flex gap-1">Help <ChevronDown /></p> 
                </div>
              </li>
            </ul>
          </div>
          <div className="flex justify-end">
            <ul className="flex justify-end gap-5 items-center">
              <li>
                <div className="">
                  <Search />
                </div>
              </li>
              <li>
                <div>
                  <ShoppingCart />
                </div>
              </li>
              <li>
                <div className="w-[1px] h-[30px] bg-gray-400"></div>
              </li>
              <li>
                <div className="flex gap-2">
                  <User />
                  <p className="hidden font-[euclid] font-medium text-base text-[#192335] cursor-pointer hover:text-[#2f57ef] xl:flex gap-1">Admin</p>
                </div>
              </li>
              <li>
                <div className="hidden xl:flex rounded-full py-1 px-1" id="purchase">
                  <button className="rounded-full px-4 py-2 bg-white">Purchase now</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
