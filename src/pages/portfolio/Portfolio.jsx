import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import Header from "../../components/pageHeader/Header";
import "./Portfolio.scss";

import rejouice from "../../images/Rejouice.png";
import DuoStudio from "../../images/DuoStudio.png";
import EntertainmentHub from "../../images/EntertainmentHub.png";
import Golf from "../../images/Golf.png";
import IMDbNext from "../../images/IMDbNext.png";
import ImageGallery from "../../images/ImageGallery.png";
import OurTestimonials from "../../images/OurTestimonials.png";
import PlanWithMe from "../../images/PlanWithMe.png";
import PortFolio1 from "../../images/PortFolio1.png";
import Portfolio2 from "../../images/Portfolio2.png";
import Portfolio3 from "../../images/Portfolio3.png";
import RandomGif from "../../images/RandomGif.png";
import Retro from "../../images/Retro.png";
import ResultX from "../../images/ResultX.png";
import StudyNotion from "../../images/StudyNotion.png";
import TalkATive from "../../images/TalkATive.png";
import TopCourses from "../../images/TopCourses.png";
import Trimrr from "../../images/Trimrr.png";
import TwoGood from "../../images/TwoGood.png";
import WeatherApp from "../../images/WeatherApp.png";
import WordHunt from "../../images/WordHunt.png";
import password from "../../images/password.png";
import Parallax from "../../images/Parallax.png";
import ModernChair from "../../images/ModernChair.png";
import ShareModal from "../../images/ShareModal.png";

const portfolioData = [
  {
    id: 2,
    name: "Rejouice Website",
    image: rejouice,
    LiveSite: "https://rejouic-website.netlify.app",
  },
  {
    id: 2,
    name: "TwoGood Website",
    image: TwoGood,
    LiveSite: "",
  },
  {
    id: 2,
    name: "Golf Website",
    image: Golf,
    LiveSite: "https://golf-animated-website.netlify.app",
  },
  {
    id: 2,
    name: "Retro Design Website",
    image: Retro,
    LiveSite: "https://retro-deign-website.netlify.app",
  },
  {
    id: 2,
    name: "Duostudio Website",
    image: DuoStudio,
    LiveSite: "",
  },
  {
    id: 3,
    name: "Entertainment Hub",
    image: EntertainmentHub,
    LiveSite: "https://amazing-entertainment-hub.netlify.app",
  },
  {
    id: 3,
    name: "Word Hunt App",
    image: WordHunt,
    LiveSite: "https://dynamic-word-hunt-dictionary-app.netlify.app",
  },
  {
    id: 3,
    name: "Plan with Lalita",
    image: PlanWithMe,
    LiveSite: "https://plan-with-lalita.netlify.app",
  },
  {
    id: 3,
    name: "Top Courses",
    image: TopCourses,
    LiveSite: "https://amazing-top-courses.netlify.app",
  },
  {
    id: 3,
    name: "Random Gif",
    image: RandomGif,
    LiveSite: "https://cool-random-gif-generator.netlify.app",
  },
  {
    id: 3,
    name: "Our Testimonials",
    image: OurTestimonials,
    LiveSite: "https://our-cool-testimonials.netlify.app",
  },
  {
    id: 4,
    name: "PortFolio (HTML,CSS,JS)",
    image: PortFolio1,
    LiveSite: "",
  },
  {
    id: 4,
    name: "PortFolio (ReactJs)",
    image: Portfolio2,
    LiveSite: "",
  },
  {
    id: 4,
    name: "PortFolio (Framer Motion)",
    image: Portfolio3,
    LiveSite: "",
  },
  {
    id: 5,
    name: "IMDb next Movie",
    image: IMDbNext,
    LiveSite: "",
  },
  {
    id: 6,
    name: "Trimrr - URL Shortner",
    image: Trimrr,
    LiveSite: "https://trimrr-in.netlify.app",
  },
  {
    id: 6,
    name: "ResultX - Result Analysis",
    image: ResultX,
    LiveSite: "",
  },
  {
    id: 6,
    name: "Talk-A-Tive - MERN Chat App",
    image: TalkATive,
    LiveSite: "",
  },
  {
    id: 6,
    name: "StudyNotion - Ed-tech Platform",
    image: StudyNotion,
    LiveSite: "https: //studynotion-edtech-project.vercel.app/",
  },
  {
    id: 7,
    name: "Weather App",
    image: WeatherApp,
    LiveSite: "https://cool-simple-weather-app.netlify.app",
  },
  {
    id: 7,
    name: "Password Generator",
    image: password,
    LiveSite: "https://strong-password-generator-application.netlify.app",
  },
  {
    id: 7,
    name: "Parallax Website",
    image: Parallax,
    LiveSite: "https://parallax-effect-adventure.netlify.app",
  },
  {
    id: 7,
    name: "Modern Chair",
    image: ModernChair,
    LiveSite: "https://amazing-modern-chair.netlify.app",
  },
  {
    id: 7,
    name: "ShareModal",
    image: ShareModal,
    LiveSite: "https://share-my-modal.netlify.app",
  },
  {
    id: 7,
    name: "Image Gallery",
    image: ImageGallery,
    LiveSite: "https://simple-imagegallery.netlify.app",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Design",
  },
  {
    filterId: 3,
    label: "React",
  },
  ,
  {
    filterId: 4,
    label: "Portfolio",
  },
  ,
  {
    filterId: 5,
    label: "Next",
  },
  ,
  {
    filterId: 6,
    label: "Full Stack Development",
  },
  {
    filterId: 7,
    label: "HTML,CSS and JavaScript",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <Header headerText="My Portfolio" icon={<BsInfoCircleFill size={40} />} />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button
                      onClick={() => window.open(item.LiveSite, "_blank")}
                    >
                      Visit
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
