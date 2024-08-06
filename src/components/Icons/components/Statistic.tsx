import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../interface';

const IconComp: React.FC<IconProps> = ({fill, size}) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 15.3489C1.55228 15.3489 2 15.7966 2 16.3489V20C2 21.1046 2.89543 22 4 22H23C23.5523 22 24 22.4478 24 23C24 23.5523 23.5523 24 23 24H4C1.79086 24 0 22.2092 0 20V16.3489C0 15.7966 0.447715 15.3489 1 15.3489Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 10.2327C6.55228 10.2327 7 10.6804 7 11.2327V19.4187C7 19.971 6.55228 20.4187 6 20.4187C5.44772 20.4187 5 19.971 5 19.4187V11.2327C5 10.6804 5.44772 10.2327 6 10.2327Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 5.11621C11.5523 5.11621 12 5.56393 12 6.11621V19.4185C12 19.9708 11.5523 20.4185 11 20.4185C10.4477 20.4185 10 19.9708 10 19.4185V6.11621C10 5.56393 10.4477 5.11621 11 5.11621Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 6.1394C17.5523 6.1394 18 6.58712 18 7.1394V19.4185C18 19.9708 17.5523 20.4185 17 20.4185C16.4477 20.4185 16 19.9708 16 19.4185V7.1394C16 6.58712 16.4477 6.1394 17 6.1394Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 0C22.5523 0 23 0.447715 23 1V19.4186C23 19.9709 22.5523 20.4186 22 20.4186C21.4477 20.4186 21 19.9709 21 19.4186V1C21 0.447715 21.4477 0 22 0Z"
        fill={fill}
      />
    </Svg>
  );
};

export default IconComp;
