import React from 'react'
import Card_intro from '../Card_intro/Card_intro'

import StyleTwo from '../StyleTwo/StyleTwo'
import Course from '../Course/Course'
import NewsLetter from '../NewsLetter/NewsLetter'
import Coursecard from '../Coursecard/Coursecard'
import Footer from '../Footer/Footer'


const Body = () => {
  return (
    <>
        <Card_intro></Card_intro>
        <Course></Course>
        <Coursecard></Coursecard>
        <StyleTwo></StyleTwo>
        <NewsLetter/> 
        {/* <Footer/> */}
    </>             
  )
}

export default Body
