import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const ResetPasswordSuccess: React.FC<any> = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 10,
        paddingBottom: 40,
      }}>
      <View style={styles.formContainer}>
        <Image
          source={require('../assets/images/email-success.png')}
          style={{
            width: 200,
            height: 130,
            marginBottom: 30,
            marginLeft: 20,
          }}
        />

        <Text
          style={{
            textAlign: 'center',
            maxWidth: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: 12,
          }}>
          A password reset link has been emailed to you. If you have not
          received the email, check your spam folder first. If you did not
          receive an email, please contact your administrator.
        </Text>

        <PrimaryButton
          title="Continue"
          onPress={() => navigation.pop()}
          size="lg"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  orContainer: {
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20,
  },
  orLine: {
    borderBottomColor: 'black',
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  orText: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default ResetPasswordSuccess;
