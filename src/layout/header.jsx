import { Clock, Video, Globe } from "lucide-react";
import Collapse from "../components/collapse";

function Header() {
  return (
    <div className="flex flex-col m-4 font-medium md:font-light md:basis-1/4">
      <img
        src="https://melvynx.com/images/my-face.png"
        alt="Melvynx"
        className="w-8"
      />
      <h2 className="mt-2">Melvyn Malherbe</h2>
      <span className="my-6 text-2xl font-medium text-white md:font-normal">
        Avis Formation
      </span>
      <p className="md:text-sm">
        Prendre rendez-vous pour passer 15 minutes avec moi durant lesquelles je
        récolterai ton avis sur mes formations et on pourra partager sur ce que
        tu as fais etc...
      </p>
      <div className="flex flex-col gap-3 mr-auto absolut my-7 md:gap-2">
        <span className="inline-flex">
          <Clock className="mr-3" />
          15m
        </span>
        <span className="inline-flex">
          <Video className="mr-3" />
          Google Meet
        </span>
        <span className="inline-flex">
          <Globe className="mr-3" />
          Europe/Paris
          <Collapse className="ml-3" />
        </span>
      </div>
    </div>
  );
}

export default Header;
