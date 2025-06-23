import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router";

function Update() {
  const [userName, setUserName] = useState("");
  let url = "https://66e7e69ab17821a9d9da6e9d.mockapi.io/post";
  const { id } = useParams();
  const navigate = useNavigate();
  const updateData = () => {
    axios
      .put(`${url}/${id}`, {
        userName,
      })
      .then((res) => {
        // setUserName(res.data)
        console.log(res.data);

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
      <button onClick={updateData}>confirm</button>
    </div>
  );
}

export default Update;
