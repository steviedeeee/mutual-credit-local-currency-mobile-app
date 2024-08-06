import React from 'react';
import {ConfirmationProvider} from './src/context/ConfirmationContext';
import {AuthProvider} from './src/context/AuthContext';
import Navigations from './src/Navigations';
import {LoadingProvider} from './src/context/LoadingContext';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {Linking} from 'react-native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {BottomSheetProvider} from './src/context/BottomSheetContext';
import {ModalProvider} from './src/context/ModalContext';

async function urlOpener(url: string, redirectUrl: string) {
  await InAppBrowser.isAvailable();
  const authSessionResult = await InAppBrowser.openAuth(url, redirectUrl, {
    showTitle: false,
    enableUrlBarHiding: true,
    enableDefaultShare: false,
    ephemeralWebSession: false,
  });

  if (authSessionResult.type === 'success') {
    Linking.openURL(authSessionResult.url);
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <LoadingProvider>
            <ModalProvider>
              <BottomSheetProvider>
                <ConfirmationProvider>
                  <AuthProvider>
                    <Navigations />
                  </AuthProvider>
                </ConfirmationProvider>
              </BottomSheetProvider>
            </ModalProvider>
          </LoadingProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
