import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let url = "https://66e7e69ab17821a9d9da6e9d.mockapi.io/post";
  let navigate = useNavigate();
  const login = () => {
    axios
      .post(url, {
        userName,
        password,
      })
      .then(() => {
        localStorage.setItem("userName", userName);
        navigate("/Read");
      });
  };
  return (
    <div>
      <input
        value={userName}
        type="text"
        placeholder="userName"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <br />
      <input
        value={password}
        type="text"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button onClick={login}>LogIn</button>
    </div>
  );
}

export default Login;
