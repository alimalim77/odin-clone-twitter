import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutlineOutlined";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizon from "@material-ui/icons/MoreHoriz";
import "./Sidebar.css";
import { Button } from "@material-ui/core";

interface SidebarOption {
  Icon: React.ElementType;
  text: string;
}

const Sidebar: React.FC = () => {
  const sidebarOptions: SidebarOption[] = [
    { Icon: HomeIcon, text: "Home" },
    { Icon: SearchIcon, text: "Search" },
    { Icon: NotificationsNoneIcon, text: "Notifications" },
    { Icon: MailOutlineIcon, text: "Mail" },
    { Icon: BookmarkBorderIcon, text: "Bookmarks" },
    { Icon: ListAltIcon, text: "Lists" },
    { Icon: PermIdentityIcon, text: "Identity" },
    { Icon: MoreHorizon, text: "More" },
  ];

  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar-twitterIcon" />
      {sidebarOptions.map((option, index) => (
        <SidebarOptions key={index} Icon={option.Icon} text={option.text} />
      ))}
      <Button className="sidebar-tweet" variant="outlined">
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
