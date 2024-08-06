import React, {useRef} from 'react';
import {View, Pressable, StyleSheet, ScrollView} from 'react-native';
import {
  BalanceIcon,
  BasketIcon,
  CartIcon,
  ExchangePrizeIcon,
  GiftBoxIcon,
  InsightIcon,
  StatisticIcon,
  TransactionIcon,
  UserProfileIcon,
  UsersIcon,
} from '../../components/Icons';
import AccountProfile from '../../components/AccountProfile';
import Card from '../../components/Card';
import Text from '../../components/Text';
import Badge from '../../components/Badge';
import Carousel from 'react-native-snap-carousel';

const sampleData = [
  {
    type: 'want',
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    location: 'Northern Suburbs',
    date: '28 Apr 2022',
  },
  {
    type: 'want',
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    location: 'Northern Suburbs',
    date: '28 Apr 2022',
  },
  {
    type: 'offer',
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    location: 'Northern Suburbs',
    date: '28 Apr 2022',
  },
];

const Home: React.FC<any> = ({navigation}) => {
  const menus = [
    {
      label: 'Transactions',
      icon: <TransactionIcon size={24} fill="#3FC7F8" />,
      onPress: () => navigation.navigate('Transaction'),
    },
    {
      label: 'Offers and Requests',
      icon: <CartIcon size={24} fill="#3FC7F8" />,
      onPress: () => navigation.navigate('Exchange'),
    },
    {
      label: 'Search Users',
      icon: <UsersIcon size={24} fill="#3FC7F8" />,
      onPress: () => navigation.navigate('Search Users'),
    },
    {
      label: 'My Profile',
      icon: <UserProfileIcon size={24} fill="#3FC7F8" />,
      onPress: () => navigation.navigate('Account'),
    },
    {
      label: 'Statistics',
      icon: <StatisticIcon size={24} fill="#3FC7F8" />,
      onPress: () => navigation.navigate('User Statistic'),
    },
  ];

  const sliderItem = ({item, index}: any) => {
    return (
      <Pressable onPress={() => navigation.navigate('Exchange')}>
        <View
          style={[
            styles.itemContainer,
            {
              //backgroundColor: item.type === 'offer' ? 'green' : 'blue',
              backgroundColor: item.type === 'offer' ? '#fafafa' : '#fafafa',
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              gap: 6,
              alignItems: 'center',
              marginBottom: 4,
            }}>
            {item.type === 'offer' ? (
              <GiftBoxIcon size={16} fill="#00CC58" />
            ) : (
              <BasketIcon size={16} fill="#00ABE8" />
            )}
            <Text
              numberOfLines={1}
              style={[
                styles.itemTitle,
                {
                  color: item.type === 'offer' ? '#007A35' : '#0093C8',
                },
              ]}
              fontWeight="bold">
              {item.title}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 6,
              alignItems: 'center',
              marginBottom: 4,
            }}>
            <Text style={styles.itemMeta} fontWeight="semi">
              {item.location}
            </Text>
            <Text style={styles.itemMeta} fontWeight="semi">
              .
            </Text>
            <Text style={styles.itemMeta} fontWeight="semi">
              {item.date}
            </Text>
          </View>
          <View>
            <Text numberOfLines={3} style={styles.itemDescription}>
              {item.description}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };

  const carouselRef = useRef<any>(null);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingTop: 50,
        paddingBottom: 40,
      }}>
      <View style={styles.innerContainer}>
        <AccountProfile />

        <Card style={{marginBottom: 30}}>
          <View style={styles.userMenuLine}>
            <BalanceIcon size={24} fill="#8F9592" />
            <Text style={[styles.userMenuLabel]} fontWeight="semi">
              My Balance
            </Text>
            <Text style={styles.userMenuValue} fontWeight="semi">
              500,000
            </Text>
          </View>
          <View
            style={[
              styles.userMenuLine,
              {paddingBottom: 0, borderBottomWidth: 0, marginBottom: 0},
            ]}>
            <InsightIcon size={24} fill="#8F9592" />
            <Text style={styles.userMenuLabel} fontWeight="semi">
              Trading History
            </Text>
            <Pressable
              style={{marginLeft: 'auto'}}
              onPress={() => navigation.navigate('Transaction History')}>
              <Badge>See Details</Badge>
            </Pressable>
          </View>
        </Card>
      </View>

      <View>
        <View style={styles.innerContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <Text style={{color: '#656A68', fontSize: 15, fontWeight: 'bold'}}>
              Latest Offers and Requests
            </Text>

            <Pressable onPress={() => navigation.navigate('Exchange')}>
              <Text style={{color: '#009240', fontSize: 12}}>See more..</Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            marginBottom: 30,
            alignItems: 'center',
          }}>
          <Carousel
            ref={carouselRef}
            data={sampleData}
            renderItem={sliderItem}
            sliderWidth={400}
            itemWidth={300}
          />
        </View>

        <View style={styles.innerContainer}>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', rowGap: 30}}>
            {menus.map((menu, index) => {
              return (
                <View key={index} style={styles.actionMenuRow}>
                  <Pressable onPress={menu.onPress}>
                    <View style={styles.actionMenu}>
                      <View style={styles.actionMenuIconContainer}>
                        {menu.icon}
                      </View>
                      <Text style={styles.actionMenuText} fontWeight="med">
                        {menu.label}
                      </Text>
                    </View>
                  </Pressable>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  userMenuLine: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    gap: 10,
    alignItems: 'center',
    paddingBottom: 20,
    marginBottom: 19,
  },
  userMenuLabel: {
    color: '#656A68',
    fontSize: 16,
  },
  userMenuValue: {
    color: '#000000',
    marginLeft: 'auto',
    fontSize: 16,
  },
  actionMenuRow: {
    flexDirection: 'row',
    flexBasis: '33.333%',
    justifyContent: 'center',
  },
  actionMenu: {alignItems: 'center', gap: 6},
  actionMenuIconContainer: {
    width: 70,
    height: 68,
    borderRadius: 20,
    backgroundColor: '#C8F0FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionMenuText: {fontSize: 11, color: '#656A68'},
  itemContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
  },
  itemTitle: {fontSize: 13, flex: 1},
  itemDescription: {
    color: '#656A68',
    fontSize: 11,
  },
  itemLocation: {color: '#444746'},
  itemMeta: {
    color: '#444746',
    fontSize: 10,
  },
  itemDate: {color: '#444746'},
});

export default Home;
