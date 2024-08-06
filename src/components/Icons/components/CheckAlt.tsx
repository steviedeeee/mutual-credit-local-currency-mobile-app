import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../interface';

const IconComp: React.FC<IconProps> = ({fill = '#000', size = 24}) => {
  return (
    <Svg viewBox="0 0 9 7" fill="none" width={size} height={size}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.74326 0.786508C9.06077 1.06435 9.06077 1.51482 8.74326 1.79267L4.136 5.82429C3.81849 6.10213 3.3037 6.10213 2.98619 5.82429L0.276038 3.45275C-0.0414756 3.1749 -0.0414756 2.72443 0.276038 2.44659C0.593552 2.16874 1.10834 2.16874 1.42586 2.44659L3.5611 4.31505L7.59344 0.786508C7.91095 0.508664 8.42574 0.508664 8.74326 0.786508Z"
        fill={fill}
      />
    </Svg>
  );
};

export default IconComp;
