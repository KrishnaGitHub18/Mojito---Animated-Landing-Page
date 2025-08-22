import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import img1 from "../../public/images/abt1.png";
import img2 from "../../public/images/abt2.png";
import img3 from "../../public/images/abt3.png";
import img4 from "../../public/images/abt4.png";
import img5 from "../../public/images/abt5.png";

function About() {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", { type: "words" });
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
         start: "top 60%",
        end: "bottom 100%",
        scrub: true
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        stagger: 0.02,
      })
      .from(
        ".top-grid, .bottom-grid",
        {
          opacity: 0,
          duration: 1,
          stagger: 0.5,
        },
        "-=0.5"
      );
  });

  return (
    <div id="about" className="px-5 py-16">
      {/* top text */}
      <div className="grid grid-cols-12 gap-6 mb-16">
        <div className="col-span-8">
          <p className="uppercase tracking-wide text-yellow-400 text-sm mb-2">
            Best Cocktails
          </p>
          <h2 className="text-4xl font-serif">
            Where every detail matters
            <span className="text-white"> - </span>
            from muddle to garnish
          </h2>
        </div>
        <div className="col-span-4 flex items-end">
          <p className="text-gray-300 text-base">
            Every cocktail we serve is a reflection of our obsession with detail
            — from the first muddle to the final garnish. That care is what
            turns a simple drink into something truly memorable.
          </p>
        </div>
      </div>

      {/* top image grid */}
      <div className="top-grid grid grid-cols-12 gap-6 mb-6">
        <div className="col-span-3 relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <img src={img1} alt="Cocktail 1" className="w-full h-auto rounded-xl" />
        </div>
        <div className="col-span-6 relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <img src={img2} alt="Cocktail 2" className="w-full h-auto rounded-xl" />
        </div>
        <div className="col-span-3 relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <img src={img5} alt="Cocktail 5" className="w-full h-auto rounded-xl" />
        </div>
      </div>

      {/* bottom image grid */}
      <div className="bottom-grid grid grid-cols-12 gap-6">
        <div className="col-span-8 relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <img src={img3} alt="Cocktail 3" className="w-full h-auto rounded-xl" />
        </div>
        <div className="col-span-4 relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <img src={img4} alt="Cocktail 4" className="w-full h-auto rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default About;
