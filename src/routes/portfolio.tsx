import { createFileRoute } from "@tanstack/react-router";
import Card from "../components/Card";

export const Route = createFileRoute("/portfolio")({
  component: RouteComponent,
});

const projects = [
  {
    title: "Seraph Station",
    description: "September 2019",
    image: "image-seraph.jpg",
  },
  {
    title: "Eebox Building",
    description: "August 2017",
    image: "image-eebox.jpg",
  },
  {
    title: "Federal II Tower",
    description: "March 2017",
    image: "image-federal.jpg",
  },
  {
    title: "Project Del Sol",
    description: "January 2016",
    image: "image-del-sol.jpg",
  },
  {
    title: "Le Prototype",
    description: "October 2015",
    image: "image-prototype.jpg",
  },
  { title: "228B Tower", description: "April 2015", image: "image-228b.jpg" },
  {
    title: "Grand Edelweiss Hotel",
    description: "December 2013",
    image: "image-edelweiss.jpg",
  },
  {
    title: "Netcry Tower",
    description: "August 2012",
    image: "image-netcry.jpg",
  },
  { title: "Hypers", description: "January 2012", image: "image-hypers.jpg" },
  { title: "SXIV Tower", description: "March 2011", image: "image-sxiv.jpg" },
  {
    title: "Trinity Bank Tower",
    description: "September 2010",
    image: "image-trinity.jpg",
  },
  {
    title: "Project Paramour",
    description: "February 2008",
    image: "image-paramour.jpg",
  },
];

function RouteComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-0 pb-20">
      {projects.map((project, index) => (
        <Card
          key={project.title}
          title={project.title}
          description={project.description}
          image={project.image}
          index={(index + 1).toString()}
        />
      ))}
    </div>
  );
}
