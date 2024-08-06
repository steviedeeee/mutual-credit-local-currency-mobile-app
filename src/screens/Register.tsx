import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import FormInput from '../components/FormInput';
import PrimaryButton from '../components/PrimaryButton';
import FormGroup from '../components/FormGroup';
import {ScrollView, StyleSheet, View, Alert, Image} from 'react-native';
import FormError from '../components/FormError';
import {emailPattern} from '../constants/global';
import Snackbar from 'react-native-snackbar';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Text from '../components/Text';

const Register: React.FC<any> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
    setValue,
    watch,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (formData: any) => {
    try {
      setIsLoading(true);

      Snackbar.show({
        text: 'Pendaftaran berhasil. Cek email anda untuk konfirmasi!',
        duration: 5000,
      });
      reset();
    } catch (errRes: any) {
      Alert.alert(
        'Gagal',
        'Email sudah terdaftar. Silahkan login dengan Google!',
      );

      setValue('password', '');
      setValue('confirmPassword', '');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingTop: 30,
        paddingBottom: 40,
      }}>
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
      <View style={styles.formContainer}>
        <FormGroup>
          <FormInput
            name="name"
            control={control}
            rules={{
              required: true,
              minLength: 3,
              maxLength: 100,
            }}
            placeholder="Insert Name"
          />
          {errors?.name?.type === 'minLength' ? (
            <FormError>Min 3 chars!</FormError>
          ) : errors?.name?.type === 'maxLength' ? (
            <FormError>Max 100 chars!</FormError>
          ) : errors?.name?.type === 'required' ? (
            <FormError>Name cannot be empty!</FormError>
          ) : (
            <></>
          )}
        </FormGroup>
        <FormGroup>
          <FormInput
            name="email"
            control={control}
            keyboardType="email-address"
            rules={{
              required: true,
              pattern: emailPattern,
            }}
            placeholder="Insert Email"
          />
          {errors?.email?.type === 'pattern' ? (
            <FormError>Wrong Format!</FormError>
          ) : errors?.email?.type === 'required' ? (
            <FormError>Email cannot be empty!</FormError>
          ) : (
            <></>
          )}
        </FormGroup>
        <FormGroup>
          <FormInput
            name="email"
            control={control}
            keyboardType="email-address"
            rules={{
              required: true,
              pattern: emailPattern,
            }}
            placeholder="Insert Phone"
          />
          {errors?.email?.type === 'pattern' ? (
            <FormError>Wrong Format!</FormError>
          ) : errors?.email?.type === 'required' ? (
            <FormError>Phone cannot be empty!</FormError>
          ) : (
            <></>
          )}
        </FormGroup>
        <FormGroup>
          <FormInput
            name="password"
            control={control}
            secureTextEntry={true}
            rules={{required: true, minLength: 8}}
            placeholder="Insert password"
          />
          {errors?.password?.type === 'minLength' ? (
            <FormError>Min 8 chars!</FormError>
          ) : errors?.password?.type === 'required' ? (
            <FormError>Password cannot be empty!</FormError>
          ) : (
            <></>
          )}
        </FormGroup>

        <PrimaryButton
          title="Sign Up"
          onPress={handleSubmit(onSubmit)}
          isLoading={isLoading}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 40,
            gap: 5,
          }}>
          <Text style={{fontSize: 12, color: '#8F9592'}}>
            Already have an account?
          </Text>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate('Login');
              reset();
            }}
            underlayColor="#0093C8">
            <Text style={{color: '#0093C8', fontSize: 12}} fontWeight="bold">
              SIGN IN HERE
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Register;
