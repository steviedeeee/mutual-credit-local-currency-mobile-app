import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../interface';

const IconComp: React.FC<IconProps> = ({fill, size}) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 17.5004C11.4477 17.5004 11 17.0527 11 16.5004V10.5323C11 9.98002 11.4477 9.53231 12 9.53231C12.5523 9.53231 13 9.98002 13 10.5323V16.5004C13 17.0527 12.5523 17.5004 12 17.5004ZM11 7.49906C11 6.94713 11.4477 6.49971 12 6.49971C12.5523 6.49971 13 6.94713 13 7.49906C13 8.05098 12.5523 8.4984 12 8.4984C11.4477 8.4984 11 8.05098 11 7.49906Z"
        fill={fill}
      />
    </Svg>
  );
};

export default IconComp;
