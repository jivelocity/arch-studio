import { useLocation } from "@tanstack/react-router";
import React from "react";

export default function PathLocation() {
  const location = useLocation();
  const [locationName, setLocationName] = React.useState(location.pathname);

  React.useEffect(() => {
    switch (location.pathname) {
      case "/":
        setLocationName("Home");
        break;
      case "/about":
        setLocationName("About Us");
        break;
      case "/portfolio":
        setLocationName("Portfolio");
        break;
      case "/contact":
        setLocationName("Contact");
        break;
      default:
        setLocationName("Home");
    }
  }, [location.pathname]);
  return (
    <div className="absolute w-0.5 hidden md:flex flex-col justify-center gap-[3.8rem] top-0 left-0">
      <div className="w-0.5 h-24 bg-greyLight"></div>
      <p className="uppercase relative text-nowrap tracking-[0.8em] rotate-90 text-greyLight">
        <span className="absolute -top-[10px]">{locationName}</span>
      </p>
    </div>
  );
}
