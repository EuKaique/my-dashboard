import { useId } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import "./style.css";

interface DropDownProps {
  title: string;
  items: string[];
  open: boolean;
  setOpen: (open: boolean) => void;
  icon?: React.ReactNode;
}

export const DropDown = ({ title, items, open, setOpen, icon }: DropDownProps) => {
  const id = useId();
  return (
    <div className="menu-dropdown" data-open={open}>
      <button type="button" className="dropdown-container" aria-expanded={open}
        aria-controls={id} onClick={() => setOpen(!open)} title={title}>
        <span className="dropdown-icon">{icon}</span>
        <span className="dropdown-label">{title}</span>
        <RiArrowDownSLine className="dropdown-chevron" size={18} />
      </button>
      <div id={id} className="dropdown-panel" inert={!open} aria-hidden={!open}>
        <div className="dropdown-panel-inner">
          <ul className="dropdown-items">
            {items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};
