import React from "react";
import "antd/dist/antd.css";
import Dropdown from "./components/Dropdown";
import Model from "./components/Model";

const App = () => {
  const handleChange = (value) => {
    console.log(value);
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container">
        <div style={{ margin: "auto" }}>
          <Dropdown
            label="Option Type"
            options={{ list: ["Call", "Put"] }}
            handleChange={handleChange}
            width={100}
          />
        </div>
        <div>
          <Model />
        </div>
      </div>
    </div>
  );
};

export default App;
