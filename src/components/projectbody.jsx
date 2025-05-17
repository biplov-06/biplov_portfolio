import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TU from "../assets/textutils.png";
import calc from "../assets/calculator.jpg";
import cric from "../assets/Cricket.png";
import guess from "../assets/guess.jpeg";
import learn from "../assets/learn.png";
import memory from "../assets/memory.png";
import rock from "../assets/rock.jpg";
import task from "../assets/task.jpg";
import CineFlix from "../assets/cineflix.jpg";
import arrowsleft from "../assets/arrow-left.png";
import arrowsright from "../assets/arrow-right.png";


// Custom Arrows
function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev" onClick={onClick}>
      <img src = {arrowsleft} alt="Previous" />
    </div>
  );
}

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow next" onClick={onClick}>
      <img src = {arrowsright} alt="Next" />
    </div>
  );
}

// Project Data
const projects = [
  {
    img: CineFlix,
    title: "CineFlix",
    desc: "CineFlix is a comprehensive movie search tool that allows users to explore trending movies, discover new releases, and find detailed information about their favorite films.",
    link: "https://biplov-06.github.io/textutils/",
  },
  {
    img: TU,
    title: "Text Utils",
    desc: "This tool is designed for anyone who frequently works with text and needs quick conversions or formatting adjustments.",
    link: "https://biplov-06.github.io/textutils/",
  },
  {
    img: calc,
    title: "Calculator",
    desc: "A calculator is an electronic device or software application designed to perform arithmetic operations, complex mathematical calculations, and functions quickly and accurately.",
    link: "https://calculator-e4mb.vercel.app/",
  },
  {
    img: guess,
    title: "Guess the number",
    desc: "The guess number game is a classic and simple game where computer randomly generates a number from 1 to 100 and player tries to guess what that number is.",
    link: "https://guess-the-number-tau-jet.vercel.app/",
  },
  {
    img: task,
    title: "To-Do-List",
    desc: "A to-do list is an organized, prioritized compilation of tasks or activities that need to be completed, helping individuals manage their time and responsibilities effectively.",
    link: "https://todolist-ivory-ten.vercel.app/",
  },
  {
    img: cric,
    title: "Score Card",
    desc: "A live cricket scorecard provides real-time updates on match details, including team scores, wickets, overs.",
    link: "https://cricket-xi-six.vercel.app/",
  },
  {
    img: memory,
    title: "Memory Game",
    desc: "A memory game challenges players to match pairs of cards from a face-down grid, testing and improving their recall abilities.",
    link: "https://memory-game-ten-ruby.vercel.app/",
  },
  {
    img: rock,
    title: "Rock Paper Scissor",
    desc: "Rock Paper Scissors is a simple hand game where player and computer simultaneously select one of three shapes and compete based on basic rules.",
    link: "https://rock-paper-scissor-sigma-smoky.vercel.app/",
  },
  {
    img: learn,
    title: "Learning Platform",
    desc: "This is the landing page of the learning platform, which includes the landing page, login page, and sign-up page.",
    link: "https://hackathon-three-omega.vercel.app/",
  },
];

function CenterMode() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    dots: true,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <div className="container pr">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div className="work-container-div" key={index}>
            <div
              className="work-container service"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <img src={project.img} alt={project.title} height="400px" width="400px" />
              <div className="layer">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a title="project" href={project.link} target="_blank" rel="noreferrer">
                  <i className="fa fa-external-link" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CenterMode;
