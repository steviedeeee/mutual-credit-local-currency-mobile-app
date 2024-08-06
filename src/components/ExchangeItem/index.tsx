import {Image, Pressable, View} from 'react-native';
import React from 'react';
import {ExchangeItemProps} from './interface';
import {StyleSheet} from 'react-native';
import Card from '../Card';
import Text from '../Text';
import {ExchangeCartIcon, ExchangePrizeIcon} from '../Icons';

const ExchangeItem: React.FC<ExchangeItemProps> = ({
  exchange,
  style,
  ...props
}) => {
  return (
    <Pressable style={[styles.container, style]} {...props}>
      <Card style={{paddingTop: 0, paddingBottom: 10}}>
        <View style={{flexDirection: 'row', gap: 10}}>
          <View style={styles.imageContainer}>
            <Image source={exchange.image} style={styles.image} />
            <View style={styles.iconContainer}>
              {exchange.type === 'WANT' ? (
                <ExchangePrizeIcon size={40} />
              ) : (
                <ExchangeCartIcon size={40} />
              )}
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={[
                styles.title,
                {color: exchange.type === 'WANT' ? '#007A35' : '#0093C8'},
              ]}
              fontWeight="bold"
              numberOfLines={2}>
              {exchange.title}
            </Text>
            <Text style={[styles.description]} numberOfLines={3}>
              {exchange.description}
            </Text>
          </View>
        </View>
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {},
  innerContainer: {
    flexDirection: 'row',
    gap: 10,
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
    width: 100,
  },
  image: {
    width: 92,
    height: 128,
    borderRadius: 10,
    transform: [{translateY: -20}],
  },
  title: {fontSize: 15, marginTop: 10, marginBottom: 5},
  description: {color: '#656A68', fontSize: 11},
  iconContainer: {
    position: 'absolute',
    left: '50%',
    marginLeft: -20,
    bottom: 0,
  },
});

export default ExchangeItem;
