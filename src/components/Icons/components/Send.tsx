import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../interface';

const IconComp: React.FC<IconProps> = ({fill, size}) => {
  return (
    <Svg viewBox="0 0 19 16" fill="none" width={size} height={size}>
      <Path
        d="M0 16V0L19 8L0 16ZM2 13L13.85 8L2 3V6.5L8 8L2 9.5V13ZM2 13V3V6.5V9.5V13Z"
        fill={fill}
      />
    </Svg>
  );
};

export default IconComp;
