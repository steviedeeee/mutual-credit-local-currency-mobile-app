import React from 'react';
import WidgetBox from '../components/WidgetBox';
import {ScrollView, StyleSheet, View} from 'react-native';
import Text from '../components/Text';
import GlobalStyles from '../styles/GlobalStyle';
import AccountProfile from '../components/AccountProfile';
import BackButton from '../components/BackButton';
import Badge from '../components/Badge';
import moment from 'moment';

const UserStatistic: React.FC<any> = ({route, navigation}) => {
  return (
    <ScrollView
      style={[styles.container, GlobalStyles.xPadding, GlobalStyles.mainBg]}
      contentContainerStyle={{paddingTop: 30, paddingBottom: 30}}>
      <BackButton
        style={{position: 'absolute', top: 30}}
        onPress={() => navigation.pop()}
      />
      <AccountProfile />
      <WidgetBox style={{flex: 0, marginTop: 50}}>
        <View style={styles.infoDetail}>
          <Text style={styles.infoDetailLabel} fontWeight="bold">
            Status
          </Text>
          <Badge variant="info">Active</Badge>
        </View>
        <View style={styles.infoDetail}>
          <Text style={styles.infoDetailLabel} fontWeight="bold">
            User since
          </Text>
          <Text style={styles.infoDetailValue} fontWeight="med">
            24 Jan 2022
          </Text>
        </View>
        <View style={styles.infoDetail}>
          <Text style={styles.infoDetailLabel} fontWeight="bold">
            Last sold
          </Text>
          <Text style={styles.infoDetailValue} fontWeight="med">
            {moment('2024-05-05').format('MMM D, Y')}
          </Text>
        </View>
        <View style={styles.infoDetail}>
          <Text style={styles.infoDetailLabel} fontWeight="bold">
            Last bought
          </Text>
          <Text style={styles.infoDetailValue} fontWeight="med">
            {moment('2023-04-02').format('MMM D, Y')}
          </Text>
        </View>
        <View style={styles.infoDetail}>
          <Text style={styles.infoDetailLabel} fontWeight="bold">
            Sales
          </Text>
          <Text style={styles.infoDetailValue} fontWeight="med">
            0
          </Text>
        </View>
        <View style={styles.infoDetail}>
          <Text style={styles.infoDetailLabel} fontWeight="bold">
            Purchases
          </Text>
          <Text style={styles.infoDetailValue} fontWeight="med">
            0
          </Text>
        </View>
        <View style={styles.infoDetail}>
          <Text style={styles.infoDetailLabel} fontWeight="bold">
            Income
          </Text>
          <Text style={styles.infoDetailValue} fontWeight="med">
            0.00
          </Text>
        </View>
        <View style={styles.infoDetail}>
          <Text style={styles.infoDetailLabel} fontWeight="bold">
            Expenditure
          </Text>
          <Text style={styles.infoDetailValue} fontWeight="med">
            0.00
          </Text>
        </View>
        <View style={styles.infoDetail}>
          <Text style={styles.infoDetailLabel} fontWeight="bold">
            Levy
          </Text>
          <Text style={styles.infoDetailValue} fontWeight="med">
            0.00
          </Text>
        </View>
        <View style={styles.infoDetail}>
          <Text style={styles.infoDetailLabel} fontWeight="bold">
            Balance
          </Text>
          <Text style={styles.infoDetailValue} fontWeight="med">
            0.00
          </Text>
        </View>
        <View
          style={[
            styles.infoDetail,
            {paddingBottom: 0, borderBottomWidth: 0, marginBottom: 0},
          ]}>
          <Text style={styles.infoDetailLabel} fontWeight="bold">
            Offerings
          </Text>
          <Badge>0</Badge>
        </View>
      </WidgetBox>
    </ScrollView>
  );
};

export default UserStatistic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
