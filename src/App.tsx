import { useState } from "react";
import List from "./Components/list/List";
import Chat from "./Components/chat/Chat";
import Detail from "./Components/detail/Detail";
import Login from "./Components/login/login";
import Notification from "./Components/notification/Notification";
import "./App.css";

function App() {
  let user = true;
  return (
    <>
      <div className="container">
        {user ? (
          <>
            <List />
            <Chat />
            <Detail />
          </>
        ) : (
          <Login />
        )}
        <Notification />
      </div>
    </>
  );
}

export default App;
