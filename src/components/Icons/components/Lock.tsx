import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../interface';

const IconComp: React.FC<IconProps> = ({fill, size}) => {
  return (
    <Svg viewBox="0 0 16 18" fill="none" width={size} height={size}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4V7H6V4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4ZM4 7V4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4V7H13C14.6569 7 16 8.34315 16 10V15C16 16.6569 14.6569 18 13 18H3C1.34315 18 0 16.6569 0 15V10C0 8.34315 1.34315 7 3 7H4ZM4 9H3C2.44772 9 2 9.44772 2 10V15C2 15.5523 2.44772 16 3 16H13C13.5523 16 14 15.5523 14 15V10C14 9.44772 13.5523 9 13 9H12H4ZM6 11C6 10.4477 6.44772 10 7 10C7.55228 10 8 10.4477 8 11V11.0204C8.15231 11.007 8.32702 11 8.52725 11C9.34061 11 9.99998 11.6716 9.99998 12.5C9.99998 13.3284 9.34061 14 8.52725 14C8.32702 14 8.15231 13.993 8 13.9796V14C8 14.5523 7.55228 15 7 15C6.44772 15 6 14.5523 6 14V11Z"
        fill={fill}
      />
    </Svg>
  );
};

export default IconComp;
