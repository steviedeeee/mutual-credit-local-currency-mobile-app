import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonTransaction = () => {
  const transactionItem = (
    <SkeletonPlaceholder.Item
      flexDirection="row"
      justifyContent="space-between"
      marginBottom={20}
      paddingLeft={20}
      paddingRight={20}>
      <SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width={120}
          height={16}
          borderRadius={4}
          marginBottom={8}
        />
        <SkeletonPlaceholder.Item
          width={140}
          height={16}
          borderRadius={4}
          marginBottom={8}
        />
        <SkeletonPlaceholder.Item
          width={100}
          height={24}
          borderRadius={14}
          marginBottom={8}
        />
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item alignItems="flex-end">
        <SkeletonPlaceholder.Item
          width={120}
          height={16}
          borderRadius={4}
          marginBottom={8}
        />
        <SkeletonPlaceholder.Item width={100} height={24} borderRadius={4} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder.Item>
  );

  return (
    <SkeletonPlaceholder borderRadius={4}>
      <SkeletonPlaceholder.Item>
        {transactionItem}
        {transactionItem}
        {transactionItem}
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SkeletonTransaction;
