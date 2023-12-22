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
          {/* <img
            className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
            style={{ animationDelay: "0.1s" }}
            src="/static/doodles/hero/html.svg"
          />
          <img
            className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11"
            style={{ animationDelay: "0.2s" }}
            src="/static/doodles/hero/nextjs.svg"
          />
          <img
            className="sqD bottom-[-300px] -right-1/4 sm:right-[-20%] lg:bottom-[-310px] lg:right-[-120px] w-[400px]"
            style={{ animationDelay: "0.3s" }}
            src="/static/doodles/hero/brayden.svg"
          />
          <img
            className="sqD hidden sm:block bottom-[-340px] left-[-180px]"
            style={{ animationDelay: "0.4s" }}
            src="/static/doodles/hero/coder.svg"
          />
          <img
            className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px]"
            style={{ animationDelay: "0.5s" }}
            src="/static/doodles/hero/js.svg"
          />
          <img
            className="sqD bottom-[-320px] right-[65%] sm:right-[45%]"
            style={{ animationDelay: "0.6s" }}
            src="/static/doodles/hero/dino.svg"
          />
          <img
            className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]"
            style={{ animationDelay: "0.7s" }}
            src="/static/doodles/hero/paintbrush.svg"
          />
          <img
            className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
            src="/static/doodles/hero/pop1.svg"
          />
          <img
            className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
            style={{ animationDelay: "0.9s" }}
            src="/static/doodles/hero/code.svg"
          /> */}
        </h1>
        <ScrollLink
          activeClass="active"
          to="learnmore"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
          {/* <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
            Tell me more
          </div> */}
          {/* <img className="rounded-full object-cover w-36 h-36" src="https://res.cloudinary.com/dsqosc2ig/image/upload/v1703105160/portfolio/PXL_20231012_090507717.MP_4_fzq5ra.jpg" alt="Rounded avatar"/> */}
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
