import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonUser = () => {
  const userItem = (
    <SkeletonPlaceholder.Item
      flexDirection="row"
      justifyContent="space-between"
      marginBottom={20}
      paddingLeft={20}
      paddingRight={20}>
      <SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width={140}
          height={16}
          borderRadius={4}
          marginBottom={8}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder.Item>
  );

  return (
    <SkeletonPlaceholder borderRadius={4}>
      <SkeletonPlaceholder.Item>
        {userItem}
        {userItem}
        {userItem}
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SkeletonUser;
