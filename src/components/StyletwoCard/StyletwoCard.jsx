import React from "react";

const StyletwoCard = (props) => {
  return (
    <>
      <div>
        <div className="2xl:container">
          <div className=" shadow-lg p-3 pt-3 rounded-lg hover:-translate-y-2 transition">
            <div className="relative">
              <img
                className=" h-40 rounded-lg w-full "
                src={props.image}
                alt=""
              />
              <img
                className=" h-16 bg-white rounded-full p-2 absolute left-[40%] top-[81%]"
                src={props.icon}
                alt=""
              />
            </div>
            <div>
              <h5 className=" font-bold text-lg pt-9 font-[euclid] flex justify-center">
                {props.coursename}
              </h5>
            </div>

            <div
              className="flex items-center justify-center pt-1 pb-3  group relative duration-300 "
              id="an"
            >
              <div className="">
                <p className="font-[euclid]  text-slate-800 font-black text-[15px] group-hover:text-[#2f57ef]">
                  {props.courses}
                </p>
              </div>
              <div className=" text-slate-600 group-hover:text-[#2f57ef]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide  lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StyletwoCard;
