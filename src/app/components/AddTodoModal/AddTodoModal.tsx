import * as React from 'react';
import { Modal } from 'antd';

interface Props {
  isModalVisible: boolean;
  setIsModalVisible(isModalVisible: boolean): void;
}

const AddLeadModal: React.FC<Props> = ({ isModalVisible, setIsModalVisible }) => {
  return (
    <Modal
      visible={isModalVisible}
      footer={null}
      onCancel={() => setIsModalVisible(false)}
    >
      <p>This is the modal for adding Todos</p>
    </Modal>
  );
};

export default AddLeadModal;
