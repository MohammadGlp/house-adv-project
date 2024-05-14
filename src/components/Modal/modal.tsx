import { Modal } from "flowbite-react";

export const ModalCo = ({
  openModal,
  setOpenModal,
  children,
    size
}: {
  openModal: boolean;
  setOpenModal: (x: boolean) => void;
  children: React.ReactNode;
  size: string
}) => {
  return (
    <>
      <Modal
        show={openModal}
        size={size}
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};
