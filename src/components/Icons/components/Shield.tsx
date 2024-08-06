import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../interface';

const IconComp: React.FC<IconProps> = ({fill, size}) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2307 2.02669L19.2095 3.52216L20 3.69155V4.49996V15V15.099L19.9806 15.1961C19.9021 15.5883 19.6894 16.0192 19.3966 16.4539C19.0928 16.905 18.6628 17.4191 18.0834 17.9806C16.9263 19.102 15.1424 20.4423 12.4883 21.8728C12.4621 21.8874 12.4354 21.9008 12.4081 21.9129C12.1566 22.0252 11.8613 22.0328 11.5945 21.9141C11.5664 21.9017 11.5387 21.8879 11.5117 21.8728C8.85755 20.4423 7.07373 19.102 5.91657 17.9806C5.33717 17.4191 4.90717 16.905 4.60338 16.4539C4.31061 16.0192 4.09786 15.5883 4.01942 15.1961L4 15.099V15V4.49996V3.69155L4.79047 3.52216L11.7693 2.02669C11.844 2.00894 11.9213 1.99968 12 1.99976C12.0787 1.99968 12.156 2.00894 12.2307 2.02669ZM12 19.8599C14.2689 18.5959 15.7561 17.4509 16.6916 16.5444C17.1913 16.06 17.5259 15.6512 17.7378 15.3367C17.8435 15.1796 17.9148 15.0519 17.9603 14.9554C17.9777 14.9184 17.9906 14.8877 18 14.8631V5.30838L12 4.02266L6 5.30838V14.8631C6.00936 14.8877 6.02226 14.9184 6.03968 14.9554C6.08525 15.0519 6.15646 15.1796 6.26225 15.3367C6.47408 15.6512 6.80866 16.06 7.30843 16.5444C8.24389 17.4509 9.73113 18.5959 12 19.8599Z"
        fill={fill}
      />
    </Svg>
  );
};

export default IconComp;
