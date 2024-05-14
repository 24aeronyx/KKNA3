import { useRef } from "react";
import Navbar from "../components/navbar";
import Description from "./description";
import Location from "./location";
import Mission from "./mission";
import Target from "./target";
import Organization from "./organization";

export default function Home() {
  const locationRef = useRef(null);
  const missionRef = useRef(null);
  const targetRef = useRef(null);
  const organizationRef = useRef(null);

  const handleScrollTo = (section) => {
    switch (section) {
      case "home":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "location":
        locationRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "mission":
        missionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "target":
        targetRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "organization":
        organizationRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div className="font-sans">
      <Navbar handleScrollTo={handleScrollTo} />
      <div>
        <Description />
      </div>
      <div ref={locationRef}>
        <Location />
      </div>
      <div ref={missionRef}>
        <Mission />
      </div>
      <div ref={targetRef}>
        <Target />
      </div>
      <div ref={organizationRef}>
        <Organization />
      </div>
    </div>
  );
}
