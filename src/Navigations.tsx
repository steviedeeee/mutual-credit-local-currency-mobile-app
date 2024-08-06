import React from 'react';
import Login from '../src/screens/Login';
import Home from '../src/screens/Home';
import ChangePassword from '../src/screens/ChangePassword';
import Register from '../src/screens/Register';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import ChangeProfile from './screens/ChangeProfile';
import ScanQrCode from './screens/ScanQrCode';
import QrCode from './screens/QrCode';
import ResetPassword from './screens/ResetPassword';
import ResetPasswordSuccess from './screens/ResetPasswordSuccess';
import TransactionDetail from './screens/TransactionDetail';
import Opening from './screens/Opening';
import Transaction from './screens/Transaction';
import TransactionList from './screens/TransactionList';
import RemoteTransaction from './screens/RemoteTransaction';
import UserStatistic from './screens/UserStatistic';
import Account from './screens/Account';
import UserSearch from './screens/UserSearch';
import Exchange from './screens/Exchange';
import Success from './screens/Success';
import ResetPasswordFound from './screens/ResetPasswordFound';
import UserList from './screens/UserList';
import CreateExchange from './screens/CreateExchange';
import ExchangeDetail from './screens/ExchangeDetail';
import UserDetail from './screens/UserDetail';
import AccountSettings from './screens/AccountSettings';
import SendMessage from './screens/SendMessage';
import Pin from './screens/Pin';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};
const Navigations = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName={'Splash'}
        screenOptions={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerShadowVisible: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Opening" component={Opening} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Reset Password"
          component={ResetPassword}
          options={() => ({
            headerShown: true,
            title: 'Reset Password',
          })}
        />
        <Stack.Screen name="Pin" component={Pin} />
        <Stack.Screen
          name="Reset Password Found"
          component={ResetPasswordFound}
          options={() => ({
            headerShown: true,
            title: 'Reset Password',
          })}
        />
        <Stack.Screen
          name="Reset Password Success"
          component={ResetPasswordSuccess}
          options={() => ({
            headerShown: true,
            title: 'Reset Password',
          })}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Ubah Profil"
          component={ChangeProfile}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Change Password"
          component={ChangePassword}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Transaction History"
          component={TransactionList}
          options={() => ({
            headerShown: true,
            title: 'Transaction History',
          })}
        />
        <Stack.Screen
          name="Transaction"
          component={Transaction}
          options={() => ({
            headerShown: true,
            title: 'Transaction',
          })}
        />
        <Stack.Screen
          name="Transaction Detail"
          component={TransactionDetail}
          options={() => ({
            headerShown: true,
            title: 'Transaction Detail',
          })}
        />
        <Stack.Screen
          name="My QR Code"
          component={QrCode}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Scan Qr Code"
          component={ScanQrCode}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Remote Transaction"
          component={RemoteTransaction}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen name="User Statistic" component={UserStatistic} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen
          name="Account Settings"
          component={AccountSettings}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Search Users"
          component={UserSearch}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="User List"
          component={UserList}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="User Detail"
          component={UserDetail}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Exchange"
          component={Exchange}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Create Exchange"
          component={CreateExchange}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Exchange Detail"
          component={ExchangeDetail}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Send Message"
          component={SendMessage}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen name="Success" component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
