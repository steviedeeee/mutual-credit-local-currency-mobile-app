import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import PrimaryButton from '../components/PrimaryButton';
import FormGroup from '../components/FormGroup';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useAuth} from '../context/AuthContext';
import Text from '../components/Text';
import FormInputPin from '../components/FormInputPin';

const Pin: React.FC<any> = ({navigation}) => {
  const {setMe} = useAuth();

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
    navigation.replace('Home');
  };

  return (
    <ScrollView
      style={{backgroundColor: '#fafafa'}}
      contentContainerStyle={{
        paddingTop: 100,
        paddingBottom: 40,
      }}>
      <View style={styles.formContainer}>
        <Text fontWeight="bold" style={styles.title}>
          Set Your PIN
        </Text>
        <Text fontWeight="light" style={styles.description}>
          Add a login pin as extra security on your account.
        </Text>

        <FormGroup>
          <FormInputPin name="pin" control={control} />
        </FormGroup>

        <FormGroup>
          <FormInputPin name="confirmPin" control={control} />
        </FormGroup>

        <PrimaryButton
          title="Confirm"
          onPress={handleSubmit(onSubmit)}
          isLoading={isLoading}
          style={{marginTop: 20}}
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
  title: {
    fontSize: 20,
    color: '#282C2A',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#282C2A',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Pin;
