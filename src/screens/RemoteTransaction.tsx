import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../components/Text';
import {useConfirmation} from '../context/ConfirmationContext';
import FormGroup from '../components/FormGroup';
import FormInput from '../components/FormInput';
import {useForm} from 'react-hook-form';
import moment from 'moment';
import Card from '../components/Card';

const RemoteTransaction: React.FC<any> = ({navigation}) => {
  const {confirmation, close} = useConfirmation();

  const {
    handleSubmit,
    formState: {errors},
    control,
  } = useForm();

  useEffect(() => {
    confirmation({
      title: 'Confirm Transaction',
      content: (
        <View>
          <View style={styles.infoDetail}>
            <Text style={styles.infoDetailLabel} fontWeight="bold">
              Sender
            </Text>
            <Text style={styles.infoDetailValue} fontWeight="med">
              Tim Jenkin
            </Text>
          </View>
          <View style={styles.infoDetail}>
            <Text style={styles.infoDetailLabel} fontWeight="bold">
              Date
            </Text>
            <Text style={styles.infoDetailValue} fontWeight="med">
              {moment('2022-03-29').format('D MMM Y')}
            </Text>
          </View>
          <View style={styles.infoDetail}>
            <Text style={styles.infoDetailLabel} fontWeight="bold">
              Amount
            </Text>
            <Text style={styles.infoDetailValue} fontWeight="med">
              142
            </Text>
          </View>
          <View style={styles.infoDetail}>
            <Text style={styles.infoDetailLabel} fontWeight="bold">
              For
            </Text>
            <Text
              style={[styles.infoDetailValue, {fontSize: 12}]}
              fontWeight="med">
              What the transaction is for
            </Text>
          </View>
        </View>
      ),
      callback: () => {
        navigation.navigate('Success', {
          message: 'You have successfully made a transaction',
          content: (
            <Card style={{backgroundColor: '#fff'}}>
              <Text
                style={{fontSize: 15, color: '#0093C8', marginBottom: 20}}
                fontWeight="bold">
                Remote Transaction Details
              </Text>
              <View>
                <View style={styles.infoDetail}>
                  <Text style={styles.infoDetailLabel} fontWeight="bold">
                    Sender
                  </Text>
                  <Text style={styles.infoDetailValue} fontWeight="med">
                    Tim Jenkin
                  </Text>
                </View>
                <View style={styles.infoDetail}>
                  <Text style={styles.infoDetailLabel} fontWeight="bold">
                    Amount debited
                  </Text>
                  <Text style={styles.infoDetailValue} fontWeight="med">
                    142
                  </Text>
                </View>
                <View
                  style={[
                    styles.infoDetail,
                    {paddingBottom: 0, borderBottomWidth: 0},
                  ]}>
                  <Text style={styles.infoDetailLabel} fontWeight="bold">
                    For
                  </Text>
                  <Text
                    style={[styles.infoDetailValue, {fontSize: 12}]}
                    fontWeight="med">
                    What the transaction is for
                  </Text>
                </View>
              </View>
            </Card>
          ),
        });
        close();
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <FormGroup style={{marginBottom: 20}}>
        <FormInput
          name="sellerNid"
          placeholder="Seller's NID"
          control={control}
        />
      </FormGroup>

      <FormGroup style={{marginBottom: 20}}>
        <FormInput
          name="sellerAccountNo"
          placeholder="Seller's account No."
          control={control}
        />
      </FormGroup>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 30,
    backgroundColor: '#FAFAFA',
  },
  infoDetail: {
    color: '#333',
    marginBottom: 12,
    paddingBottom: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
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
});

export default RemoteTransaction;
