import React from "react";
import { Select, InputNumber } from "antd";

const DropdownWithOptions = ({
  label,
  options,
  handleChange,
  width = "150",
}) => {
  const { Option } = Select;
  const optionKeys = Object.keys(options);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <p style={{ width: `${width}px`, fontSize: "14px" }}>{label}</p>
      <span style={{ padding: "0 5px" }}>:</span>
      {!optionKeys.includes("type") ? (
        <Select
          labelInValue
          defaultValue={{ value: options.list[0] }}
          style={{ width: 200 }}
          onChange={handleChange}
        >
          {options.list.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      ) : (
        <InputNumber
          style={{
            width: 200,
          }}
          defaultValue="1"
          min="0"
          max="10"
          step="1"
          onChange={handleChange}
          stringMode
        />
      )}
    </div>
  );
};

export default DropdownWithOptions;
