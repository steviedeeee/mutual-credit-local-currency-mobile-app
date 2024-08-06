import React from 'react';
import Svg, {Circle, Defs, LinearGradient, Path, Stop} from 'react-native-svg';
import {IconProps} from '../interface';

const IconComp: React.FC<IconProps> = ({size}) => {
  return (
    <Svg viewBox="0 0 40 40" fill="none" width={size} height={size}>
      <Circle
        cx="20"
        cy="20"
        r="19"
        fill="#E7F3FF"
        stroke="url(#paint0_linear_73_1801)"
        strokeWidth="2"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.3929 26.7418C14.5612 26.8668 14.7475 26.9293 14.9518 26.9293H25.0482C25.2525 26.9293 25.4388 26.8668 25.6071 26.7418C25.7753 26.6163 25.8895 26.4522 25.9496 26.2495L27.9689 19.0223C28.029 18.8553 28.002 18.7002 27.8881 18.5571C27.7737 18.414 27.6203 18.3425 27.428 18.3425H23.7501L20.5769 13.6555C20.5168 13.5601 20.4327 13.4826 20.3245 13.4229C20.2163 13.3633 20.1022 13.3335 19.982 13.3335C19.8618 13.3335 19.7476 13.3633 19.6394 13.4229C19.5312 13.4826 19.4471 13.5601 19.387 13.6555L16.2139 18.3425H12.572C12.3797 18.3425 12.2263 18.414 12.1119 18.5571C11.998 18.7002 11.971 18.8553 12.0311 19.0223L14.0504 26.2495C14.1105 26.4522 14.2247 26.6163 14.3929 26.7418ZM22.0193 18.3425H17.9627L19.982 15.3371L22.0193 18.3425ZM17.0938 21.0312C16.9972 20.6478 16.6056 20.4147 16.2192 20.5105C15.8328 20.6064 15.5979 20.9949 15.6945 21.3783L16.4157 24.2406C16.5123 24.6239 16.9038 24.8571 17.2902 24.7612C17.6766 24.6654 17.9115 24.2768 17.8149 23.8934L17.0938 21.0312ZM20.7211 21.2047C20.7211 20.8095 20.3983 20.4892 20 20.4892C19.6017 20.4892 19.2788 20.8095 19.2788 21.2047V24.067C19.2788 24.4622 19.6017 24.7826 20 24.7826C20.3983 24.7826 20.7211 24.4622 20.7211 24.067V21.2047ZM23.7807 20.5105C23.3943 20.4147 23.0028 20.6478 22.9062 21.0312L22.185 23.8934C22.0884 24.2768 22.3233 24.6654 22.7097 24.7612C23.0961 24.8571 23.4877 24.6239 23.5843 24.2406L24.3054 21.3783C24.402 20.9949 24.1671 20.6064 23.7807 20.5105Z"
        fill="#00ABE8"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_73_1801"
          x1="32.0879"
          y1="-48.0734"
          x2="88.7334"
          y2="-18.3496"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="white" />
          <Stop offset="1" stopColor="#1E93F4" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default IconComp;
