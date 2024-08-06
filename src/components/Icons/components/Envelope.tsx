import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../interface';

const IconComp: React.FC<IconProps> = ({fill, size}) => {
  return (
    <Svg viewBox="0 0 20 13" fill="none" width={size} height={size}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 2H17C17.5523 2 18 2.44771 18 3V10C18 10.5523 17.5523 11 17 11H3C2.44772 11 2 10.5523 2 10V3C2 2.44772 2.44772 2 3 2ZM0 3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V10C20 11.6569 18.6569 13 17 13H3C1.34315 13 0 11.6569 0 10V3ZM5.13327 3.72607C4.70582 3.37635 4.0758 3.43935 3.72607 3.86679C3.37635 4.29424 3.43935 4.92426 3.86679 5.27399L9.36679 9.77399C9.73516 10.0754 10.2649 10.0754 10.6333 9.77399L16.1333 5.27399C16.5607 4.92426 16.6237 4.29424 16.274 3.86679C15.9243 3.43935 15.2942 3.37635 14.8668 3.72607L10 7.70797L5.13327 3.72607Z"
        fill={fill}
      />
    </Svg>
  );
};

export default IconComp;
