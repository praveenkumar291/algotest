import React from "react";
import { Select } from "antd";

const section3 = () => {
  const { Option } = Select;

  function handleChange(value) {
    console.log(value);
  }
  return (
    <div className="container">
      <div className="section_one">
          <p>Skype Type</p>
        <Select
          labelInValue
          defaultValue={{ value: "ATM" }}
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="Itm10">ITM10</Option>
          <Option value="itm9">ITM9</Option>
          <Option value="itm8">ITM8</Option>
          <Option value="itm7">ITM7</Option>

          <Option value="itm6">ITEM6</Option>
          <Option value="item5">ITEM5</Option>
          <Option value="item4">ITEM4</Option>

          <Option value="item3">ITEM3</Option>
          <Option value="item2">ITEM2</Option>

          <Option value="item1 ">ITEM1</Option>

          <Option value="atm">ATM</Option>
          <Option value="otm1">OTM1</Option>
          <Option value="otm2">OTM2</Option>
          <Option value="otm3">OTM3</Option>
          <Option value="otm4">OTM4</Option>
          <Option value="otm5">OTM5</Option>
          <Option value="otm6">OTM6</Option>
          <Option value="otm7 ">OTM7</Option>
          <Option value="otm8 ">OTM8</Option>
          <Option value="otm9 ">OTM9</Option>
          <Option value="otm10">OTM10</Option>
        </Select>
      </div>
    </div>
  );
};

export default section3;
