import { useId } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import "./style.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DropDownProps {
  title: string;
  items: string[];
  open: boolean;
  setOpen: (open: boolean) => void;
  icon?: React.ReactNode;
}

export const DropDown = ({
  title,
  items,
  open,
  setOpen,
  icon,
}: DropDownProps) => {
  const id = useId();
  const location = usePathname();

  const slugify = (text: string): string => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

  return (
    <div className="menu-dropdown" data-open={open}>
      <button
        type="button"
        className="dropdown-container"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
        title={title}
      >
        <span className="dropdown-icon">{icon}</span>
        <span className="dropdown-label">{title}</span>
        <RiArrowDownSLine className="dropdown-chevron" size={18} />
      </button>
      <div id={id} className="dropdown-panel" inert={!open} aria-hidden={!open}>
        <div className="dropdown-panel-inner">
          <ul className="dropdown-items">
            {items.map((item) => {
               const link = `/${slugify(title)}/${slugify(item)}`;

              return (
                <li key={item}>
                  <Link href={link} className={`${link === location && "font-semibold text-white"}`}>{item}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
