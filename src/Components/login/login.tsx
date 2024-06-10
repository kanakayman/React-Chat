import { toast } from "react-toastify";
import "./login.css";
import { useState } from "react";

interface FileState {
  file: File | null;
  url: string;
}
function Login() {
  const [avatar, setAvatar] = useState<FileState>({
    file: null,
    url: "",
  });

  function handleAvatar(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const url = URL.createObjectURL(file);
      setAvatar({ file, url });
    }
  }

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.warn("hello");
  }
  return (
    <>
      <div className="login">
        <div className="item">
          <h2>Welcome back</h2>
          <form action="" onSubmit={handleLogin}>
            <input type="text" placeholder="Email" name="email" />
            <input type="text" placeholder="Password" name="password" />
            <button>Log In</button>
          </form>
        </div>
        <div className="separator"></div>
        <div className="item">
          <form action="">
            <h2>Create an Account</h2>
            <label htmlFor="file">
              <img src={avatar.url || "./avatar.png"} alt="" />
              Upload an Image
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleAvatar}
            />
            <input type="text" placeholder="Email" name="email" />
            <input type="text" placeholder="Password" name="password" />
            <input type="text" placeholder="Username" name="username" />
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
