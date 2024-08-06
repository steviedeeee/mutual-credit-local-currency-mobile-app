import React, {useContext, useEffect, useState} from 'react';
import {
  ConfirmationProviderProps,
  IConfirmationContext,
  IModalConfirmation,
} from './interface';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import {useBottomSheet} from '../BottomSheetContext';
import Text from '../../components/Text';

const ConfirmationContext = React.createContext<IConfirmationContext>({
  confirmation: () => {},
  setIsLoading: () => false,
  close: () => {},
});

const ConfirmationProvider: React.FC<ConfirmationProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const {showBottomSheet, closeBottomSheet} = useBottomSheet();

  useEffect(() => {
    if (isLoading) {
      showBottomSheet(
        <View style={styles.modalView}>
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
            <Text style={styles.loadingContainerText}>Mohon tunggu...</Text>
          </View>
        </View>,
      );
    }
  }, [isLoading]);

  const confirmation = (value: IModalConfirmation) => {
    showBottomSheet(
      <View style={styles.modalView}>
        {value.title && (
          <Text style={styles.modalTitle} fontWeight="semi">
            {value.title}
          </Text>
        )}
        {value.description && (
          <Text style={styles.modalDescription}>{value.description}</Text>
        )}
        {value.content}
        <View style={styles.buttonsContainer}>
          <View style={{flex: 1}}>
            <PrimaryButton
              variant="secondary"
              title="Back"
              onPress={() => closeBottomSheet()}
            />
          </View>
          <View style={{flex: 1}}>
            <PrimaryButton
              title="Confirm"
              onPress={value.callback}
              style={{width: '100%'}}
            />
          </View>
        </View>
      </View>,
    );
  };

  return (
    <ConfirmationContext.Provider
      value={{confirmation, setIsLoading, close: closeBottomSheet}}>
      {children}
    </ConfirmationContext.Provider>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    gap: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainerText: {
    fontSize: 16,
    color: '#000',
  },
  modalView: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 30,
    color: '#656A68',
    textAlign: 'center',
  },
  modalDescription: {
    marginBottom: 40,
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 30,
  },
});

export default ConfirmationContext;

const useConfirmation = () => useContext(ConfirmationContext);

export {ConfirmationProvider, useConfirmation};
