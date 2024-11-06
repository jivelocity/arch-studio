import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import PathLocation from "../components/PathLocation";
import Footer from "../components/Footer";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="container">
      <div className="containerChild relative">
        <PathLocation />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
