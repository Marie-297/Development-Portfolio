import React from 'react'
import RowFourCard from './RowFourCard'

function RowFour() {
  return (
    <div className='forthdiv'>
      <RowFourCard srcUrl="../../src/assets/Images/vector1.jpeg" header="Frontend Web Development:" text="Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users."/>

      <RowFourCard srcUrl="../../src/assets/Images/touch-id-svgrepo-com(1).svg" header="Mobile App Development" text="I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process."/>

      <RowFourCard srcUrl="../../src/assets/Images/color-swatch-svgrepo-com(1).svg" header="Technology Stack" text="I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native."/>

      <RowFourCard srcUrl="../../src/assets/Images/hashtag-svgrepo-com.svg" header="Web Optimization" text="Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings."/>

      <RowFourCard srcUrl="../../src/assets/Images/eye-svgrepo-com.svg" header="User-Centric Design" text="My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey."/>

      <RowFourCard srcUrl="../../src/assets/Images/document-text-svgrepo-com.svg" header="Testing and Quality Assurance" text="I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project."/>
    </div>
  )
}

export default RowFour
