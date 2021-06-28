import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">ThongBook</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Tìm kiếm..." className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLink">
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
          <span className="topbarThong">Trần Trí Thông</span>
        </div>
        <div className="topbarIcon">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
