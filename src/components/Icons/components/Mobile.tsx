import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../interface';

const IconComp: React.FC<IconProps> = ({fill, size}) => {
  return (
    <Svg viewBox="0 0 13 20" fill="none" width={size} height={size}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2H3C2.44771 2 2 2.44772 2 3L3.75 3C4.63162 3 5.36097 3.65193 5.48228 4.5H7.51772C7.63903 3.65193 8.36838 3 9.25 3L11 3C11 2.44772 10.5523 2 10 2ZM2 17V5H3.51772C3.63903 5.84807 4.36838 6.5 5.25 6.5H7.75C8.63162 6.5 9.36097 5.84807 9.48228 5H11V17C11 17.5523 10.5523 18 10 18H3C2.44772 18 2 17.5523 2 17ZM3 0C1.34315 0 0 1.34315 0 3V17C0 18.6569 1.34315 20 3 20H10C11.6569 20 13 18.6569 13 17V3C13 1.34315 11.6569 0 10 0H3ZM4 15C3.44772 15 3 15.4477 3 16C3 16.5523 3.44772 17 4 17H9C9.55229 17 10 16.5523 10 16C10 15.4477 9.55228 15 9 15L4 15Z"
        fill={fill}
      />
    </Svg>
  );
};

export default IconComp;
