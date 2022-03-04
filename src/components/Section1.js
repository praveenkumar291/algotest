import React from "react";
import "./section1.css";
import Model from "./model/Model";
import Dropdown from "./Dropdown";

const section1 = () => {
  const handleChange = (value) => {
    console.log(value);
  };
  return (
    <div className="container">
      <Dropdown
        label="option type"
        options={{ list: ["Call", "Put"] }}
        handleChange={handleChange}
      />
      <div>
        <Model />
      </div>
    </div>
  );
};

export default section1;
