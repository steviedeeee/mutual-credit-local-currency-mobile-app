import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../interface';

const IconComp: React.FC<IconProps> = ({fill, size}) => {
  return (
    <Svg viewBox="0 0 9 10" fill="none" width={size} height={size}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.19671 0.555556C5.19671 0.248731 4.89084 0 4.51353 0C4.13622 0 3.83035 0.248731 3.83035 0.555556L3.83035 7.7107L1.65372 5.23269C1.43441 4.98302 1.00773 4.92519 0.700695 5.10352C0.393664 5.28186 0.32255 5.62884 0.541858 5.87851L3.40184 9.13449C3.94678 9.75488 5.08063 9.75488 5.62556 9.13449L8.48555 5.87851C8.70486 5.62884 8.63374 5.28186 8.32671 5.10352C8.01968 4.92519 7.593 4.98302 7.37369 5.23269L5.19671 7.71109L5.19671 0.555556Z"
        fill={fill}
      />
    </Svg>
  );
};

export default IconComp;
