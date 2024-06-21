import React from "react";

function CTA() {
  return (
    <div className="pt-36 relative w-full">
      <div className="pt-14 pb-40">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Interested in Working Together?
        </h2>
        <a
          href="mailto:ashaniimalsha26@gmail.com"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-purple hover:border-fun-purple transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}

export default CTA;
