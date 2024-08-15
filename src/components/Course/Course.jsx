import { MoveRight } from "lucide-react"
import React from "react"
import {useTypewriter ,Cursor, Typewriter} from "react-simple-typewriter"
import { LinearGradient } from "react-text-gradients"
import Coursecard from "../Coursecard/Coursecard"
import SubscribeBtn from "../SubscribeBtn/SubscribeBtn"
import { bgimg } from "../../assets/image"


const Course = () => {
     
  return (
    <>
        <div className="2xl:container" >
            <div className="w-[90%] xl:w-[65%]  mx-auto grid grid-cols-1 py-11 pb-44 bg-opacity-5" style={{backgroundImage:`url(${bgimg})`}} id="corse">
                <div className="flex flex-col gap-3">
                    <div className="flex justify-center items-center">
                        <div className="shadow-2xl py-3 px-5 rounded-lg flex justify-center items-center">
                            <p className="font-[euclid] font-medium text-base">🏆 The leader in Online Learning</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <span className="font-[euclid] font-bold text-[60px] text-[#192335]">Popular Courses <span className=""><LinearGradient gradient={["to left","#b966e7 ,#2f57ef"]}><Typewriter
                            words={["Finance.","Math.","English."]}
                            loop= {50}
                        ></Typewriter><Cursor></Cursor></LinearGradient></span></span>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-center font-[euclid] text-[20px] text-[#6b7385] md:px-[230px]">Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!</p>
                    </div>
                    <div className="flex items-center justify-center gap-5">
                        <div>
                            <button className="flex px-4 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 gap-2 font-[euclid] font-semibold text-base text-white">Log in to start <MoveRight /> </button>
                            </div>
                        <div>
                            <button className="flex px-4 py-4 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 gap-2 font-[euclid] font-semibold text-base text-white">Buy the course <MoveRight /></button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div> 
    </>
  )
}

export default Course
