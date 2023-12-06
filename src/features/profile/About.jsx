import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import {
  faPython,
  faNfcDirectional,
  faInvision,
} from "@fortawesome/free-brands-svg-icons";
import { faBrain, faTowerCell } from "@fortawesome/free-solid-svg-icons";
import "./about.scss";

export default function About() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className="grid lg:grid-cols-2 gap-6 lg:gap-y-0 h-full"
        id="about_page"
      >
        {/* left section */}
        <div className="my-auto">
          <div>
            <h1 className="mb-6">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                idx={15}
              />
            </h1>

            <p>
              AI Engineer with a strong desire to tackle complex business
              problems and a proven track record of success in building diverse
              algorithms.
            </p>
            <br />

            <p>
              They possess expertise in machine learning, encompassing both
              predictive and generative models, including large language models.
            </p>
            <br />

            <p>
              Their skill set extends beyond machine learning, showcasing
              proficiency in natural language processing, computer vision, web
              scraping, web automation, data exploration, and data analysis
              using Python and SQL, making them a versatile and valuable asset
              for any organization seeking to leverage AI solutions.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="my-auto mx-auto py-52 lg:py-0">
          <div className="cube_spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNfcDirectional} color="#f06529" />
            </div>

            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#28A4D9" />
            </div>

            <div className="face3">
              <FontAwesomeIcon icon={faInvision} color="#28a4d9" />
            </div>

            <div className="face4">
              <FontAwesomeIcon icon={faPython} color="#28A4D9" />
            </div>

            <div className="face5">
              <FontAwesomeIcon icon={faBrain} color="#28A4D9" />
            </div>

            <div className="face6">
              <FontAwesomeIcon icon={faTowerCell} color="#efd81d" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
