import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../DynamicData";
import { useState } from "react";

export default function Post(props) {
  const [like, setLike] = useState(props.post.like);
  const [isLike, setIsLike] = useState(true);
  const likeHander = () => {
    setLike(isLike ? like + 1 : like - 1);
    setIsLike(!isLike);
  };
  const [heart, setHeart] = useState(props.post.heart);
  const [isHeart, setIsHeart] = useState(true);
  const heartHander = () => {
    setHeart(isHeart ? heart + 1 : heart - 1);
    setIsHeart(!isHeart);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={
                Users.filter((each) => each.id === props.post.userId)[0]
                  .profilePicture
              }
              alt=""
            />
            <span className="postUserName">
              {
                Users.filter((each) => each.id === props.post.userId)[0]
                  .username
              }
            </span>
            <span className="postTime">{props.post.date}</span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{props.post?.desc}</span>
          <img className="postImg" src={props.post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="Icon"
              src="/assets/like.png"
              onClick={likeHander}
              alt=""
            />
            <span className="likeCounter">{like} thích</span>
            <div className="block"></div>
            <img
              className="Icon"
              src="/assets/heart.png"
              onClick={heartHander}
              alt=""
            />
            <span className="likeCounter">{heart} thả tim</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
              {props.post.comment} bình luận
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
