import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../interface';

const IconComp: React.FC<IconProps> = ({fill, size}) => {
  return (
    <Svg viewBox="0 0 20 16" fill="none" width={size} height={size}>
      <Path
        d="M2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196 15.021 0 14.55 0 14V2C0 1.45 0.196 0.979333 0.588 0.588C0.979333 0.196 1.45 0 2 0H18C18.55 0 19.021 0.196 19.413 0.588C19.8043 0.979333 20 1.45 20 2V14C20 14.55 19.8043 15.021 19.413 15.413C19.021 15.8043 18.55 16 18 16H2ZM10 9L2 4V14H18V4L10 9ZM10 7L18 2H2L10 7Z"
        fill={fill}
      />
    </Svg>
  );
};

export default IconComp;
