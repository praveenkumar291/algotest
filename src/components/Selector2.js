import React from "react";
import { Select } from "antd";

const section1 = () => {
  const { Option } = Select;

  function handleChange(value) {
    console.log(value);
  }
  return (
    <div className="container">
      <div className="section_one">
        <Select
          labelInValue
          defaultValue={{ value: "Strike Type" }}
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="strike type">Strike Type</Option>
          <Option value="premium range">Premium Range</Option>
          <Option value="closer primium">Closer Primium</Option>

          <Option value="put">Straddle Width</Option>
        </Select>
        ,
      </div>
    </div>
  );
};

export default section1;
