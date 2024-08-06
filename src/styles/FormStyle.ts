import {StyleSheet} from 'react-native';

const FormStyle = StyleSheet.create({
  formItem: {
    borderBottomWidth: 0.8,
    borderBottomColor: '#dedede',
    marginBottom: 20,
  },
  textInput: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 4,
    paddingBottom: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
  },
  formLabel: {
    fontSize: 12,
    color: '#454545',
    fontFamily: 'Montserrat-Bold',
    marginBottom: 3,
  },
  formAddOn: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  addOnText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addOnImage: {
    width: 22,
    height: 22,
  },
  addOnLeft: {
    marginRight: 20,
  },
  addOnRight: {
    marginLeft: 20,
  },
  textInputAddOn: {
    flex: 1,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
  },
});

export default FormStyle;
