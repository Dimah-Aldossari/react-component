import React, { useState } from "react";
// import { useNavigate, Link } from "react-router";

function State() {
  const [raiting, setRaiting] = useState(1);
  const [text, setText] = useState("");
  const [message, setMmessage] = useState([]);

  //   const navigate = useNavigate();

  const submit = () => {
    if (raiting <= 5 && text.length <= 5) {
      alert("commint req");
    } else {
      setMmessage([text, ...message]);
      console.log([...text, message]);

      setText("");
      //   navigate("/about");
      //   <Link to="/about" />;
    }
  };

  return (
    <>
      <p>Raiting</p>
      <label>{raiting}</label>
      <input
        value={raiting}
        onChange={(e) => {
          setRaiting(e.target.value);
        }}
        type="range"
        max={10}
        min={1}
      />
      <br />
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
      <br />
      <button onClick={submit}>submit</button>

      <br />

      <ul>
        {message.map((item) => {
          return (
            <>
              <li>{item}</li>
              <img src={item} alt="" srcset="" />
            </>
          );
        })}
      </ul>
      <a target="_blank" href="https://www.pexels.com/">
        pexels
      </a>
    </>
  );
}

export default State;
