import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <>
      <div
        className="relative heroElem w-full pt-20 pb-20 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <p className="text-3xl mb-5">Hey, I'm Ashani Liyanagamage.</p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-3xl  w-auto relative text-lg md:text-1xl lg:text-2xl tracking-tighter mb-10 font-semiBold heroShinyBg">
          I'm a passionate <span className="heroShiny1 text-fun-purple" >Software Engineer</span> {" "}
          dedicated to crafting <span className="heroShiny2 text-fun-purple" >digital solutions.</span>
        </h1>
        <ScrollLink
          activeClass="active"
          to="learnmore"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
        </ScrollLink>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2  lg:pt-12 flex justify-center">
          <img className="rounded-md object-cover w-55 h-40" src="https://res.cloudinary.com/dsqosc2ig/image/upload/v1703105160/portfolio/PXL_20231012_090507717.MP_4_fzq5ra.jpg" alt="Rounded avatar"/>
        </div>
        <div className="w-full sm:w-1/2 sm:pt-5 p-4 justify-center ">
          <h1 className="text-lg md:text-xl lg:text-2xl tracking-tighter font-bold lg:text-left sm:text-center pb-5">Who am I?</h1>
          <p className="text-sm md:text-md lg:text-lg lg:text-left sm:text-center pb-4">Hey there! I'm Ashani, a final-year undergraduate student pursuing a BSc (Hons) degree in Software Engineering at <span className="heroShiny1 text-fun-purple" >University of Colombo School of Computing (UCSC)</span>.</p>
          <p className="text-sm md:text-md lg:text-lg lg:text-left sm:text-center">I'm a <span className="heroShiny1 text-fun-purple" >full-stack developer,</span> adept at creating web applications from scratch to live production.</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
