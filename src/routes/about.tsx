import { createFileRoute } from "@tanstack/react-router";
import HeadingMedium from "../components/HeadingMedium";
import HeroSection from "../components/HeroSection";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <>
      <HeroSection
        section="about"
        title="Your team of professionals"
        description="Our small team of world-class professionals will work with you every step of the way. Strong relationships are the key to our success."
      />
      <div className="flex mb-40">
        <div className="w-full px-8 lg:px-0 lg:w-1/2 flex flex-col justify-end">
          <div className="h-0.5 w-16 bg-greyLightest"></div>
          <HeadingMedium className="mt-8">
            Our <br /> Heritage
          </HeadingMedium>
          <div className=" pt-8 lg:mt-12 flex flex-col paragraf w-full lg:max-w-md gap-4">
            <p>
              Founded in 2007, we started as a trio of architects. Our
              complimentary skills and relentless attention to detail turned
              Arch into one of the most sought after boutique firms in the
              country.
            </p>
            <p>
              Speciliazing in Urban Design allowed us to focus on creating
              exceptional structures that live in harmony with their
              surroundings. We consider every detail from every surrounding
              element to inform our designs.
            </p>
            <p>
              Our small team of world-class professionals provides input on
              every project.
            </p>
          </div>
        </div>
        <img
          src="/assets/about/desktop/image-heritage.jpg"
          alt="heritage"
          className="hidden w-1/2 lg:block"
        />
      </div>
      <div className="flex flex-col lg:flex-row mb-40 h-full w-full p-8 md:p-0">
        <div className="w-full mb-12 md:mb-16 lg:mb-0 lg:w-1/3">
          <HeadingMedium>
            The <br /> Leaders
          </HeadingMedium>
        </div>
        <div className="paragraf w-full lg:w-2/3 justify-items-stretch grid grid-cols-1 md:grid-cols-2 gap-12">
          <CardProfile
            name="Jake Richards"
            title="Chief Architect"
            img="jake"
          />
          <CardProfile
            name="Thompson Smith"
            title="Head of Finance"
            img="thompson"
          />
          <CardProfile
            name="Jackson Rourke "
            title="Lead Designer"
            img="jackson"
          />
          <CardProfile
            name="Maria Simpson"
            title="Senior Architect"
            img="maria"
          />
        </div>
      </div>
    </>
  );
}

const CardProfile = ({
  name,
  title,
  img,
}: {
  name: string;
  title: string;
  img: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <img
        className="object-cover w-full"
        src={`/assets/about/desktop/avatar-${img}.jpg`}
        alt=""
      />
      <div>
        <h3 className="text-3xl font-bold text-primary">{name}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};
