import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import FormInput from '../components/FormInput';
import {useForm} from 'react-hook-form';
import {IFormExchange} from '../interfaces/exchange';
import FormCheck from '../components/FormCheck';
import FormSelect from '../components/FormSelect';
import FormTextEditor from '../components/FormTextEditor';
import FormUploader from '../components/FormUploader';
import FormGroup from '../components/FormGroup';

const options = [
  {
    value: 'Offer',
    label: 'Offer',
  },
  {
    value: 'Want',
    label: 'Want',
  },
];

const offeringTypeOptions = [
  {
    value: 'type 1',
    label: 'Type 1',
  },
  {
    value: 'type 2',
    label: 'Type 2',
  },
];

const categoryOptions = [
  {
    value: 'category 1',
    label: 'Category 1',
  },
  {
    value: 'category 2',
    label: 'Category 2',
  },
];

const displayForOptions = [
  {
    value: 'display for 1',
    label: 'Display for 1',
  },
  {
    value: 'display for 2',
    label: 'Display for 2',
  },
];

const CreateExchange: React.FC<any> = ({navigation}) => {
  const {control, handleSubmit} = useForm<IFormExchange>();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (formData: any) => {
    navigation.navigate('Success', {
      message: 'Your ad has been successfully created',
    });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingTop: 40,
        paddingBottom: 40,
      }}>
      <FormGroup>
        <FormCheck options={options} />
      </FormGroup>

      <FormGroup>
        <View style={{height: 1, backgroundColor: '#E7E7E7'}} />
      </FormGroup>
      <FormGroup>
        <FormSelect
          name="offeringType"
          control={control}
          items={offeringTypeOptions}
          placeholder={{value: null, label: 'Select Offering Type'}}
        />
      </FormGroup>
      <FormGroup>
        <FormInput name="title" control={control} placeholder="Brief Title" />
      </FormGroup>
      <FormGroup>
        <FormSelect
          name="category"
          control={control}
          items={categoryOptions}
          placeholder={{value: null, label: 'Select Category'}}
        />
      </FormGroup>
      <FormTextEditor
        name="description"
        placeholder="Description"
        control={control}
      />
      <FormGroup>
        <FormInput name="keywords" control={control} placeholder="Keywords" />
      </FormGroup>
      <FormGroup>
        <FormInput
          name="requesting"
          control={control}
          placeholder="Requesting"
        />
      </FormGroup>
      <FormGroup>
        <FormSelect
          name="displayFor"
          control={control}
          items={displayForOptions}
          placeholder={{value: null, label: 'Display For'}}
        />
      </FormGroup>
      <FormGroup>
        <FormUploader name="image" control={control} />
      </FormGroup>
      <PrimaryButton
        title="Submit"
        onPress={handleSubmit(onSubmit)}
        isLoading={isLoading}
        style={{marginTop: 20}}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fafafa',
  },
  emptyBannerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    flex: 1,
  },
  emptyText: {
    textAlign: 'center',
  },
});

export default CreateExchange;
