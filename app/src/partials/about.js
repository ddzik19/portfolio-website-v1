import React from "react";
import FadeInSection from "../components/fade-in-section";
import gigachad from '../assets/dot-megachx.jpg'
import useWindowDimensions from "../hooks/use-window-dimensions";

const About = () => {
  const { width, hieght } = useWindowDimensions()
  return (
    <FadeInSection>
      {width > 768 ? (
        <div className="pb-[100px] mt-[1300px]" id="home">
          <img src={gigachad} alt="placeolder" className="w-[300px] rounded-full mx-auto mt-[100px] shadow-[0_0px_20px_0px_rgba(248,6,204,0.5)]" />
          <div className="text-center md:w-[80%] lg:w-[50%] mx-auto">
            <p className="text-[#A241FF] font-semibold text-[40px] pt-[50px]">Frontend <br /> Software Engineer</p>
            <br />
            <p className="text-[22px]">
              I develop responsive websites that work smoothly across all devices,
              with a focus on user experience and performance.
            </p>
          </div>
        </div>
      ) : (
        <div className="pb-[100px] w-fit mx-10 text-center" id="home">
          <img src={gigachad} alt="placeolder" className="w-[300px] rounded-full mx-auto mt-[100px] shadow-[0_0px_20px_0px_rgba(248,6,204,0.5)]" />
          <div>
            <p className="text-[#A241FF] font-semibold text-[30px] pt-[50px]">Frontend <br /> Software Engineer</p>
            <br />
            <p className="text-[16px]">
              I develop responsive websites that work smoothly across all devices,
              with a focus on user experience and performance.
            </p>
          </div>
        </div>
      )

      }
    </FadeInSection>
  );
};
export default About;
