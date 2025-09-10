import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import Dot from "./Dot";
import Tech from "./Tech";
import Sync from "./Sync";
import Design from "./Design";
import Stripe from "./Stripe";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

import "./style.css";

const IntroAnimation = ({ onSkip = () => {} }) => {
  const syncS = useRef(null);
  const designD = useRef(null);
  const dotD = useRef(null);
  const techT = useRef(null);
  const stripe = useRef(null);
  const div = useRef(null);
  const ethos = useRef(null);
  let s, d, t, dot, dg, sg, tg, line;

  const [scale, setScale] = useState("100%");

  const [fade, setFade] = useState(false); // true means visible, false means invisible
  const [stripes, setStripes] = useState([]);
  const [svgStripes, setSvg] = useState(null);
  const [position, setPosition] = useState("fixed");
  gsap.ticker.lagSmoothing(1000, 16);

  const [timeOuts] = useState(4);
  const [timeInitial] = useState(2);

  const messages = [
    "Elevate Your Presence, Extend Your Reach.",
    "Your Brand, Your Ideas, Your Identity ",
    // "Unleash Full Potential",
  ];

  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  let colors = [
    // "#000",
    "#00A5B7", //cyan
    // "#fff",
    "#F9CF09",
  ];
  let colorBackground = [
    "#263238",
    "#323131",
    // "transparent",
    // "#000",
    // "#323131"
  ];

  const [startAni, setStartAni] = useState(false);
  const [ballStart, setBallStart] = useState(false);
  let array = [];

  // FIRST PART ANIMATION

  useEffect(() => {
    s = syncS.current.element1;
    d = designD.current.element1;
    t = techT.current.element1;
    dot = dotD.current;

    dg = designD.current.element2;
    sg = syncS.current.element2;
    tg = techT.current.element2;

    line = stripe.current;

    gsap.set(s, { fill: "#fff" });
    gsap.set(d, { fill: "#fff" });
    gsap.set(t, { fill: "#fff" });

    gsap.set(dot, { fill: "#fff", opacity: 1 });
    gsap.set(sg, { fill: "#fff", opacity: 1 });
    gsap.set(dg, { fill: "#fff", opacity: 1 });
    gsap.set(tg, { fill: "#fff", opacity: 1 });

    const animateIntro = (tag, x, y) => {
      const tl = gsap.timeline();
      tl.delay(1).to(tag, {
        x: x,
        y: y,
        scale: 1.5,
        ease: "power2.inOut",
        yoyo: true,
        duration: timeInitial,
        onComplete: () => {
          setStartAni(true);
        },
      });
    };

    const animateOpacity = (x) => {
      const tl = gsap.timeline();
      tl.delay(1).to(x, {
        opacity: 0,
        ease: "power2.inOut",
        duration: timeInitial,
      });
    };

    const animateDotScale = (x) => {
      const tl = gsap.timeline();
      tl.delay(1).to(x, {
        scale: 1.3,
        ease: "power2.inOut",
        duration: 0.3,
        transformOrigin: "center center",
      });
      tl.to(x, {
        scale: 0,
        ease: "power2.inOut",
        duration: 0.3,
        transformOrigin: "center center",
      });
    };

    function firstAnimation() {
      animateIntro(s, 550, -35);
      animateIntro(d, 218, -50);
      animateIntro(t, -255, -50);

      animateOpacity(sg);
      animateOpacity(dg);
      animateOpacity(tg);
      animateDotScale(dot);
    }

    const translate100 = Array.from({ length: 12 }, (_, i) => i * 800);
    const translate200 = Array.from({ length: 25 }, (_, i) => i * 400);

    array.push(line);

    const svg = document.getElementById("Patterns");
    setSvg(svg);

    function createTranslatedRects(translateArray, rectId) {
      translateArray.forEach((translateX) => {
        const clone = line.cloneNode();
        stripe.current = clone;
        array.push(stripe.current);
        clone.setAttribute(
          "transform",
          `translate(${-translateX + 4000}, 2500) rotate(-45)`,
        );
        svg.appendChild(clone);
      });
    }

    const tl = gsap.timeline();
    const animateStripes = (x) => {
      setTimeout(() => {
        firstAnimation();
      }, 1000);
      tl.delay(1).to(x, {
        height: 0,
        ease: "power2.inOut",
        duration: 1,
        // fill: colorBackground[index % 4]
        transformOrigin: "center center",
      });
    };

    createTranslatedRects(translate100, "lineComponent");
    createTranslatedRects(translate200, "lineComponent");

    animateStripes(array);
    setStripes(array);
  }, []);

  // SECOND PART ANIMATION

  useEffect(() => {
    s = syncS.current.element1;
    d = designD.current.element1;
    t = techT.current.element1;
    dot = dotD.current;

    dg = designD.current.element2;
    sg = syncS.current.element2;
    tg = techT.current.element2;

    let bg = div.current;

    gsap.set(bg, { color: "#000" });

    if (!startAni) return;

    const stripesIn = (x, h, color, d, r) => {
      // const tlr = gsap.timeline();
      // tlr.delay(d-1).to(x, {
      //     durantion: 0,
      //     rotate: r,
      //     transformOrigin: "50%",
      // });
      const tls = gsap.timeline();
      tls.delay(d).to(x, {
        height: h,
        ease: "power2.inOut",
        duration: 1,
        fill: color,
      });
    };

    const animateColors = (x, background) => {
      let tls = [];
      let tlc = [];
      let tlb = [];
      if (background) {
        colorBackground.forEach((color, index) => {
          // stripesIn(stripes, 500, color, index*timeOuts-.5, index*60);
          // stripesIn(stripes, 0, color, index*timeOuts+.5, index*60);
          const tl = gsap.timeline();
          tl.delay(index * timeOuts);
          tlb.push(
            tl.to(x, {
              backgroundColor: color,
              ease: "power2.inOut",
              duration: timeOuts / timeOuts,
            }),
          );
        });
      } else {
        colors.forEach((color, index) => {
          const tl = gsap.timeline();
          tl.delay(index * timeOuts);
          if (x instanceof HTMLDivElement) {
            tlc.push(
              tl.to(x, {
                color: color,
                opacity: 1,
                ease: "power2.inOut",
                duration: timeOuts / timeOuts,
              }),
            );
          } else {
            tls.push(
              tl.to(x, {
                fill: color,
                ease: "power2.inOut",
                duration: timeOuts / timeOuts,
              }),
            );
          }
        });
      }
    };

    const showMessage = () => {
      let index = 0;
      setFade(true);
      const interval = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          index = (index + 1) % messages.length;
          setCurrentMessage(messages[index]);
          setFade(true);
          if (index === messages.length - 1) {
            clearInterval(interval);
            setTimeout(() => {
              setFade(false);
              setTimeout(() => {
                adjustSvgPosition();
              }, 1000);
            }, 3000);
          }
        }, 500);
      }, timeOuts * 1000);

      return () => {
        clearInterval(interval);
      };
    };

    function colorChange() {
      animateColors(bg, true);
      animateColors(s, false);
      animateColors(d, false);
      animateColors(t, false);
      animateColors(ethos.current, false);
    }

    showMessage();
    colorChange();
  }, [startAni]);

  const adjustSvgSize = () => {
    div.current.classList.add("slide-down");
    setTimeout(() => onSkip(false), 1000);
  };

  const adjustSvgPosition = () => {
    // setPosition("relative");
    adjustSvgSize();
    setBallStart(true);
  };

  useEffect(() => {
    if (!ballStart) return;
    function dotScale(x) {
      const tl = gsap.timeline();
      tl.delay(1).to(x, {
        scale: 3,
        ease: "power2.inOut",
        duration: 0.2,
        transformOrigin: "center center",
      });
      tl.to(x, {
        scale: 2,
        ease: "power2.inOut",
        duration: 0.3,
        transformOrigin: "center center",
      });
    }
    dot = dotD.current;
    dotScale(dot);
  }, [ballStart]);

  const arrowRef = useRef(null);
  const textRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    // Create a timeline for the animation
    tl.current = gsap.timeline({ paused: true });

    // Rotate and scale up the arrow with accelerating speed
    tl.current.to(
      arrowRef.current,
      {
        duration: 2,
        rotation: 1080, // 3 spins
        scale: 1.5,
        ease: "power2.in", // Accelerate
      },
      0,
    );

    // Type in "Skip"
    tl.current.to(
      textRef.current,
      {
        duration: 1.5,
        text: "Skip",
        ease: "none",
      },
      0.5,
    );

    // Rotate and scale back the arrow with decelerating speed
    tl.current.to(
      arrowRef.current,
      {
        duration: 2,
        rotation: "+=720", // 2 more spins
        scale: 1,
        ease: "power2.out", // Decelerate
      },
      2,
    );

    // Rotate back to 0 degrees smoothly
    tl.current.to(
      arrowRef.current,
      {
        duration: 1,
        rotation: 0,
        ease: "power2.out",
      },
      4,
    );

    // Hide "Skip" text after animation
    tl.current.to(
      textRef.current,
      {
        duration: 0.5,
        text: "",
        ease: "none",
      },
      4.5,
    );
  }, []);

  const handleMouseEnter = () => {
    tl.current.restart();
  };

  const handleOnSkip = () => {
    div.current.classList.add("slide-down");
    setTimeout(() => onSkip(false), 1000);
  };

  return (
    <div
      style={{
        transformOrigin: "top center",
        transition: "all 1s ease 1s",
        zIndex: "100",
        height: "100vh",
        width: "100vw",
        display: "flex",
        position: position,
      }}
      className="bg-none"
    >
      <div
        ref={div}
        style={{ transformOrigin: "top center", height: "100%" }}
        className="background-container w-[100%]"
      >
        <Link
          className="logo-animation-container logo h-[100%] w-[100%]"
          href="/"
          onClick={handleOnSkip}
        >
          <Sync ref={syncS} />
          <Design ref={designD} />
          <Dot ref={dotD} />
          <Tech ref={techT} />
          <Stripe ref={stripe} />
        </Link>
        <div ref={ethos} className="intro-message">
          <h1
            style={{
              opacity: fade ? 1 : 0,
              transition: "opacity .5s",
              color: "inherit",
            }}
          >
            {currentMessage}
          </h1>
        </div>
      </div>
      {/* Skip Arrow */}
      <div
        style={{
          position: "absolute",
          bottom: "100px",
          left: "90%",
          transform: "translateX(-50%) rotate(90deg)",
          zIndex: "1000",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          userSelect: "none",
        }}
        onClick={handleOnSkip}
        onMouseEnter={handleMouseEnter}
      >
        <svg
          ref={arrowRef}
          width="48" // Increased size for better visibility
          height="48"
          viewBox="0 0 24 24"
          style={{ flexShrink: 0 }}
        >
          <path d="M12 2L18 12H13V18H11V12H6L12 2Z" fill="#fff" />
        </svg>
        <div
          ref={textRef}
          style={{
            marginLeft: "12px",
            color: "#fff",
            fontFamily: '"Museo Sans", sans-serif', // Updated font
            fontSize: "24px",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {/* Text will be typed in */}
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;

// <div className="flex hidden flex-row justify evenly">
//     <Link to="/aboutUs">About Us</Link>
//     <Link to="/projects">Projects</Link>
// </div>

// <Link className='absolute logo h-[100%] w-[100%]' to="/">
//     <Sync ref={syncS} />
//     <Design ref={designD} />
//     <Dot ref={dotD} />
//     <Tech ref={techT} />
// </Link>
// <div className="flex hidden flex-row">
//     <Link to="/contact">Contact</Link>
//     <Link to="/intro">Play</Link>
// </div>

// STRIPE ANIMATION
// const animateStripes = (x) => {
//     x.forEach((item, index) => {

//         if (index === 37) {
//             setTimeout(()=> {
//             x.forEach((item, index) => {
//                 if (index === 37) {
//                     setTimeout(()=> {firstAnimation()}, index/20 * 1000);
//                 }
//                 console.log(index)
//                 const tl = gsap.timeline();
//                 tl.delay(index / 20).to(item, {
//                     height: 0,
//                     ease: 'power2.inOut',
//                     duration: .1,
//                     // fill: colorBackground[index % 4]
//                 });
//             });
//             }, index/20 * 500);
//         }

//         const tl = gsap.timeline();
//         tl.delay(index / 20).to(item, {
//             height: 150,
//             ease: 'power2.inOut',
//             duration: .1,
//             // fill: colorBackground[index % 4]
//         });
//     });
// };
