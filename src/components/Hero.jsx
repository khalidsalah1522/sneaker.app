import { useEffect } from "react";
import SwitchSneaker from "./Home/SwitchSneaker";
import { gsap } from "gsap";

function Hero() {
  let timeLine = gsap.timeline();
  let handleSneakerSwitch = (s) => {
    let sneakersContianer = document.querySelector(".img-container");
    sneakersContianer.style.willChange = "transform";
    sneakersContianer.style.transform = `translateX(${s}%)`;
  };

  useEffect(() => {
    timeLine.to(".hero-container div span", {
      autoAlpha: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.2,
    });
  }, [timeLine]);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="new">
          <div>
            <span>N</span>
          </div>
          <div>
            <span>e</span>
          </div>
          <div>
            <span>w</span>
          </div>
        </div>
        <div className="arrivals">
          <div>
            <span>A</span>
          </div>
          <div>
            <span>r</span>
          </div>
          <div>
            <span>r</span>
          </div>
          <div>
            <span>i</span>
          </div>
          <div>
            <span>v</span>
          </div>
          <div>
            <span>a</span>
          </div>
          <div>
            <span>l</span>
          </div>
          <div>
            <span>s</span>
          </div>
        </div>
      </div>
      <div className="sneaker-switcher">
        <ul>
          <li onClick={() => handleSneakerSwitch(0)}></li>
          <li onClick={() => handleSneakerSwitch(-33.333333)}></li>
          <li onClick={() => handleSneakerSwitch(-66.666666)}></li>
        </ul>
      </div>
      <SwitchSneaker />
    </section>
  );
}

export default Hero;
