import React, {ReactElement} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {SuccessBanner} from '../components/Icons';
import PrimaryButton from '../components/PrimaryButton';
import Text from '../components/Text';

interface IItem {
  label: string;
  value: string;
}

interface SuccessParams {
  title?: string;
  message?: string;
  content?: ReactElement;
  iconType?: 'email' | 'default';
}

const Success: React.FC<any> = ({route, navigation}) => {
  const {
    title,
    message,
    content,
    iconType = 'default',
  }: SuccessParams = route.params;

  return (
    <View style={styles.container}>
      {title && (
        <Text style={styles.title} fontWeight="med">
          {title}
        </Text>
      )}
      <View style={styles.bannerContiner}>
        {iconType === 'email' ? (
          <Image
            source={require('../assets/images/email-success.png')}
            style={{width: 200, height: 180}}
          />
        ) : (
          <SuccessBanner size={200} />
        )}
      </View>
      {message && <Text style={styles.message}>{message}</Text>}
      {content}
      <PrimaryButton
        title="Continue"
        onPress={() => {
          navigation.pop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
    justifyContent: 'center',
    gap: 30,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
  },
  bannerContiner: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  message: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Success;
