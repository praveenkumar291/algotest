import React, { useState } from "react";
import { Modal, Button } from "antd";
import { data } from "../../Constants";
import Dropdown from "../Dropdown";

const Strike = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [SelectedOption, setOption] = useState("Strike Type");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  console.log("data", data);

  const handleChange = (value) => {
    console.log(value);
    setOption(value.label);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Strike Selection Criteria
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Dropdown
          label="Strike Selection Criteria"
          options={{ list: Object.keys(data) }}
          handleChange={handleChange}
        />
        {data[SelectedOption] &&
          Object.keys(data[SelectedOption]).map((item) => (
            <Dropdown label={item} options={data[SelectedOption][item]} />
          ))}
      </Modal>
    </>
  );
};

export default Strike;
