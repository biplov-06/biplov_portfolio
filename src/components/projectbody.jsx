import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TU from '../assets/textutils.png';
import calc from '../assets/calculator.jpg';
import cric from '../assets/Cricket.png';
import guess from '../assets/guess.jpeg';
import learn from '../assets/learn.png';
import memory from '../assets/memory.png';
import rock from '../assets/rock.jpg';
import task from '../assets/task.jpg';


function CenterMode() {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    dots: true,
    speed: 500,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container pr">
      <Slider {...settings}>
        <div className="work-container-div ">
          <div
            className="work-container service"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img
              src={TU}
              alt="Can't load"
              height="400px"
              width="400px"
            />
            <div className="layer">
              <h3>Text Utils</h3>
              <p>
                This tool is designed for anyone who frequently works with text
                and needs quick conversions or formatting adjustments.
              </p>
              <a title="project" href="https://biplov-06.github.io/textutils/">
                <i className="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="work-container-div ">
          <div
            className="work-container service"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img
              src={calc}
              alt="Can't load"
              height="400px"
              width="400px"
            />
            <div className="layer">
              <h3>Calculator</h3>
              <p>
              A calculator is an electronic device or software application designed to perform arithmetic operations, complex mathematical calculations, and functions quickly and accurately.
              </p>
              <a title="project" href="https://calculator-e4mb.vercel.app/">
                <i className="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="work-container-div ">
          <div
            className="work-container service"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img
              src={guess}
              alt="Can't load"
              height="400px"
              width="400px"
            />
            <div className="layer">
              <h3>Guess the number </h3>
              <p>
              The guess number game is a classic and simple game where computer randomly generates a number from 1 to 100 and player tries to guess what that number is.{" "}
              </p>
              <a
                title="project"
                href="https://guess-the-number-tau-jet.vercel.app/"
              >
                <i className="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="work-container-div  ">
          <div
            className="work-container service"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img
              src={task}
              alt="Can't load"
              height="400px"
              width="400px"
            />
            <div className="layer">
              <h3>To-Do-List </h3>
              <p>
              A to-do list is an organized, prioritized compilation of tasks or activities that need to be completed, helping individuals manage their time and responsibilities effectively.{" "}
              </p>
              <a title="project" href="https://todolist-ivory-ten.vercel.app/">
                <i className="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="work-container-div  ">
          <div
            className="work-container service"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img
              src={cric}
              alt="Can't load"
              height="400px"
              width="400px"
            />
            <div className="layer">
              <h3>Score Card</h3>
              <p>
              A live cricket scorecard provides real-time updates on match details, including team scores, wickets, overs{" "}
              </p>
              <a title="project" href="https://todolist-ivory-ten.vercel.app/">
                <i className="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="work-container-div  ">
          <div
            className="work-container service"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img
              src={memory}
              alt="Can't load"
              height="400px"
              width="400px"
            />
            <div className="layer">
              <h3>Memory Game</h3>
              <p>
              A memory game challenges players to match pairs of cards from a face-down grid, testing and improving their recall abilities.{" "}
              </p>
              <a title="project" href="https://todolist-ivory-ten.vercel.app/">
                <i className="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="work-container-div  ">
          <div
            className="work-container service"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img
              src={rock}
              alt="Can't load"
              height="400px"
              width="400px"
            />
            <div className="layer">
              <h3>Rock Paper Scissor </h3>
              <p>
              Rock Paper Scissors is a simple hand game where player and computer simultaneously select one of three shapes (rock, paper, or scissors), and the winner is determined by the rules: rock crushes scissors, scissors cuts paper, and paper covers rock.{" "}
              </p>
              <a title="project" href="https://todolist-ivory-ten.vercel.app/">
                <i className="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="work-container-div  ">
          <div
            className="work-container service"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img
              src={learn}
              alt="Can't load"
              height="400px"
              width="400px"
            />
            <div className="layer">
              <h3>learning platform </h3>
              <p>
              This is the landing page of the learning platform, which includes the landing page, login page, and sign-up page.{" "}
              </p>
              <a title="project" href="https://hackathon-three-omega.vercel.app/">
                <i className="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CenterMode;
