import React from "react";
import Nav from "../component/Nav";
import Pages from "../Pages";
import { useNavigate } from "react-router";

function Home() {
  let navigate = useNavigate();

  const mainPage = () => {
    navigate("./Pages");
  };
  return (
    <div>
      <button onClick={mainPage()}>go to Pages</button>
    </div>
  );
}

export default Home;
