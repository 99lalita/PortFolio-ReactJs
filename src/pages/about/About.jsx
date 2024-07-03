import React from 'react'
import Header from '../../components/pageHeader/Header'
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import './About.scss'
import {FaDev,FaDatabase} from 'react-icons/fa'
import { TbBrandNextjs } from "react-icons/tb";
import { DiReact } from "react-icons/di";


const personalDetails = [
  {
    label: "Name",
    value: "Lalita Londhe"
  },
  {
    label: "Age",
    value: "20"
  },
  {
    label: "Address",
    value: "India"
  },
  {
    label: "Email",
    value: "llalitalondhe21@gmail.com"
  },
  {
    label: "Contact",
    value: "+91 8805391589"
  }
];

const jobSummary = 'I am a dedicated professional with a strong foundation in Data Structures and Algorithms, coupled with a passion for Full Stack Development. In my journey, I have mastered both the front-end and back-end realms, creating integrated solutions that prioritize efficiency and user experience. I take pride in architecting scalable systems, leveraging my expertise in Data Structures and Algorithms to craft elegant and functional code. My commitment to staying abreast of technology trends ensures that I deliver solutions that are not only current but also built on a solid understanding of foundational principles. Let us connect and explore how my skills can contribute to your projects.'

const About = () => {
  return (
    <section id='about' className='about'>
      <Header
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className='about__content'>

        <div className='about__content__personalWrapper'>

        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: 'translateX(-500px)'
          }}

          end={{
            transform: 'translateX(0px)'
          }}>

          <h3>Full stack Developer</h3>
          <p>{jobSummary}</p>

        </Animate>

        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: 'translateX(500px)'
          }}

          end={{
            transform: 'translateX(0px)'
          }}>

          <h3 className='personalInformationHeaderText'>Personal Information</h3>
          <ul>
          {
            personalDetails.map( (item,index) => (
              
                <li key = {index}>
                <span className='title'>{item.label}</span>
                <span className = 'value'>{item.value}</span>
                </li>
            ))
          }
          </ul>

        </Animate>
        </div>


        <div className='about__content__serviceWrapper'>

          <Animate  play
          duration={1.5}
          delay={1}
          start={{
            transform: 'translateX(600px)'
          }}
          end={{
            transform: 'translateX(0px)'
          }}>

          <div className='about__content__serviceWrapper__innerContent'>


            <div>
              <FaDev size={50} color='var(--yellow-theme-main-color)'/>
            </div>
            <div>
              <FaDatabase size={50} color='var(--yellow-theme-main-color)'/>
            </div>
            <div>
              <DiReact size={50} color='var(--yellow-theme-main-color)'/>
            </div>
            <div>
              <TbBrandNextjs size={50} color='var(--yellow-theme-main-color)'/>
            </div>

          </div>

          </Animate>
         
        </div>

      </div>
    </section>
  )
}

export default About