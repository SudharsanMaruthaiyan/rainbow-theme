import { Book, Bookmark, Star, Users, ArrowRight } from "lucide-react";
import { card_img, rainbow_logo } from "../../assets/image";

const Coursecard = () => {
  return (
    <>
      <div className="2xl:container"> 
        <div className=" md:w-[75%] w-[90%] mx-auto grid grid-cols-1 xl:grid-cols-2 border shadow-lg rounded-lg">
          <div>
            <img className=" rounded-lg h-full" src={card_img} alt="card img"/>
          </div>
          <div>
            <div className=" p-5 pt-8">
              <div className="flex gap-3 justify-between items-center py-4">
                <div className="flex gap-2 items-center">
                  <div className=" flex gap-1">
                    <Star className="  fill-[#FF9747] text-[#FF9747] w-4"  />
                    <Star className="  fill-[#FF9747] text-[#FF9747] w-4" />
                    <Star className="  fill-[#FF9747] text-[#FF9747] w-4" />
                    <Star className="  fill-[#FF9747] text-[#FF9747] w-4" />
                    <Star className="  fill-[#FF9747] text-[#FF9747] w-4" />
                  </div>
                  <div>
                    <p className=" font-[euclid] text-[#6b7385]  text-[14px] font-medium">(1 Reviews)</p>
                  </div>
                </div>
                
                <div>
                  <Bookmark className=" h-4" />
                </div>
              </div>
              <div>
                <p className=" font-[euclid] font-extrabold text-[26px] text-[#192335] hover:text-[#2f57ef]">Basics of HiStydy Theme</p>
              </div>
              <div className=" flex items-center gap-2 py-3">
                <div className=" flex items-center">
                  <Book  className=" h-4 text-[#6b7385]"/> <p className=" text-[#6b7385] text-[14px] font-[euclid] pt-[0.5px]">14 Lessons</p>
                </div>
                <div className=" flex gap-0 items-center">
                  <Users className="h-4 text-[#6b7385]" /> <p className="text-[#6b7385] text-[14px] font-[euclid]">3 Students</p>
                </div>
              </div>
              <div>
                <p className=" text-[18px] font-[euclid] font-medium text-[#6b7385] pb-6">
                  HiStudy Education Theme by Rainbow-Themes is a user-friendly
                  WordPress tool…
                </p>
              </div>
              <div className=" gap-2 flex pb-8">
                <button className=" font-[euclid] text-[#6b7385] bg-[#f6f6f6] py-1 px-4 rounded-lg hover:text-[#2f57ef] hover:bg-[#2f57ef] hover:bg-opacity-10">Core Functions</button>
                <button className=" font-[euclid] text-[#6b7385] bg-[#f6f6f6] py-1 px-6 rounded-lg hover:text-[#2f57ef] hover:bg-[#2f57ef] hover:bg-opacity-10"> IT</button>
              </div>
              <div className="flex gap-2 items-center pb-4">
                <div>
                  <img src={rainbow_logo} alt="rainbow logo" className="h-8 rounded-full" />
                </div>
                <div>
                  <p className=" font-[euclid] text-[#6b7385] text-[14px] font-medium">
                    By <span className=" text-black">Rainbow Themes</span> In
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center pb-3">
                <div>
                  <p className=" font-[euclid] font-bold text-[24px] text-[#6b7385]">Free</p>
                </div>
                <div className=" relative">
                  <p className=" flex items-center font-[euclid] font-bold text-[14px] text-[#192335] hover:text-[#2f57ef]" id="a">Learn More
                    <ArrowRight className=" h-4 text-[#6b7385]" />
                  </p>
                </div>
                {/* <div>
                  <div
                    className="flex items-center justify-center pt-1 pb-3  group relative duration-300 "
                    id="an"
                  >
                    <div className="">
                      <p className="font-[euclid]  text-slate-800 font-black text-[15px] group-hover:text-[#2f57ef]">
                        Learn More
                      </p>
                    </div>
                    <div className=" text-slate-600 group-hover:text-[#2f57ef]"></div>
                  </div>
                  <div></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coursecard;
