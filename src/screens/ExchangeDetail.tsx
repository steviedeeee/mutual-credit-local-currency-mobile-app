import React from 'react';
import WidgetBox from '../components/WidgetBox';
import {Image, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {transactionDate} from '../helpers/date';
import {ITransaction} from '../interfaces/api/transaction';
import GlobalStyles from '../styles/GlobalStyle';
import Text from '../components/Text';
import {IExchange} from '../interfaces/api/exchange';
import AccountProfile from '../components/AccountProfile';
import {
  EnvelopeAltIcon,
  EnvelopeIcon,
  SendIcon,
  UserIcon,
  UserProfileAltIcon,
  WhatsAppIcon,
} from '../components/Icons';
import Divider from '../components/Divider';

const ExchangeDetail: React.FC<any> = ({route, navigation}) => {
  const {exchange}: {exchange: IExchange} = route.params;

  return (
    <ScrollView
      style={[styles.container, GlobalStyles.xPadding, GlobalStyles.mainBg]}>
      <Image
        source={require('../assets/images/sample-offer-1.jpg')}
        style={[styles.image]}
      />
      <View style={[styles.innerContainer, GlobalStyles.xPadding]}>
        <WidgetBox style={{flex: 0, paddingBottom: 100, marginTop: 0}}>
          <Text style={styles.title} fontWeight="bold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </Text>
          <View style={styles.metaContainer}>
            <Text style={styles.meta} fontWeight="semi">
              Added 28 Apr 2022
            </Text>
            <Text style={styles.meta} fontWeight="semi">
              Expires: 29 Apr 2022
            </Text>
          </View>
          <Divider
            style={{
              marginTop: 20,
              marginBottom: 20,
            }}
          />
          <Text style={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Text>
        </WidgetBox>
        <WidgetBox style={{flex: 0, paddingBottom: 100}}>
          <AccountProfile />

          <Divider style={{marginTop: 20, marginBottom: 40}} />

          <View style={[styles.actionMenuContainer, {marginBottom: 14}]}>
            <View style={styles.actionMenuItem}>
              <Pressable onPress={() => {}}>
                <View style={styles.actionMenu}>
                  <EnvelopeAltIcon size={24} fill="#00ABE8" />
                  <Text style={styles.actionMenuText} fontWeight="semi">
                    Contact by Email
                  </Text>
                </View>
              </Pressable>
            </View>
            <View style={styles.divider} />
            <View style={styles.actionMenuItem}>
              <Pressable onPress={() => {}}>
                <View style={styles.actionMenu}>
                  <WhatsAppIcon size={24} fill="#00ABE8" />
                  <Text style={styles.actionMenuText} fontWeight="semi">
                    Contact on WhatsApp
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
          <View style={styles.actionMenuContainer}>
            <View style={styles.actionMenuItem}>
              <Pressable onPress={() => {}}>
                <View style={styles.actionMenu}>
                  <SendIcon size={24} fill="#00ABE8" />
                  <Text style={styles.actionMenuText} fontWeight="semi">
                    Share Listing
                  </Text>
                </View>
              </Pressable>
            </View>
            <View style={styles.divider} />
            <View style={styles.actionMenuItem}>
              <Pressable onPress={() => {}}>
                <View style={styles.actionMenu}>
                  <UserProfileAltIcon size={24} fill="#00ABE8" />
                  <Text style={styles.actionMenuText} fontWeight="semi">
                    View Profile
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </WidgetBox>
      </View>
    </ScrollView>
  );
};

export default ExchangeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    marginTop: -10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    zIndex: 2,
  },
  infoDetail: {
    color: '#333',
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
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
  title: {
    fontSize: 16,
    color: '#007A35',
    marginBottom: 10,
  },
  metaContainer: {
    flexDirection: 'row',
  },
  meta: {
    color: '#444746',
    fontSize: 10,
  },
  description: {
    color: '#8F9592',
    fontSize: 12,
  },
  actionMenuItem: {
    flex: 1,
  },
  actionMenuContainer: {
    flexDirection: 'row',
  },
  actionMenu: {
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: '#C8F0FF',
    gap: 10,
    height: 70,
    justifyContent: 'center',
  },
  actionMenuText: {fontSize: 10, color: '#00ABE8'},
  divider: {
    width: 14,
  },
});
