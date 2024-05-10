import Navbar from "../components/navbar";
import Description from "./description";
import Location from "./location";
import Mission from "./mission";
import Target from "./target";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Description />
      <Location/>
      <Mission/>
      <Target/>
    </div>
  );
}
