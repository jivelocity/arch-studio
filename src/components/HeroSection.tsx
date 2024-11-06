import HeadingMedium from "./HeadingMedium";

export default function HeroSection({
  section,
  title,
  description,
}: {
  section: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col overflow-hidden lg:flex-row items-end mb-40">
      <div className="z-[1] relative w-full h-[720px] lg:w-2/3">
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet={`/assets/${section}/mobile/image-hero.jpg`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`/assets/${section}/tablet/image-hero.jpg`}
          />
          <source
            media="(min-width: 1024px)"
            srcSet={`/assets/${section}/desktop/image-hero.jpg`}
          />
          <img
            src={`/assets/${section}/mobile/image-hero.jpg`}
            alt="logo"
            className="brightness-75 w-full h-2/3 md:h-full object-cover"
          />
        </picture>
        <div className="w-full pr-8 sm:pl-8 sm:pr-0 md:pl-20 absolute bottom-0 lg:hidden block z-[2]">
          <div className="relative pb-0 pt-20 lg:py-20 px-8 h-full bg-white w-full">
            <span className="absolute inline leading-none -top-16 right-10 font-bold text-nowrap text-9xl text-greyLightest capitalize ">
              {section}
            </span>
            <div className="h-0.5 w-16 bg-greyLightest"></div>
            <div className="flex flex-col gap-8 lg:gap-12">
              <HeadingMedium className="mt-4 md:mt-8 xl:mt-10">
                {title}
              </HeadingMedium>
              <p className="paragraf">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full hidden lg:block lg:w-2/3 ml-0 lg:-ml-24 xl:-ml-32 z-[2]">
        <div className="relative lg:pl-32 xl:pl-40 py-0 lg:py-16 xl:py-20 h-full bg-white w-full">
          <span className="absolute inline leading-none lg:-top-20 xl:-top-32 lg:left-0 font-bold text-nowrap text-9xl lg:text-[180px] xl:text-[250px] text-greyLightest">
            About
          </span>
          <div className="h-0.5 w-16 bg-greyLightest"></div>
          <div className="flex flex-col gap-12">
            <HeadingMedium className="mt-8 xl:mt-10">
              Your team of <br /> professionals
            </HeadingMedium>
            <p className="paragraf">
              Our small team of world-class professionals will work with you
              every step of the way. Strong relationships are at the core of
              everything we do. This extends to the relationship our projects
              have with their surroundings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
