import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
              src="../src/assets/textutils.png"
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
              src="../src/assets/calculator.jpg"
              alt="Can't load"
              height="400px"
              width="400px"
            />
            <div className="layer">
              <h3>Calculator</h3>
              <p>
                This tool is designed for anyone who frequently works with text
                and needs quick conversions or formatting adjustments.
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
              src="../src/assets/guess.jpeg"
              alt="Can't load"
              height="400px"
              width="400px"
            />
            <div className="layer">
              <h3>Guess the number </h3>
              <p>
                This tool is designed for anyone who frequently works with text
                and needs quick conversions or formatting adjustments.{" "}
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
              src="../src/assets/task.jpg"
              alt="Can't load"
              height="400px"
              width="400px"
            />
            <div className="layer">
              <h3>To-Do-List </h3>
              <p>
                This tool is designed for anyone who frequently works with text
                and needs quick conversions or formatting adjustments.{" "}
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
              src="../src/assets/Cricket.png"
              alt="Can't load"
              height="400px"
              width="400px"
            />
            <div className="layer">
              <h3>Cricket</h3>
              <p>
                This tool is designed for anyone who frequently works with text
                and needs quick conversions or formatting adjustments.{" "}
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
              src="../src/assets/memory.png"
              alt="Can't load"
              height="400px"
              width="400px"
            />
            <div className="layer">
              <h3>Memory Game</h3>
              <p>
                This tool is designed for anyone who frequently works with text
                and needs quick conversions or formatting adjustments.{" "}
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
              src="../src/assets/rock.jpg"
              alt="Can't load"
              height="400px"
              width="400px"
            />
            <div className="layer">
              <h3>Rock Paper Scissor </h3>
              <p>
                This tool is designed for anyone who frequently works with text
                and needs quick conversions or formatting adjustments.{" "}
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
              src="../src/assets/learn.png"
              alt="Can't load"
              height="400px"
              width="400px"
            />
            <div className="layer">
              <h3>learning platform </h3>
              <p>
                This tool is designed for anyone who frequently works with text
                and needs quick conversions or formatting adjustments.{" "}
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
