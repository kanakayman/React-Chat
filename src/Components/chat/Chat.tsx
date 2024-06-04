import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

function Chat() {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [text, setText] = useState("");
  function handleEmoji(e: EmojiClickData) {
    setText((prev) => prev + e.emoji);
  }
  return (
    <>
      <div className="chat">
        <div className="top">
          <div className="userInfo">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <span>Jane Doe</span>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="icons">
            <img src="./phone.png" alt="" />
            <img src="./video.png" alt="" />
            <img src="./info.png" alt="" />
          </div>
        </div>
        <div className="center">
            <div className="message">
                <img src="./avatar.png" alt="" />
                <div className="text">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quo reprehenderit eligendi necessitatibus maiores deleniti minima tempora consectetur, amet laudantium. Cum optio similique quo temporibus laudantium, dolorem vel ipsam rerum?</p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className="message own">
                <img src="./avatar.png" alt="" />
                <div className="text">
                    <img src="https://images.pexels.com/photos/19155212/pexels-photo-19155212/free-photo-of-roof-on-a-yellow-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quo reprehenderit eligendi necessitatibus maiores deleniti minima tempora consectetur, amet laudantium. Cum optio similique quo temporibus laudantium, dolorem vel ipsam rerum?</p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className="message">
                <img src="./avatar.png" alt="" />
                <div className="text">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quo reprehenderit eligendi necessitatibus maiores deleniti minima tempora consectetur, amet laudantium. Cum optio similique quo temporibus laudantium, dolorem vel ipsam rerum?</p>
                    <span>1 min ago</span>
                </div>
            </div>
        </div>
        <div className="bottom">
          <div className="icons">
            <img src="./img.png" alt="" />
            <img src="./camera.png" alt="" />
            <img src="./mic.png" alt="" />
          </div>
          <input
            type="text"
            placeholder="Type a message....."
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <div className="emoji">
            <img
              src="./emoji.png"
              alt=""
              onClick={() => setOpenEmoji((openEmoji) => !openEmoji)}
            />
            <div className="picker">
              {openEmoji ? (
                <EmojiPicker onEmojiClick={(e) => handleEmoji(e)} />
              ) : null}
            </div>
          </div>
          <div>
            <button className="sendButton">Send</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Chat;
