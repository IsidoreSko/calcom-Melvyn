import { Clock, Video, Globe, ChevronDown } from "lucide-react";

function Header() {
  return (
    <div>
      <img
        src="https://melvynx.com/images/my-face.png"
        alt="Melvynx"
        className="w-8"
      />
      <h2>Melvyn Malherbe</h2>
      <span className="text-2xl font-medium text-white">Avis Formation</span>
      <p>
        Prendre rendez-vous pour passer 15 minutes avec moi durant lesquelles je
        récolterai ton avis sur mes formations et on pourra partager sur ce que
        tu as fais etc...
      </p>
      <div className="flex flex-col gap-3">
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
          <ChevronDown className="ml-3" />
        </span>
      </div>
    </div>
  );
}

export default Header;
