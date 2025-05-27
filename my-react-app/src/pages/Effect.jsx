import React, { useState, useEffect } from "react";
import axios from "axios";

function Effect() {
  const [info, setInfo] = useState("posts");
  const [item, setItem] = useState([]);

  useEffect(() => {
    console.log("iside Effect");

    axios.get(`https://jsonplaceholder.typicode.com/${info}`).then((res) => {
      setItem(res.data);
    });
    // fetch(`https://jsonplaceholder.typicode.com/${info}`)
    //   .then((response) => response.json())
    //   .then((data) => setItem(data));
    // return () => {};
  }, [info]);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setInfo("posts");
        }}
      >
        posts
      </button>
      <button
        type="button"
        onClick={() => {
          setInfo("albums");
        }}
      >
        albums
      </button>

      <button
        type="button"
        onClick={() => {
          setInfo("users");
        }}
      >
        users
      </button>
      <hr />

      {info}
      {item.map((items) => {
        return (
          <>
            <li>{items.title}</li>
          </>
        );
      })}
    </div>
  );
}

export default Effect;
