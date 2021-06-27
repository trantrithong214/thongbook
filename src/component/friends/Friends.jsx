import "./friends.css";

export default function Friends(props) {
  return (
    <li className="sibarFriend">
      <img
        className="sidebarFriendImg"
        src={props.person.profilePicture}
        alt=""
      />
      <span className="sidebarFriendname">{props.person.username}</span>
    </li>
  );
}
