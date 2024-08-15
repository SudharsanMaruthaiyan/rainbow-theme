import React from 'react'
import { background, icon1, icon2, icon3, icon4, logo } from '../../assets/image'
import { Facebook, Instagram, Linkedin, Star, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <>
      <div>
        <div className=' 2xl:container bg-[#FF3D00] py-5 '>
          <div className=' w-[90%] xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 justify-between'>
            <div className=' flex items-center gap-5'> 
              <img className=' border-2 rounded-full p-2 border-dashed' src={icon1} alt="" width={48} />
              <p className=' text-[28px] font-[poppions-b]'>Elevating Customer Experience.</p>
            </div>
            <div>
              <div className=' flex items-center gap-5 md:justify-end justify-start' >
                <img className=' border-2 rounded-full p-2 border-dashed' src={icon2} alt="" width={46}/>
                <div>
                  <p><a href="tel:+44 920 090 505" className=' font-[poppions] font-bold bg-black py-2 px-3 rounded-full text-white'>+44 920 090 505</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* style={{backgroundImage:`url(${background})`}} */}
        <div className='' id='bg'>
          <div className=' 2xl:container w-[90%] xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-24'>
            <div className=' flex flex-col gap-10 pb-5 md:pb-0'>
              <img src={icon3} alt="" width={200}/>
              <p className=' text-white'>Globally monetize plug-and-play data it solu
                  monotonectally disseminate oriented busine
                  multifunctional mind design.
              </p>
              <div>
              <div className="flex gap-4">
                  <Facebook  className="cursor-pointer w-[4%] hover:text-[#2f57ef] text-white"/>
                  <Twitter className="cursor-pointer w-[4%] hover:text-[#2f57ef] text-white"></Twitter>
                  <Instagram className="cursor-pointer w-[4%] hover:text-[#2f57ef] text-white"></Instagram>
                  <Linkedin className="cursor-pointer w-[4%] hover:text-[#2f57ef] text-white"></Linkedin>
              </div>
              </div>
            </div>

            <div className=' flex items-center gap-28'>
              <div className=' flex flex-col gap-10 '>
                <h1 className=' text-white font-[poppions-m] text-[22px]'>
                  Services.
                </h1>
                <ul className=' text-white pt-4'>
                  <li className=' pb-5'><a href=""> About Company</a></li>
                  <li className=' pb-5'><a href=""> Meet Our Team</a></li>
                  <li className=' pb-5'><a href="">Ltest Blog</a></li>
                  <li className=' pb-5'><a href=""> Contact Us</a></li>
                  <li className=' pb-5'><a href=""> Testimonials</a></li>
                </ul>
              </div>
              <div className=' flex flex-col gap-10 '>
                <h1 className=' text-white font-[poppions-m] text-[22px]'>
                  Useful Links
                </h1>
                <ul className=' text-white pt-4'>
                  <li className=' pb-5'><a href=""> About Company</a></li>
                  <li className=' pb-5'><a href=""> Meet Our Team</a></li>
                  <li className=' pb-5'><a href="">Ltest Blog</a></li>
                  <li className=' pb-5'><a href=""> Contact Us</a></li>
                  <li className=' pb-5'><a href=""> Testimonials</a></li>
                </ul>
              </div>
            </div>

            <div className=' flex justify-end'>
                  <div className='flex flex-col gap-10'>
                    <h1 className=' text-white font-[poppions-m] text-[22px]'>
                      Newsletter
                    </h1>
                    <p className=' text-white pt-4'>Globally monetize plug-and-play data it <br />solu <br />
                    monotonectally disseminate oriented <br />busine <br />
                    multifunctional mind design.
                    </p>
                    <div className=' relative'>
                      <input className=' pl-3 pr-28 py-4 rounded-lg bg-[#161A2B] ' type="text" name="" id=""  placeholder='Enter Your E-mail'/>
                      <img className=' absolute top-[0%] p-4 right-0 z-50 bg-[#FF3D00] rounded-r-lg' src={icon4} alt="" /> 
                    </div>
                  </div>
            </div>

            
          </div>
          <div className='flex items-center justify-between w-[90%] md:w-[80%] mx-auto pt-[100px] pb-5'>
              <div>
                <p className=' text-white font-[poppions-r]'> &#169; Copyright 2024 By Solutek </p>
              </div>
              <div className=' flex items-center gap-2'>
                <p className=' text-white font-[poppions-r] text-nowrap'>Privacy Policy</p>
                <p className=' text-white font-[poppions-r]'>Supports</p>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer