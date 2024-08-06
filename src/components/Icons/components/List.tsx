import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../interface';

const IconComp: React.FC<IconProps> = ({fill, size}) => {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6C3.55228 6 4 5.55228 4 5C4 4.44772 3.55228 4 3 4C2.44772 4 2 4.44772 2 5C2 5.55228 2.44772 6 3 6ZM21 6C21.5523 6 22 5.55228 22 5C22 4.44772 21.5523 4 21 4H7C6.44771 4 6 4.44771 6 5C6 5.55228 6.44771 6 7 6L21 6ZM21 13C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11L7 11C6.44771 11 6 11.4477 6 12C6 12.5523 6.44771 13 7 13L21 13ZM22 19C22 19.5523 21.5523 20 21 20L7 20C6.44771 20 6 19.5523 6 19C6 18.4477 6.44771 18 7 18L21 18C21.5523 18 22 18.4477 22 19ZM4 12C4 12.5523 3.55228 13 3 13C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11C3.55228 11 4 11.4477 4 12ZM3 20C3.55228 20 4 19.5523 4 19C4 18.4477 3.55228 18 3 18C2.44772 18 2 18.4477 2 19C2 19.5523 2.44772 20 3 20Z"
        fill={fill}
      />
    </Svg>
  );
};

export default IconComp;
