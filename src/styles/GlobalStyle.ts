import {StyleSheet} from 'react-native';

const textColors = {
  main: '#FF0000',
  white: '#fff',
  black: '#333',
};

const bgColors = {
  main: '#FAFAFA',
};

const spaces = {
  mainYMargin: 15,
  mainXMargin: 15,
};

const GlobalStyles = StyleSheet.create({
  mainBg: {
    backgroundColor: bgColors.main,
  },
  buttonContainer: {
    maxWidth: 300,
  },
  button: {
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
  },
  buttonMain: {
    borderColor: bgColors.main,
  },
  buttonTextMain: {
    color: textColors.main,
  },
  textWhite: {
    color: textColors.white,
  },
  textBlack: {
    color: textColors.black,
  },
  yPadding: {
    paddingTop: spaces.mainYMargin,
    paddingBottom: spaces.mainYMargin,
  },
  xPadding: {
    paddingLeft: spaces.mainXMargin,
    paddingRight: spaces.mainXMargin,
  },
  fontMontserratBold: {
    fontFamily: 'Montserrat-Bold',
  },
  fontMontserratSemi: {
    fontFamily: 'Montserrat-SemiBold',
  },
  fontMontserratMed: {
    fontFamily: 'Montserrat-Medium',
  },
  fontMontserratReg: {
    fontFamily: 'Montserrat-Regular',
  },
  fontMontserratLight: {
    fontFamily: 'Montserrat-Light',
  },
  heading: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
  },
  separatorContainer: {
    backgroundColor: '#fff',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
  },

  mb2: {marginBottom: 2},
  mb10: {marginBottom: 10},

  page: {
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#F0F0F0',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    padding: 10,

    shadowColor: '#696969',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.9,
    shadowRadius: 7,

    elevation: 2,
  },

  cardTitle: {fontSize: 20, marginBottom: 20, fontWeight: 'bold'},

  pointContainer: {
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 50,
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  pointText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pointTextDesc: {
    fontSize: 14,
  },
});

export default GlobalStyles;
