import { useGSAP } from "@gsap/react";
import leftLeafImg from "../../public/images/hero-left-leaf.png";
import rightLeafImg from "../../public/images/hero-right-leaf.png";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import iceCubeVideo from '../../public/videos/output.mp4';
import { useRef } from "react";

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    const titleAnimate = new SplitText("#title", { type: "chars, words" });
    const paraAnimate = new SplitText("#subtitle", { type: "lines" });
    titleAnimate.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(titleAnimate.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
    });
    gsap.from(paraAnimate.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);

    const videoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: "center 70%",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });
    videoRef.current.onloadedmetadata = () => {
      videoTimeline.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);

  return (
    <div>
      <section
        id="hero"
        className="relative z-10 min-h-dvh w-full border border-transparent noisy"
      >
        <h1
          id="title"
          className="md:mt-32 mt-40 text-8xl md:text-[20vw] leading-none text-center font-modern-negra"
          style={{
            fontFamily: "Macondo"
          }}
        >
          MOJITO
        </h1>

        <img
          src={leftLeafImg}
          alt=""
          className="absolute left-0 md:top-20 xl:top-36 2xl:top-52 md:bottom-auto -bottom-20 md:w-auto w-1/3 left-leaf"
        />
        <img
          src={rightLeafImg}
          alt=""
          className="absolute right-0 md:bottom-0 xl:top-0 2xl:top-12 top-1/2 md:w-auto w-24 right-leaf"
        />

        <div className="container mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-20 top-auto md:top-[30vh] flex justify-between items-end px-5 body">
          <div className="flex lg:flex-row flex-col w-full gap-10 justify-between items-center lg:items-end mx-auto content">
            {/* LEFT CONTENT */}
            <div className="space-y-5 hidden md:block">
              <p>Cool Crisp Classis</p>
              <p
                id="subtitle"
                className="font-modern-negra text-6xl text-yellow max-w-xl"
              >
                Sip the spirit <br /> of summer
              </p>
            </div>

            {/* RIGHT CONTENT */}
            <div className="space-y-5 text-lg lg:max-w-2xs md:max-w-xs w-full view-cocktails">
              <p id="subtitle" className="text-left">
                Every cocktails on our menu is the blend of premium ingredients,
                creative, flair and timeless recipies - design to delight your
                senses.
              </p>
              <a
                href="#cocktails"
                className="font-semibold opacity-80 2xl:text-start text-center hover:text-yellow"
              >
                View Cocktails
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <div className="w-full md:h-[80%] h-1/2 absolute bottom-0 left-0 video">
        <video
          src={iceCubeVideo}
          preload="auto"
          playsInline
          ref={videoRef}
          className="mix-blend-screen w-full md:h-[80%] h-1/2 absolute bottom-0 left-0 md:object-contain object-bottom object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
