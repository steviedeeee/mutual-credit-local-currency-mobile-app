import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../interface';

const IconComp: React.FC<IconProps> = ({fill, size}) => {
  return (
    <Svg viewBox="0 0 16 18" fill="none" width={size} height={size}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4 4C10.4 5.32548 9.32548 6.4 8 6.4C6.67452 6.4 5.6 5.32548 5.6 4C5.6 2.67452 6.67452 1.6 8 1.6C9.32548 1.6 10.4 2.67452 10.4 4ZM12 4C12 6.20914 10.2091 8 8 8C5.79086 8 4 6.20914 4 4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4ZM2 13.5C2 12.1193 3.11929 11 4.5 11H11.5C12.8807 11 14 12.1193 14 13.5V15C14 15.5523 13.5523 16 13 16H3C2.44772 16 2 15.5523 2 15V13.5ZM0 13.5C0 11.0147 2.01472 9 4.5 9H11.5C13.9853 9 16 11.0147 16 13.5V15C16 16.6569 14.6569 18 13 18H3C1.34315 18 0 16.6569 0 15V13.5Z"
        fill={fill}
      />
    </Svg>
  );
};

export default IconComp;
