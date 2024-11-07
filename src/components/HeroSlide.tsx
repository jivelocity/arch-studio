import React, { useEffect } from "react";
import { cn } from "../lib/utils";
import Button from "./Button";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useSpring,
} from "framer-motion";

const slideContent = [
  {
    title: "Project Paramour",
    description:
      "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    image: "/assets/home/desktop/image-hero-paramour.jpg",
  },
  {
    title: "Seraph Station",
    description:
      "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    image: "/assets/home/desktop/image-hero-seraph.jpg",
  },
  {
    title: "Federal II Tower",
    description:
      "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    image: "/assets/home/desktop/image-hero-federal.jpg",
  },
  {
    title: "Trinity Bank Tower",
    description:
      "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    image: "/assets/home/desktop/image-hero-trinity.jpg",
  },
];

export default function HeroSlide() {
  const [index, setIndex] = React.useState(0);
  let x = index * 100;
  let xSpring = useSpring(x, { bounce: 0 });
  let xPercentage = useMotionTemplate`-${xSpring}%`;

  useEffect(() => {
    xSpring.set(x);
  }, [x, xSpring]);

  useEffect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      if (e.key === "ArrowLeft" && index > 0) {
        setIndex(index - 1);
      } else if (e.key === "ArrowRight" && index < slideContent.length - 1) {
        setIndex(index + 1);
      }
    }
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slideContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:mx-0 relative w-full h-[720px] mb-28">
      <AnimatePresence mode="popLayout" initial={false}>
        <div className="w-full h-full overflow-hidden">
          <motion.div style={{ x: xPercentage }} className="flex w-full h-full">
            {slideContent.map((slide, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: i === index ? 1 : 0.4 }}
                transition={{ duration: 1.5, type: "spring", bounce: 0 }}
                className="w-full h-full relative flex-shrink-0"
              >
                <img
                  className="object-cover absolute w-full h-[720px] brightness-50 z-[1]"
                  src={slide.image}
                  alt={slide.title}
                />
                <div className="text-white w-full h-full z-[2] absolute flex items-center xl:pl-161 md:pl-12 pl-8">
                  <div className="flex flex-col justify-center items-start">
                    <h1 className="font-bold text-5xl md:text-8xl max-w-xs md:max-w-[32rem] md:leading-20">
                      {slide.title}
                    </h1>
                    <p className="font-medium text-lg max-w-md">
                      {slide.description}
                    </p>
                    <Button to="/portfolio" className="mt-8">
                      See Our Portfolio
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatePresence>
      <div className="absolute xl:-ml-20 bottom-0 xl:left-0 z-[2] flex right-0">
        {slideContent.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn(
              "w-20 h-20 relative flex items-center justify-center bg-white text-greyMedium transition duration-150 hover:bg-greyLightest font-bold text-lg",
              i === index && "text-white",
            )}
          >
            <span className="z-[2]">0{i + 1}</span>
            {i === index && (
              <motion.div
                layoutId="indexHighlight"
                className="w-full h-full z-[1] absolute bg-primary"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
