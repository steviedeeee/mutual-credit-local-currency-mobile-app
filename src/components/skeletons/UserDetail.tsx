import React from 'react';
import {View, Pressable} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {ArrowLeftIcon} from '../Icons';

const SkeletonUserDetail: React.FC<{navigation: any}> = ({navigation}) => {
  const productItem = (
    <SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item
        width={120}
        height={120}
        borderRadius={20}
        marginBottom={10}
      />
      <SkeletonPlaceholder.Item
        width={100}
        height={16}
        borderRadius={4}
        marginBottom={5}
      />
      <SkeletonPlaceholder.Item width={120} height={16} borderRadius={4} />
    </SkeletonPlaceholder.Item>
  );

  const point = (
    <SkeletonPlaceholder.Item
      flexDirection="row"
      paddingLeft={20}
      paddingRight={20}
      gap={20}
      marginTop={30}
      justifyContent="space-between"
      alignItems="center">
      <SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width={140}
          height={30}
          borderRadius={4}
          marginBottom={10}
        />
        <SkeletonPlaceholder.Item width={100} height={30} borderRadius={4} />
      </SkeletonPlaceholder.Item>

      <SkeletonPlaceholder.Item width={120} height={30} borderRadius={4} />
    </SkeletonPlaceholder.Item>
  );

  return (
    <View style={{position: 'relative'}}>
      <Pressable
        style={{
          backgroundColor: '#fff',
          width: 36,
          height: 36,
          borderRadius: 18,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: 16,
          left: 20,
          zIndex: 2,
        }}
        onPress={() => navigation.pop()}>
        <ArrowLeftIcon size={22} fill="#333" />
      </Pressable>
      <SkeletonPlaceholder borderRadius={4}>
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            width="100%"
            height={180}
            marginBottom={12}></SkeletonPlaceholder.Item>

          <View style={{paddingLeft: 20, paddingRight: 20}}>
            <SkeletonPlaceholder.Item
              width="100%"
              height={40}
              borderRadius={10}
              marginBottom={10}
            />

            <SkeletonPlaceholder.Item
              width="100%"
              height={40}
              borderRadius={10}
              marginBottom={10}
            />

            <SkeletonPlaceholder.Item
              width="100%"
              height={40}
              borderRadius={10}
            />
          </View>

          {point}

          <SkeletonPlaceholder.Item
            width={130}
            height={30}
            borderRadius={4}
            marginLeft={20}
            marginTop={30}
          />

          <SkeletonPlaceholder.Item
            flexDirection="row"
            paddingLeft={20}
            marginTop={10}
            gap={20}>
            {productItem}
            {productItem}
            {productItem}
          </SkeletonPlaceholder.Item>

          <SkeletonPlaceholder.Item
            width={130}
            height={30}
            borderRadius={4}
            marginLeft={20}
            marginTop={30}
          />
          <SkeletonPlaceholder.Item
            flexDirection="row"
            paddingLeft={20}
            gap={20}
            marginTop={10}>
            {productItem}
            {productItem}
            {productItem}
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};

export default SkeletonUserDetail;
