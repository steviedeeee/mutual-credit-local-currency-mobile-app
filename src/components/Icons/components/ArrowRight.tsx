import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../interface';

const IconComp: React.FC<IconProps> = ({fill, size}) => {
  return (
    <Svg viewBox="0 0 17 15" fill="none" width={size} height={size}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.50255 0.322533C7.8767 -0.0836989 8.50933 -0.109701 8.91557 0.264456L16.9995 7.71015L8.89408 14.7548C8.47723 15.1171 7.84561 15.0728 7.48332 14.656C7.12103 14.2391 7.16526 13.6075 7.58211 13.2452L12.825 8.68853H1C0.447715 8.68853 0 8.24081 0 7.68853C0 7.13625 0.447715 6.68853 1 6.68853H12.9382L7.56062 1.73555C7.15439 1.3614 7.12839 0.728766 7.50255 0.322533Z"
        fill={fill}
      />
    </Svg>
  );
};

export default IconComp;
