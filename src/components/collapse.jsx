import { useState } from "react";
import { ChevronDown } from "lucide-react";

function Collapse() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ChevronDown style={{ cursor: "pointer" }} onClick={toggleCollapse} />
      {isOpen && (
        <div className="flex flex-col">
          <span>Angleterre</span>
          <span>Allemagne</span>
          <span>Italie</span>
          <span>Espagne</span>
          <span>France</span>
        </div>
      )}
    </div>
  );
}

export default Collapse;
