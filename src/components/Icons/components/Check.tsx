import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../interface';

const IconComp: React.FC<IconProps> = ({fill = '#000', size = 24}) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.6198 6.18017C20.0368 6.48143 20.1242 7.05512 19.8151 7.46155L12.3644 17.2588C11.7456 18.0725 10.5667 18.2424 9.73272 17.638L4.37909 13.758C3.96257 13.4561 3.87599 12.8823 4.18571 12.4763C4.49544 12.0703 5.08418 11.9859 5.50071 12.2878L10.8543 16.1678L18.3051 6.37061C18.6141 5.96418 19.2028 5.87892 19.6198 6.18017Z"
        fill={fill}
      />
    </Svg>
  );
};

export default IconComp;
