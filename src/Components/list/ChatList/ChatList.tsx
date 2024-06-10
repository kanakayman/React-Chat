import "./ChatList.css";
import { useState } from "react";
import AddUser from "./adduser/AddUser";

function ChatList() {
  const [addMode, setAddMode] = useState(false);

  function changeAddImg(){
    addMode ? setAddMode(false) : setAddMode(true);
  }
  return (
    <>
      <div className="chatList">
        <div className="search">
          <div className="searchBar">
            <img src="/search.png" alt="" />
            <input type="text" placeholder="Search"/>
          </div>
          <img src={addMode ? "./minus.png" : "./plus.png" } alt=""  className="add" onClick={changeAddImg}/>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello World</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello World</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello World</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello World</p>
          </div> 
        </div>
        {addMode && <AddUser/>}   
      </div>
    </>
  );
}

export default ChatList;
