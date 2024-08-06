import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../interface';

const IconComp: React.FC<IconProps> = ({fill, size}) => {
  return (
    <Svg viewBox="0 0 9 10" fill="none" width={size} height={size}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.83031 9.44444C3.83031 9.75127 4.13619 10 4.5135 10C4.89081 10 5.19668 9.75127 5.19668 9.44444L5.19668 2.28922L7.37338 4.76731C7.59269 5.01698 8.01937 5.07481 8.32641 4.89648C8.63344 4.71814 8.70455 4.37116 8.48524 4.12149L5.62526 0.865506C5.08032 0.245118 3.94647 0.245117 3.40154 0.865506L0.541552 4.12149C0.322243 4.37116 0.393357 4.71814 0.700389 4.89647C1.00742 5.07481 1.4341 5.01698 1.65341 4.76731L3.83031 2.28899L3.83031 9.44444Z"
        fill={fill}
      />
    </Svg>
  );
};

export default IconComp;
