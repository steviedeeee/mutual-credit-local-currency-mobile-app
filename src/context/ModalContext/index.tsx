import React, {useContext, useState} from 'react';
import {IModalContext, ModalProviderProps} from './interface';
import {Modal} from 'react-native';
import ModalInformation from '../../components/modals/Information';

const ModalContext = React.createContext<IModalContext>({
  showModalSuccess: () => {},
  showModalError: () => {},
  closeModal: () => {},
});

const ModalProvider: React.FC<ModalProviderProps> = ({children}) => {
  const [showModal, setShowModal] = useState<{
    isShow: boolean;
    type: 'success' | 'error';
    title: string;
    description: string;
  }>({
    isShow: false,
    type: 'success',
    title: '',
    description: '',
  });

  const showModalSuccess = (
    description: string,
    title: string = 'Berhasil!',
  ) => {
    setShowModal({
      isShow: true,
      type: 'success',
      description,
      title,
    });
  };

  const showModalError = (description: string, title: string = 'Gagal!') => {
    setShowModal({
      isShow: true,
      type: 'error',
      description,
      title,
    });
  };

  const closeModal = () => {
    setShowModal({
      isShow: false,
      type: 'success',
      description: '',
      title: '',
    });
  };

  return (
    <ModalContext.Provider
      value={{showModalSuccess, showModalError, closeModal}}>
      {children}

      <Modal animationType="fade" transparent={true} visible={showModal.isShow}>
        <ModalInformation
          type={showModal.type}
          title={showModal.title}
          description={showModal.description}
        />
      </Modal>
    </ModalContext.Provider>
  );
};

export default ModalContext;

const useModal = () => useContext(ModalContext);

export {ModalProvider, useModal};
