import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import FormInput from '../components/FormInput';
import PrimaryButton from '../components/PrimaryButton';
import FormGroup from '../components/FormGroup';
import {Alert, Image, ScrollView, StyleSheet, View} from 'react-native';
import {emailPattern} from '../constants/global';
import FormError from '../components/FormError';
import GlobalStyles from '../styles/GlobalStyle';
import Text from '../components/Text';

const ResetPassword: React.FC<any> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
    setValue,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    console.log('__testing');
    navigation.navigate('Reset Password Found');
  };

  return (
    <ScrollView
      style={[GlobalStyles.mainBg]}
      contentContainerStyle={{
        paddingTop: 10,
        paddingBottom: 40,
      }}>
      <View style={styles.formContainer}>
        <Image
          source={require('../assets/images/reset-password.png')}
          style={styles.banner}
        />

        <Text style={styles.introText}>
          To reset your password, find your account by entering your name,
          account number or email
        </Text>

        <FormGroup style={{marginBottom: 30}}>
          <FormInput
            name="username"
            control={control}
            rules={{required: true, pattern: emailPattern}}
            placeholder="Name, account number or email"
          />
          {errors?.username?.type === 'required' ? (
            <FormError>Field cannot be empty!</FormError>
          ) : (
            <></>
          )}
        </FormGroup>

        <PrimaryButton
          title="Search"
          onPress={handleSubmit(onSubmit)}
          isLoading={isLoading}
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
  banner: {
    width: 200,
    height: 130,
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  introText: {
    textAlign: 'center',
    maxWidth: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 12,
    marginBottom: 20,
  },
});

export default ResetPassword;
