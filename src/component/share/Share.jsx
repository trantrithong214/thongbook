import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder="Hãy đăng gì đó đi nào ..."
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="orange" clasName="shareIcon" />
              <span className="shareOptionText">Thư viện</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" clasName="shareIcon" />
              <span className="shareOptionText">Gán thẻ</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="red" clasName="shareIcon" />
              <span className="shareOptionText">Vị trí</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="green" clasName="shareIcon" />
              <span className="shareOptionText">Biểu cảm</span>
            </div>
          </div>
          <button className="shareButton">Đăng bài</button>
        </div>
      </div>
    </div>
  );
}
