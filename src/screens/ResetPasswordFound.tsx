import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import FormInput from '../components/FormInput';
import PrimaryButton from '../components/PrimaryButton';
import FormGroup from '../components/FormGroup';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {emailPattern} from '../constants/global';
import FormError from '../components/FormError';
import GlobalStyles from '../styles/GlobalStyle';
import Text from '../components/Text';

const ResetPasswordFound: React.FC<any> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
    setValue,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (formData: any) => {
    const {username, password} = formData;

    setIsLoading(true);
  };

  //  console.log('__signInError', signInError);

  return (
    <ScrollView
      style={[GlobalStyles.mainBg]}
      contentContainerStyle={{
        paddingTop: 10,
        paddingBottom: 40,
      }}>
      <View style={styles.formContainer}>
        <Text style={styles.introText}>
          If you find your account, select it to send yourself a reset password
          email
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
  introText: {
    textAlign: 'center',
    maxWidth: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 12,
    marginBottom: 20,
  },
});

export default ResetPasswordFound;
