import React from "react";
import { cn } from "../lib/utils";
import Button from "./Button";

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
  const currentSlide = slideContent[index];
  return (
    <div className="relative md:mx-0 w-full h-[720px] mb-28">
      <img
        className="object-cover absolute w-full h-[720px] z-[1]"
        src={currentSlide.image}
        alt="hero"
      />
      <div
        className="
        text-white 
        w-full h-full 
        bg-black/30 
        z-[2] 
        absolute
        flex items-center
        xl:pl-161
        md:pl-12 pl-8"
      >
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-bold text-5xl md:text-8xl max-w-8 md:max-w-[32rem] md:leading-20">
            {currentSlide.title}
          </h1>
          <p className="font-medium text-lg max-w-md">
            {currentSlide.description}
          </p>
          <Button className="mt-8">See Our Portfolio</Button>
        </div>
      </div>
      <div className="absolute -ml-20 bottom-0 left-0 z-[2] hidden xl:flex">
        {slideContent.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn(
              "w-20 h-20 flex items-center justify-center bg-white text-greyMedium transition duration-150 hover:bg-greyLightest font-bold text-lg",
              i === index && "bg-primary text-white hover:bg-primary",
            )}
          >
            0{i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
