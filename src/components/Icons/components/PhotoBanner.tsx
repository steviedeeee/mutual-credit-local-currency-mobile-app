import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../interface';

const IconComp: React.FC<IconProps> = ({fill, size}) => {
  return (
    <Svg viewBox="0 0 64 54" fill="none" width={size} height={size}>
      <Path
        d="M45.4886 53.8148C45.0295 53.8144 44.5779 53.7001 44.1756 53.4827L6.82 33.4001C6.18202 33.0562 5.70887 32.4775 5.50434 31.7911C5.29981 31.1047 5.38061 30.3666 5.72901 29.7387L21.4933 1.40331C21.6662 1.09248 21.8997 0.818173 22.1805 0.596055C22.4613 0.373938 22.7838 0.20836 23.1297 0.108774C23.4755 0.0091877 23.838 -0.0224554 24.1963 0.0156512C24.5546 0.0537578 24.9017 0.160868 25.2179 0.330866L62.5735 20.4135C63.2115 20.7574 63.6846 21.336 63.8892 22.0224C64.0937 22.7088 64.0129 23.4469 63.6645 24.0748L47.9002 52.4102C47.7281 52.7216 47.4948 52.9964 47.2139 53.2186C46.933 53.4408 46.6101 53.606 46.2638 53.7047C46.0121 53.7775 45.751 53.8146 45.4886 53.8148ZM44.4013 53.0769C44.9304 53.3614 45.5528 53.4276 46.1316 53.2609C46.7103 53.0943 47.1981 52.7084 47.4874 52.1883L63.2517 23.8529C63.5404 23.3326 63.6073 22.7211 63.4379 22.1523C63.2684 21.5836 62.8764 21.1041 62.3478 20.8192L24.9922 0.736584C24.4631 0.45214 23.8407 0.385964 23.2619 0.552613C22.6832 0.719262 22.1954 1.10509 21.9061 1.62521L6.14178 29.9606C5.85311 30.4809 5.78616 31.0925 5.95563 31.6612C6.12509 32.2299 6.51713 32.7094 7.04574 32.9943L44.4013 53.0769Z"
        fill="white"
      />
      <Path
        d="M46.259 43.9049C45.8292 43.9047 45.4063 43.7982 45.0293 43.5953L14.8284 27.3592C14.5345 27.2015 14.2752 26.9885 14.0652 26.7323C13.8552 26.476 13.6987 26.1816 13.6046 25.8658C13.5105 25.55 13.4807 25.219 13.5168 24.8919C13.553 24.5648 13.6544 24.2479 13.8153 23.9593L23.2302 7.03655C23.3908 6.7479 23.6076 6.49317 23.8683 6.2869C24.129 6.08064 24.4285 5.92687 24.7497 5.8344C25.0709 5.74192 25.4074 5.71254 25.7401 5.74794C26.0729 5.78334 26.3952 5.88282 26.6888 6.0407L56.8898 22.2769C57.1834 22.4347 57.4425 22.6479 57.6523 22.9041C57.8622 23.1604 58.0186 23.4548 58.1126 23.7705C58.2067 24.0862 58.2366 24.4171 58.2006 24.7441C58.1646 25.0712 58.0634 25.3881 57.9028 25.6767L57.8684 25.6582L57.9028 25.6767L48.4879 42.5995C48.2702 42.9941 47.9483 43.3236 47.556 43.5534C47.1637 43.7831 46.7156 43.9046 46.259 43.9049Z"
        fill="white"
      />
      <Path
        d="M45.3215 53.8072H2.7444C2.06877 53.8064 1.42103 53.5423 0.943285 53.0726C0.465543 52.603 0.196811 51.9663 0.196045 51.3021V19.006C0.196811 18.3419 0.465543 17.7052 0.943285 17.2355C1.42103 16.7659 2.06877 16.5017 2.7444 16.501H45.3215C45.9971 16.5017 46.6448 16.7659 47.1226 17.2355C47.6003 17.7052 47.869 18.3419 47.8698 19.006V51.3021C47.869 51.9663 47.6003 52.603 47.1226 53.0726C46.6448 53.5423 45.9971 53.8064 45.3215 53.8072Z"
        fill="white"
      />
      <Path
        d="M45.3214 54.0002H2.74438C2.01678 53.9994 1.31921 53.7149 0.804715 53.2091C0.290221 52.7034 0.000819143 52.0177 0 51.3024V19.0064C0.000819143 18.2911 0.290221 17.6054 0.804715 17.0996C1.31921 16.5939 2.01678 16.3094 2.74438 16.3086H45.3214C46.0491 16.3094 46.7466 16.5939 47.2611 17.0996C47.7756 17.6054 48.065 18.2911 48.0658 19.0064V51.3024C48.065 52.0177 47.7756 52.7034 47.2611 53.2091C46.7466 53.7149 46.0491 53.9994 45.3214 54.0002ZM2.74438 16.7711C2.14151 16.7717 1.56352 17.0075 1.13723 17.4265C0.710935 17.8456 0.471145 18.4137 0.470465 19.0064V51.3024C0.471145 51.8951 0.710935 52.4632 1.13723 52.8823C1.56352 53.3013 2.14151 53.537 2.74438 53.5377H45.3214C45.9243 53.537 46.5023 53.3013 46.9286 52.8823C47.3549 52.4632 47.5947 51.8951 47.5954 51.3024V19.0064C47.5947 18.4137 47.3549 17.8456 46.9286 17.4265C46.5023 17.0075 45.9243 16.7717 45.3214 16.7711H2.74438Z"
        fill="#FBFBFB"
      />
      <Path
        d="M30.6589 27.1216C30.1643 27.1212 29.6763 27.2337 29.2334 27.4502C28.7906 27.6667 28.4048 27.9813 28.1066 28.3692C27.7865 28.2338 27.4372 28.1786 27.09 28.2087C26.7429 28.2387 26.4088 28.3531 26.1177 28.5414C25.8266 28.7297 25.5876 28.9862 25.4222 29.2877C25.2569 29.5892 25.1702 29.9264 25.1702 30.269H33.8607C33.8607 29.8557 33.7779 29.4464 33.617 29.0645C33.4561 28.6827 33.2203 28.3357 32.9229 28.0434C32.6256 27.7512 32.2727 27.5193 31.8842 27.3612C31.4958 27.203 31.0794 27.1216 30.6589 27.1216Z"
        fill="#E6E6E6"
      />
      <Path
        d="M11.6202 39.4412C14.4678 39.4412 16.7763 37.172 16.7763 34.3727C16.7763 31.5734 14.4678 29.3042 11.6202 29.3042C8.77257 29.3042 6.46411 31.5734 6.46411 34.3727C6.46411 37.172 8.77257 39.4412 11.6202 39.4412Z"
        fill="#009240"
      />
      <Path
        d="M41.8213 44.8182C41.6322 44.862 41.4385 44.884 41.2442 44.8837H6.82185C6.39791 44.8844 5.98076 44.7791 5.60962 44.5777L5.70135 44.4482L9.54191 39.0118L15.233 30.9578L15.3161 30.8399L16.2115 29.5727C16.2717 29.4874 16.352 29.4178 16.4455 29.3696C16.5391 29.3215 16.6431 29.2964 16.7487 29.2964C16.8542 29.2964 16.9582 29.3215 17.0518 29.3696C17.1453 29.4178 17.2256 29.4874 17.2858 29.5727L20.2607 33.782V33.7828L22.0108 36.2601L26.1885 42.172L32.5249 33.281C32.5852 33.1962 32.6655 33.127 32.7589 33.0792C32.8522 33.0313 32.956 33.0064 33.0612 33.0064C33.1665 33.0064 33.2702 33.0313 33.3636 33.0792C33.457 33.127 33.5372 33.1962 33.5976 33.281L37.6624 38.9841L37.896 39.3116L41.8213 44.8182Z"
        fill="#3F3D56"
      />
      <Path
        d="M23.8158 32.377C23.2056 32.3765 22.6035 32.5153 22.0571 32.7824C21.5107 33.0495 21.0347 33.4376 20.6668 33.9162C20.2719 33.7491 19.8409 33.6811 19.4126 33.7182C18.9843 33.7552 18.5721 33.8963 18.213 34.1287C17.8538 34.361 17.559 34.6774 17.355 35.0494C17.1509 35.4215 17.044 35.8375 17.0439 36.2601H27.7661C27.7661 35.7502 27.6639 35.2452 27.4654 34.7741C27.2669 34.303 26.9759 33.8749 26.6091 33.5143C26.2423 33.1537 25.8068 32.8677 25.3275 32.6725C24.8482 32.4774 24.3346 32.377 23.8158 32.377Z"
        fill="#CCCCCC"
      />
      <Path
        d="M41.244 44.9609H6.82169C6.4818 44.9612 6.14518 44.8956 5.83111 44.7679C5.51703 44.6402 5.23166 44.4528 4.99132 44.2165C4.75098 43.9803 4.5604 43.6998 4.43047 43.391C4.30054 43.0823 4.23382 42.7514 4.23413 42.4173V23.1291C4.23491 22.4547 4.50777 21.8081 4.99287 21.3313C5.47796 20.8544 6.13566 20.5862 6.82169 20.5854H41.244C41.9301 20.5862 42.5878 20.8544 43.0728 21.3313C43.5579 21.8081 43.8308 22.4547 43.8316 23.1291V42.4173C43.832 42.7514 43.7653 43.0823 43.6354 43.3911C43.5055 43.6999 43.3149 43.9805 43.0746 44.2167C42.8342 44.453 42.5488 44.6403 42.2347 44.768C41.9206 44.8957 41.5839 44.9613 41.244 44.9609ZM6.82169 20.7396C6.17724 20.7403 5.5594 20.9923 5.10371 21.4403C4.64801 21.8882 4.39168 22.4956 4.39095 23.1291V42.4173C4.39065 42.7311 4.45332 43.042 4.57537 43.332C4.69742 43.6221 4.87645 43.8856 5.10223 44.1075C5.328 44.3295 5.59608 44.5055 5.89113 44.6254C6.18618 44.7454 6.5024 44.807 6.82169 44.8067H41.244C41.5633 44.8071 41.8796 44.7455 42.1747 44.6256C42.4698 44.5056 42.7379 44.3296 42.9637 44.1077C43.1894 43.8857 43.3685 43.6222 43.4905 43.3321C43.6125 43.042 43.6751 42.7312 43.6748 42.4173V23.1291C43.674 22.4956 43.4177 21.8882 42.962 21.4403C42.5063 20.9923 41.8885 20.7403 41.244 20.7396H6.82169Z"
        fill="#3F3D56"
      />
    </Svg>
  );
};

export default IconComp;