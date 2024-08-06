import React, {useState} from 'react';
import FormGroup from '../components/FormGroup';
import FormInput from '../components/FormInput';
import {useForm} from 'react-hook-form';
import {IFormDataProfile} from '../interfaces/user';
import FormError from '../components/FormError';
import PrimaryButton from '../components/PrimaryButton';
import {useAuth} from '../context/AuthContext';
import {StyleSheet, View} from 'react-native';

const AccountSettings: React.FC<any> = ({navigation}) => {
  const {me, setMe} = useAuth();

  const {
    handleSubmit,
    formState: {errors},
    control,
  } = useForm<IFormDataProfile>({defaultValues: {name: me?.name}});

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (formData: IFormDataProfile) => {
    navigation.navigate('Success', {
      message: 'Your account details have been updated successfully',
    });
  };

  return (
    <View style={styles.container}>
      <FormGroup style={{marginBottom: 20}}>
        <FormInput
          name="name"
          placeholder="Name"
          control={control}
          // rules={{
          //   required: true,
          //   minLength: 3,
          //   maxLength: 100,
          // }}
        />
        {/* {errors?.name?.type === 'minLength' ? (
          <FormError>Nama minimal 3 karakter!</FormError>
        ) : errors?.name?.type === 'maxLength' ? (
          <FormError>Nama maksimal 100 karakter!</FormError>
        ) : errors?.name?.type === 'required' ? (
          <FormError>Nama wajib diisi!</FormError>
        ) : (
          <></>
        )} */}
      </FormGroup>

      <FormGroup style={{marginBottom: 20}}>
        <FormInput
          name="email"
          placeholder="Email"
          control={control}
          // rules={{
          //   required: true,
          //   minLength: 3,
          //   maxLength: 100,
          // }}
        />
      </FormGroup>

      <FormGroup style={{marginBottom: 20}}>
        <FormInput
          name="phone"
          placeholder="Phone"
          control={control}
          // rules={{
          //   required: true,
          //   minLength: 3,
          //   maxLength: 100,
          // }}
        />
      </FormGroup>

      <FormGroup style={{marginBottom: 20}}>
        <FormInput
          name="password"
          control={control}
          placeholder="Password"
          // rules={{
          //   required: true,
          //   minLength: 3,
          //   maxLength: 100,
          // }}
        />
      </FormGroup>
      <PrimaryButton
        title="Submit"
        onPress={handleSubmit(onSubmit)}
        style={{marginBottom: 10}}
        isLoading={isLoading}
      />
    </View>
  );
};

export default AccountSettings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
