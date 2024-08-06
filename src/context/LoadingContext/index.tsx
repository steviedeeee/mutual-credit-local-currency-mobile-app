import React, {useContext, useState} from 'react';
import {ILoadingContext, LoadingProviderProps} from './interface';
import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';

const LoadingContext = React.createContext<ILoadingContext>({
  showLoading: () => {},
  closeLoading: () => {},
});

const LoadingProvider: React.FC<LoadingProviderProps> = ({children}) => {
  const [showModal, setShowModal] = useState(false);

  const showLoading = () => {
    setShowModal(true);
  };

  const closeLoading = () => {
    setShowModal(false);
  };

  return (
    <LoadingContext.Provider value={{closeLoading, showLoading}}>
      {children}

      <Modal animationType="fade" transparent={true} visible={showModal}>
        <View style={styles.modalContainer}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
                <Text style={styles.loadingContainerText}>Mohon tunggu...</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </LoadingContext.Provider>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    gap: 10,
  },
  loadingContainerText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    minWidth: 280,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default LoadingContext;

const useLoading = () => useContext(LoadingContext);

export {LoadingProvider, useLoading};
