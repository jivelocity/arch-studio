import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "../components/HeroSection";
import HeadingMedium from "../components/HeadingMedium";
import Button from "../components/Button";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <HeroSection
        section="contact"
        title="Tell us about your project"
        description="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
      />
      <div className="flex flex-col lg:flex-row px-8 md:px-0 pb-20">
        <HeadingMedium className="mb-8 lg:mb-0">Contact Details</HeadingMedium>
        <div className="flex flex-col w-full justify-evenly lg:flex-row gap-6">
          <ContactDetails
            title="Main Office"
            email="archone@mail.com"
            address="1892 Chenoweth Drive TN"
            phone="123-456-3451"
          />
          <ContactDetails
            title="Office II"
            email="archtwo@mail.com"
            address="3399 Wines Lane TX"
            phone="832-123-4321"
          />
        </div>
      </div>
    </>
  );
}

function ContactDetails({
  title,
  email,
  address,
  phone,
}: {
  title: string;
  email: string;
  address: string;
  phone: string;
}) {
  return (
    <div className="flex flex-col gap-4 sm:gap-0 lg:gap-4 sm:flex-row lg:flex-col justify-between items-start sm:items-center ">
      <div className="flex flex-col gap-4">
        <p className="paragraf">{title}</p>
        <ul>
          <li>Mail: {email}</li>
          <li>Address: {address}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
      <Button to="#" ghost>
        View on Map
      </Button>
    </div>
  );
}
