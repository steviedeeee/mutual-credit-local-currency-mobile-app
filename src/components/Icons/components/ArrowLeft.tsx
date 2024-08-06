import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../interface';

const IconComp: React.FC<IconProps> = ({fill, size}) => {
  return (
    <Svg viewBox="0 0 22 22" fill="none" width={size} height={size}>
      <Path
        d="M11 21.6666L0.333344 10.9999L11 0.333252L12.9 2.19992L5.43334 9.66658H21.6667V12.3333H5.43334L12.9 19.7999L11 21.6666Z"
        fill={fill}
      />
    </Svg>
  );
};

export default IconComp;
