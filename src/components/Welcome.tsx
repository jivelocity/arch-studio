import HeadingMedium from "./HeadingMedium";

export default function Welcome() {
  return (
    <div className="px-8 md:px-0 mb-28 relative overflow-hidden">
      <span className="text-greyLightest top-0 left-0 absolute font-bold leading-none text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[250px]">
        Welcome
      </span>
      <div className="xl:pl-161 flex justify-between">
        <div className="mt-24 md:mt-[8rem] lg:mt-[12rem]">
          <HeadingMedium>
            Welcome to <br /> Arch Studio
          </HeadingMedium>
          <div className=" mt-8 lg:mt-12 flex flex-col paragraf w-full lg:max-w-md gap-4">
            <p>
              We have a unique network and skillset to help bring your projects
              to life. Our small team of highly skilled individuals combined
              with our large network put us in a strong position to deliver
              exceptional results.
            </p>
            <p>
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that
              inspire and delight.
            </p>
            <p>
              We work closely with our clients so that we understand the
              intricacies of each project. This allows us to work in harmony the
              surrounding area to create truly stunning projects that will stand
              the test of time.
            </p>
          </div>
        </div>
        <img
          className="w-96 self-end hidden lg:block"
          src="/assets/home/desktop/image-welcome.jpg"
          alt="welcome"
        />
      </div>
    </div>
  );
}
