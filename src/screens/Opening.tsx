import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import GlobalStyles from '../styles/GlobalStyle';
import Text from '../components/Text';

const slides = [
  {
    key: 1,
    text: 'Spaceholder Text\n\nWhat is CES\n\nCES is where  people come together to exchange goods and services with each other.\n\nIt’s where you can find the help you need, and offer to help others in return.\n\nIt’s where we use our own money for exchange, saving fiat money to use for purchases outside of this  local community economy.',
  },
  {
    key: 2,
    text: 'Start by listing the goods or services that you have to offer to the community.\n\nYou can then search for the goods or services being offered by the other members of the community.\n\nThere is no interest charged on a negative balance, however you are responsible to repay your negative balance when asked, or if you decide you no longer wish to be a part of the community',
  },
  {
    key: 3,
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
  },
];

const Opening: React.FC<any> = ({navigation}) => {
  const renderItem = ({item, goToSlide}: any) => {
    return (
      <View style={[styles.contentContainer, GlobalStyles.xPadding]}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.contentImage}
        />
        <View style={styles.contentTextContainer}>
          <Text fontWeight="semi" style={styles.contentText}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  const onDone = () => {
    navigation.navigate('Login');
  };

  const renderNextButton = (isDone = false) => {
    return (
      <View
        style={{
          paddingLeft: 15,
          paddingRight: 15,
          justifyContent: 'center',
          backgroundColor: '#00ABE8',
          borderRadius: 11,
          height: 45,
        }}>
        <Text
          style={{
            flex: 1,
            textAlignVertical: 'center',
            textTransform: 'uppercase',
            color: '#fff',
            textAlign: 'center',
            fontSize: 16,
          }}>
          {isDone ? 'Accept' : 'Next'}
        </Text>
      </View>
    );
  };

  return (
    <View style={[styles.container, GlobalStyles.mainBg]}>
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        doneLabel="Accept"
        bottomButton={true}
        renderNextButton={() => renderNextButton()}
        renderDoneButton={() => renderNextButton(true)}
      />
    </View>
  );
};

export default Opening;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingTop: 40,
  },
  contentImage: {
    width: 300,
    height: 86,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 60,
  },
  contentTextContainer: {
    flex: 1,
  },
  contentText: {fontSize: 16, color: '#000', textAlign: 'center'},
});
