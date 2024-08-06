import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {IconProps} from '../interface';

const IconComp: React.FC<IconProps> = ({fill, size}) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <G clip-path="url(#clip0_29_1924)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.29289 4.29289C7.90237 4.68342 7.90237 5.31658 8.29289 5.70711L14.5858 12L8.29289 18.2929C7.90237 18.6834 7.90237 19.3166 8.29289 19.7071C8.68342 20.0976 9.31658 20.0976 9.70711 19.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L9.70711 4.29289C9.31658 3.90237 8.68342 3.90237 8.29289 4.29289Z"
          fill={fill}
        />
      </G>
    </Svg>
  );
};

export default IconComp;
