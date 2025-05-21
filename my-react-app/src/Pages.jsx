import React from "react";

function Pages(props) {
  return (
    <div style={{ color: name ? "blue" : "black" }}>
      {props.name ? props.name : "ther is no name "} and her age is :{props.age}
      && {props.gender}
    </div>
  );
}

export default Pages;
