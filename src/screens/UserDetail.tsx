import React from 'react';
import WidgetBox from '../components/WidgetBox';
import {StyleSheet, View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import AccountProfile from '../components/AccountProfile';
import Text from '../components/Text';

const UserDetail: React.FC<any> = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <AccountProfile />
      <WidgetBox style={styles.widgetBox}>
        <View style={styles.infoDetail}>
          <Text fontWeight="bold" style={styles.infoDetailLabel}>
            Balance
          </Text>
          <Text style={styles.infoDetailValue} fontWeight="med">
            1,000,000
          </Text>
        </View>
        <View style={styles.infoDetail}>
          <Text fontWeight="bold" style={styles.infoDetailLabel}>
            Turnover
          </Text>
          <Text style={styles.infoDetailValue} fontWeight="med">
            29 Mar 2022
          </Text>
        </View>
        <View style={styles.infoDetail}>
          <Text fontWeight="bold" style={styles.infoDetailLabel}>
            Account created
          </Text>
          <Text style={styles.infoDetailValue} fontWeight="med">
            4 Feb 2015
          </Text>
        </View>
      </WidgetBox>
      <PrimaryButton onPress={() => {}} title="Make Payment" size="lg" />
    </View>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 20,
  },
  widgetBox: {
    marginBottom: 20,
  },
  infoDetail: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    paddingBottom: 11,
  },
  infoDetailLabel: {
    fontSize: 15,
    color: '#656A68',
  },
  infoDetailValue: {
    color: '#797E7C',
    fontSize: 15,
  },
});
