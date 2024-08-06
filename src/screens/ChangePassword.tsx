import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import FormInput from '../components/FormInput';
import PrimaryButton from '../components/PrimaryButton';
import WidgetBox from '../components/WidgetBox';
import FormGroup from '../components/FormGroup';
import FormLabel from '../components/FormLabel';
import {Alert, ToastAndroid} from 'react-native';
import {IFormDataPassword} from '../interfaces/password';
import FormError from '../components/FormError';

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
    watch,
    control,
  } = useForm<IFormDataPassword>();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (formData: IFormDataPassword) => {
    const {newPassword, oldPassword} = formData;
    setIsLoading(true);

    // promise change password
    setIsLoading(false);
    reset();
  };

  return (
    <WidgetBox>
      <FormGroup>
        <FormLabel>New Password</FormLabel>
        <FormInput
          name="newPassword"
          control={control}
          secureTextEntry={true}
          rules={{
            required: true,
            minLength: 8,
          }}
        />
        {errors?.newPassword?.type === 'required' ? (
          <FormError>New Password is requried!</FormError>
        ) : errors?.newPassword?.type === 'minLength' ? (
          <FormError>Minimum 8 chars!</FormError>
        ) : (
          <></>
        )}
      </FormGroup>
      <FormGroup>
        <FormLabel>Confirm New Password</FormLabel>
        <FormInput
          name="confirmNewPassword"
          control={control}
          secureTextEntry={true}
          rules={{
            required: true,
            minLength: 8,
            validate: (value: string) => value === watch('newPassword'),
          }}
        />
        {errors?.confirmNewPassword?.type === 'required' ? (
          <FormError>Confirm Password is required!</FormError>
        ) : errors?.confirmNewPassword?.type === 'minLength' ? (
          <FormError>Minimum 8 chars!</FormError>
        ) : errors?.confirmNewPassword?.type === 'validate' ? (
          <FormError>Password is not same!</FormError>
        ) : (
          <></>
        )}
      </FormGroup>
      <FormGroup>
        <FormLabel>Old Password</FormLabel>
        <FormInput
          name="oldPassword"
          control={control}
          secureTextEntry={true}
          rules={{
            required: true,
            minLength: 8,
          }}
        />
        {errors?.oldPassword?.type === 'required' ? (
          <FormError>Old Password is required!</FormError>
        ) : errors?.oldPassword?.type === 'minLength' ? (
          <FormError>Minimum 8 chars!</FormError>
        ) : (
          <></>
        )}
      </FormGroup>
      <PrimaryButton
        title="Change Password"
        onPress={handleSubmit(onSubmit)}
        style={{marginTop: 30}}
        isLoading={isLoading}
      />
    </WidgetBox>
  );
};

export default ChangePassword;
