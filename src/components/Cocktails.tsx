import { useGSAP } from "@gsap/react";
import leftLeafImg from "../../public/images/cocktail-left-leaf.png";
import rightLeafImg from "../../public/images/cocktail-right-leaf.png";
import gsap from "gsap";

function Cocktails() {
  useGSAP(() => {
    gsap.from(["#c-left-leaf", "#c-right-leaf"], {
      x: (i) => (i === 0 ? -100 : 100),
      y: 100,
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });
  });

  return (
    <section
      id="cocktails"
      className="relative min-h-dvh w-full overflow-hidden noisy"
    >
      <img
        src={leftLeafImg}
        alt=""
        id="c-left-leaf"
        className="absolute left-0 md:bottom-0 md:top-auto -top-20 md:w-auto w-1/3"
      />
      <img
        src={rightLeafImg}
        alt=""
        id="c-right-leaf"
        className="absolute right-0 md:bottom-0 md:top-auto -top-20 md:w-auto w-1/3"
      />

      <div className="container mx-auto relative z-10 flex md:flex-row flex-col justify-between items-start gap-20 pt-40 2xl:px-0 px-5">
        {/* POPULAR COCKTAILS */}
        <div className="space-y-8 w-full md:w-auto">
          <h2 className="text-xl font-medium">Most popular cocktails</h2>
          <ul className="space-y-8">
            {[
              { name: "Chapel Hill Shiraz", country: "AU", detail: "Battle", price: "$10" },
              { name: "Caten Malbee", country: "AU", detail: "Battle", price: "$49" },
              { name: "Rhino Pale Ale", country: "CA", detail: "750 ml", price: "$20" },
              { name: "Irish Guinness", country: "IE", detail: "600 ml", price: "$29" },
            ].map((item) => (
              <li key={item.name} className="flex justify-between items-start">
                <div className="me-28">
                  <h3 className="font-modern-negra 2xl:text-3xl text-xl text-yellow">
                    {item.name}
                  </h3>
                  <p className="text-sm">
                    {item.country} | {item.detail}
                  </p>
                </div>
                <span className="text-xl font-medium">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* LOVED MOCKTAILS */}
        <div className="space-y-8 w-full md:w-auto pb-20 md:pb-0">
          <h2 className="text-xl font-medium">Most loved mocktails</h2>
          <ul className="space-y-8">
            {[
              { name: "Tropical Bloom", country: "US", detail: "Battle", price: "$10" },
              { name: "Passionfruit Mint", country: "US", detail: "Battle", price: "$49" },
              { name: "Citrus Glow", country: "CA", detail: "750 ml", price: "$20" },
              { name: "Lavender Fizz", country: "IE", detail: "600 ml", price: "$29" },
            ].map((item) => (
              <li key={item.name} className="flex justify-between items-start">
                <div className="me-28">
                  <h3 className="font-modern-negra 2xl:text-3xl text-xl text-yellow">
                    {item.name}
                  </h3>
                  <p className="text-sm">
                    {item.country} | {item.detail}
                  </p>
                </div>
                <span className="text-xl font-medium">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Cocktails;
