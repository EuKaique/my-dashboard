import { RiSearchLine } from "react-icons/ri";
import "./style.css";

export const SearchMenu = () => (
  <label className="search-container">
    <RiSearchLine size={19} aria-hidden="true" />
    <input type="search" placeholder="Search for..." aria-label="Search menu" />
  </label>
);
