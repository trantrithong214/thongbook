import "./sidebar.css";
import {
  RssFeed,
  WorkOutline,
  Event,
  School,
  HelpOutline,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
} from "@material-ui/icons";
import { Users } from "../../DynamicData";
import Friends from "../friends/Friends";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sibarIcon" />
            <span className="sibarListItemText">Nội Dung</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sibarIcon" />
            <span className="sibarListItemText">Tin nhắn</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sibarIcon" />
            <span className="sibarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sibarIcon" />
            <span className="sibarListItemText">Nhóm</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sibarIcon" />
            <span className="sibarListItemText">Đánh dấu</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sibarIcon" />
            <span className="sibarListItemText">Trợ giúp</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sibarIcon" />
            <span className="sibarListItemText">Việc làm</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sibarIcon" />
            <span className="sibarListItemText">Sự kiện</span>
          </li>
          <li className="sidebarListItem">
            <School className="sibarIcon" />
            <span className="sibarListItemText">Trường học</span>
          </li>
        </ul>
        <button className="sidebarButton">Xem thêm...</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((person) => (
            <Friends key={person.id} person={person} />
          ))}
        </ul>
      </div>
    </div>
  );
}
