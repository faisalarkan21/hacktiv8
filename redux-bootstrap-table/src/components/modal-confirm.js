import React from "react";
import { Modal } from "antd";

export const ConfirmModal = props => {
  
  /**
   * @TODO
   * visible -> props.visible
   * handleCancel -> props.handleCancel
   * handleOk -> props.handleOk
   * data -> props.data
   */
  return (
    <Modal
      title={props.title}
      visible={props.visible}
      onOk={props.onOk}
      onCancel={props.onCancelProps}
    >
      {props.children}
    </Modal>
  );
};