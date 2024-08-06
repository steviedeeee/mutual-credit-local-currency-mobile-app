import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import FormInput from '../components/FormInput';
import PrimaryButton from '../components/PrimaryButton';
import FormGroup from '../components/FormGroup';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import {useAuth} from '../context/AuthContext';
import FormError from '../components/FormError';
import {useLoading} from '../context/LoadingContext';
import {login} from '../fakeApis/auth';
import Text from '../components/Text';

const Login: React.FC<any> = ({navigation}) => {
  const {setMe, isFetched, me} = useAuth();
  const {showLoading, closeLoading} = useLoading();

  useEffect(() => {
    if (isFetched && me) {
      navigation.replace('Pin');
      closeLoading();
    }
  }, [isFetched, me, closeLoading]);

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
    setValue,
    setError,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (formData: any) => {
    const {username, password} = formData;

    setIsLoading(true);

    try {
      const user: any = await login(username, password);

      setMe({
        accountNumber: user.accountNumber,
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture,
      });
      reset();
    } catch (error: any) {
      console.log('__error', error);
      switch (error) {
        case 'account not exist':
          setError('username', {type: 'notExist'});

          break;
        case 'password incorrect':
          setError('password', {type: 'incorrect'});

          break;
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView
      style={{backgroundColor: '#fafafa'}}
      contentContainerStyle={{
        paddingTop: 100,
        paddingBottom: 40,
      }}>
      <View style={styles.formContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{
            width: 300,
            height: 86,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 60,
          }}
        />
        <FormGroup>
          <FormInput
            name="username"
            control={control}
            rules={{required: true}}
            placeholder="Email"
          />
          {errors?.username?.type === 'required' ? (
            <FormError>Error: Email cannot be empty!</FormError>
          ) : errors?.username?.type === 'notExist' ? (
            <FormError>Error: Account does not exist!</FormError>
          ) : (
            <></>
          )}
        </FormGroup>
        <FormGroup style={{marginBottom: 5}}>
          <FormInput
            name="password"
            control={control}
            secureTextEntry={true}
            rules={{required: true, minLength: 8}}
            placeholder="Password"
          />
          {errors?.password?.type === 'minLength' ? (
            <FormError>Error: 8 chars minimum!</FormError>
          ) : errors?.password?.type === 'required' ? (
            <FormError>Error: Password cannot be empty!</FormError>
          ) : errors?.password?.type === 'incorrect' ? (
            <FormError>Error: Incorrect Password!</FormError>
          ) : (
            <></>
          )}
        </FormGroup>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableHighlight
            onPress={() => navigation.navigate('Search Users')}
            style={{
              width: 'auto',
              marginBottom: 10,
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 8,
              paddingRight: 8,
            }}
            underlayColor="#0093C8">
            <Text style={{color: '#0093C8', fontSize: 15}} fontWeight="bold">
              Find User
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => navigation.navigate('Reset Password')}
            style={{
              width: 'auto',
              marginBottom: 10,
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 8,
              paddingRight: 8,
            }}
            underlayColor="#0093C8">
            <Text style={{color: '#0093C8', fontSize: 15}} fontWeight="bold">
              Reset Password
            </Text>
          </TouchableHighlight>
        </View>

        <PrimaryButton
          title="Sign In"
          onPress={handleSubmit(onSubmit)}
          isLoading={isLoading}
          style={{marginTop: 20}}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 40,
            gap: 5,
          }}>
          <Text style={{color: '#8F9592', fontSize: 12}}>
            Don't have an account?
          </Text>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate('Register');
              reset();
            }}
            underlayColor="#0093C8">
            <Text style={{color: '#0093C8', fontSize: 12}} fontWeight="bold">
              JOIN HERE
            </Text>
          </TouchableHighlight>
        </View>
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
});

export default Login;
