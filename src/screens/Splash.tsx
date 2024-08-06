import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {useAuth} from '../context/AuthContext';

const Splash: React.FC<any> = ({navigation}) => {
  const {isFetched, me} = useAuth();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 600);
  }, []);

  useEffect(() => {
    if (isReady) {
      if (isFetched && me) {
        navigation.replace('Home');
      } else if (isFetched && !me) {
        navigation.replace('Opening');
        //navigation.replace('Login');
      }
    }
  }, [isFetched, me, isReady]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
      }}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{
          width: 300,
          height: 86,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
    </View>
  );
};

export default Splash;
