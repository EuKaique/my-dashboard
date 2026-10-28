import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import "./layouts.css";

interface HeaderProps {
  title: string;
  subtitle?: string;
  hasSearch?: boolean;
  buttons?: React.ReactNode;
  searchValue?: string;
  onSearchValue: (searchValue: string) => void;
}

export const Header = (props: HeaderProps) => {
  return (
    <header>
      <div>
        <div>
          <h2>{props.title}</h2>
          {props.hasSearch && (
            <div className="search-container">
              <RiSearch2Line size={18}/>  
              <input
                type="text"
                name={props.title.toLowerCase().trim()}
                id={props.title.toLowerCase().trim()}
                value={props.searchValue}
                onChange={() => props.onSearchValue}
              />
            </div>
          )}
        </div>
        <p>{props.subtitle}</p>
      </div>
      <div>{props.buttons}</div>
    </header>
  );
};
