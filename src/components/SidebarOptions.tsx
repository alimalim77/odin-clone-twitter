import React from "react";
import "./SidebarOptions.css";

type SidebarOptionsProps = {
  Icon: React.ElementType;
  text: string;
};

const SidebarOptions: React.FC<SidebarOptionsProps> = ({ Icon, text }) => {
  return (
    <div className="sidebar-options">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOptions;
