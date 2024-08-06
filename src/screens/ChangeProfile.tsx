import React, {useState} from 'react';
import WidgetBox from '../components/WidgetBox';
import FormGroup from '../components/FormGroup';
import FormLabel from '../components/FormLabel';
import FormInput from '../components/FormInput';
import {useForm} from 'react-hook-form';
import {IFormDataProfile} from '../interfaces/user';
import FormError from '../components/FormError';
import PrimaryButton from '../components/PrimaryButton';
import {useAuth} from '../context/AuthContext';
import Snackbar from 'react-native-snackbar';

const ChangeProfile = () => {
  const {me, setMe} = useAuth();

  const {
    handleSubmit,
    formState: {errors},
    control,
  } = useForm<IFormDataProfile>({defaultValues: {name: me?.name}});

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (formData: IFormDataProfile) => {
    const {name} = formData;
    setIsLoading(true);

    Snackbar.show({
      text: 'Profil berhasil diubah!',
      duration: Snackbar.LENGTH_SHORT,
    });

    setIsLoading(false);
  };

  return (
    <WidgetBox>
      <FormGroup style={{marginBottom: 20}}>
        <FormLabel>Nama</FormLabel>
        <FormInput
          name="name"
          control={control}
          rules={{
            required: true,
            minLength: 3,
            maxLength: 100,
          }}
        />
        {errors?.name?.type === 'minLength' ? (
          <FormError>Nama minimal 3 karakter!</FormError>
        ) : errors?.name?.type === 'maxLength' ? (
          <FormError>Nama maksimal 100 karakter!</FormError>
        ) : errors?.name?.type === 'required' ? (
          <FormError>Nama wajib diisi!</FormError>
        ) : (
          <></>
        )}
      </FormGroup>
      <PrimaryButton
        title="Ubah Profil"
        onPress={handleSubmit(onSubmit)}
        style={{marginBottom: 10}}
        isLoading={isLoading}
      />
    </WidgetBox>
  );
};

export default ChangeProfile;
