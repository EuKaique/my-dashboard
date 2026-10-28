"use client";

import Image from "next/image";
import { useState } from "react";
import {
  RiHomeFill,
  RiStarFill,
  RiUserFill,
  RiSettings4Line,
  RiSideBarLine,
} from "react-icons/ri";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { MdExtension } from "react-icons/md";
import Logo from "@/public/assets/dashdark-x.png";
import AvatarImage from "@/public/assets/photo.png";
import { SearchMenu } from "../shared/SearchMenu";
import { DropDown } from "../shared/DropDown";
import { Avatar } from "../shared/Avatar";
import Link from "next/link";

const sections = [
  {
    title: "Dashboard",
    icon: RiHomeFill,
    items: ["All pages", "Reports", "Products", "Task"],
  },
  {
    title: "Features",
    icon: RiStarFill,
    items: [
      "All pages",
      "Contacts",
      "Companies",
      "Projects",
      "Tasks",
      "Board",
      "Table",
      "Crypto",
    ],
  },
  {
    title: "Users",
    icon: RiUserFill,
    items: ["All pages", "Profile", "Settings"],
  },
  {
    title: "Pricing",
    icon: PiCurrencyDollarSimpleBold,
    items: ["All pages", "Starter", "Professional", "Business"],
  },
  { title: "Integrations", icon: MdExtension, items: ["All pages"] },
];

export const Menu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  function toggleSection(title: string, open: boolean) {
    setCollapsed(false);
    setOpenSections((previous) => ({
      ...previous,
      [title]: collapsed || open,
    }));
  }

  return (
    <aside
      className="sidebar"
      data-collapsed={collapsed}
      aria-label="Main menu"
    >
      <div className="menu-header">
        <Link href="/">
          <Image className="menu-logo" src={Logo} alt="Dash Dark X" preload />
        </Link>
        <button
          type="button"
          className="menu-collapse"
          onClick={() => setCollapsed((previous) => !previous)}
          aria-label={collapsed ? "Abrir menu" : "Recolher menu"}
          aria-expanded={!collapsed}
          aria-controls="menu-navigation"
          title={collapsed ? "Abrir menu" : "Recolher menu"}
        >
          <RiSideBarLine size={20} />
        </button>
      </div>
      <SearchMenu />
      <nav
        id="menu-navigation"
        className="menu-navigation"
        aria-label="Main navigation"
      >
        <p className="menu-section-label">Workspace</p>
        <div className="menu-group">
          {sections.map(({ title, icon: Icon, items }) => (
            <DropDown
              key={title}
              title={title}
              items={items}
              open={!!openSections[title]}
              setOpen={(open) => toggleSection(title, open)}
              icon={<Icon size={20} />}
            />
          ))}
        </div>
        <div className="menu-settings">
          <p className="menu-section-label">Preferences</p>
          <DropDown
            title="Settings"
            items={["All pages", "Profile", "Theme"]}
            open={!!openSections.Settings}
            setOpen={(open) => toggleSection("Settings", open)}
            icon={<RiSettings4Line size={20} />}
          />
        </div>
      </nav>
      <Avatar imageUrl={AvatarImage} name="John Carter" />
    </aside>
  );
};
