import React from 'react';
import {ModalInformationProps} from './interface';
import {StyleSheet, Text, View} from 'react-native';
import {CheckIcon, CloseIcon} from '../../Icons';
import OutlinedButton from '../../OutlinedButton';
import {useModal} from '../../../context/ModalContext';

const ModalInformation: React.FC<ModalInformationProps> = ({
  type,
  title,
  description,
}) => {
  const {closeModal} = useModal();
  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={[
              styles.iconContainer,
              {borderColor: type === 'error' ? '#FF3030' : '#28B411'},
            ]}>
            {type === 'error' ? (
              <CloseIcon size={66} fill="#FF3030" />
            ) : (
              <CheckIcon size={70} fill="#28B411" />
            )}
          </View>
          <Text style={[styles.title]}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <OutlinedButton
            title="Kembali"
            style={styles.button}
            onPress={() => closeModal()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    minWidth: '80%',
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 20,
    paddingRight: 20,
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
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 4,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  description: {},
  button: {
    marginTop: 20,
  },
});

export default ModalInformation;
