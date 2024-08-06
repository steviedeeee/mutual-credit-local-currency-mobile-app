import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import {useForm} from 'react-hook-form';
import {IFormExchange} from '../interfaces/exchange';
import FormTextEditor from '../components/FormTextEditor';
import Text from '../components/Text';

const SendMessage: React.FC<any> = ({navigation}) => {
  const {control, handleSubmit} = useForm<IFormExchange>();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (formData: any) => {
    navigation.navigate('Success', {
      message: 'Your message was sent successfully',
      iconType: 'email',
      title: 'Message sent',
    });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingTop: 40,
        paddingBottom: 40,
      }}>
      <View style={styles.infoDetail}>
        <Text style={styles.infoDetailLabel} fontWeight="bold">
          To:
        </Text>
        <Text
          style={[styles.infoDetailValue, styles.infoDetailValueTo]}
          fontWeight="bold">
          Celeste Esau
        </Text>
      </View>
      <View style={[styles.infoDetail, styles.infoDetailTo]}>
        <Text style={styles.infoDetailLabel} fontWeight="bold">
          Re:
        </Text>
        <Text style={styles.infoDetailValue} fontWeight="med">
          Your want : Looking for someone who can repair a computer and system
        </Text>
      </View>
      <FormTextEditor name="description" control={control} />
      <PrimaryButton
        title="Send"
        onPress={handleSubmit(onSubmit)}
        isLoading={isLoading}
        style={{marginTop: 40}}
        size="lg"
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
  infoDetail: {
    color: '#333',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  infoDetailTo: {
    backgroundColor: '#fff',
    paddingTop: 5,
    paddingBottom: 5,
  },
  infoDetailLabel: {
    fontSize: 15,
    color: '#656A68',
  },
  infoDetailValue: {
    color: '#797E7C',
    fontSize: 15,
    fontWeight: '500',
  },
  infoDetailValueTo: {
    color: '#009240',
    backgroundColor: '#DFEDE5',
    height: 30,
    lineHeight: 30,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 7,
  },
});

export default SendMessage;
