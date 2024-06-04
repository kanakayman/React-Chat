import "./list.css";
import Chat from "./ChatList/ChatList";
import UserInfo from "./UseInfo/UserInfo";

function List() {
  return (
    <>
      <div className="list">
        <UserInfo />
        <Chat />
      </div>
    </>
  );
}

export default List;
