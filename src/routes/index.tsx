import { createFileRoute } from "@tanstack/react-router";
import Button from "../components/Button";
import Card from "../components/Card";
import HeadingMedium from "../components/HeadingMedium";
import HeroSlide from "../components/HeroSlide";
import Welcome from "../components/Welcome";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <>
      <HeroSlide />
      <Welcome />
      {/* About */}
      <div className="mb-28 relative w-full h-[560px]">
        <img
          className="w-full h-[560px] object-cover absolute z-[1]"
          alt="about section"
          src="/assets/home/desktop/image-small-team.jpg"
        />
        <div
          className="
            text-white 
            w-full h-full 
            bg-black/40 
            z-[2] 
            absolute
            flex items-center
            xl:pl-161
            md:pl-12 pl-8"
        >
          <div className="flex flex-col justify-center items-start">
            <HeadingMedium>
              Small team,
              <br /> big ideas
            </HeadingMedium>
            <Button to="/about" className="mt-8">
              About Us
            </Button>
          </div>
        </div>
      </div>
      {/* Featured */}
      <div className="pb-28 px-8 md:px-0">
        <div className="flex items-center justify-between">
          <HeadingMedium className="mt-3">Featured</HeadingMedium>
          <Button to="/portfolio" className="hidden sm:flex">
            See All
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <Card title="Project Del Sol" image="image-del-sol.jpg" index="1" />
          <Card title="228B Tower" image="image-228b.jpg" index="2" />
          <Card title="Le Prototype" image="image-prototype.jpg" index="3" />
        </div>
        <Button
          to="/portfolio"
          className="sm:hidden flex w-full justify-center mt-8"
        >
          See All
        </Button>
      </div>
    </>
  );
}
