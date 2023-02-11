import type { AppStateStatus } from 'react-native';
import React, { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { NativeBaseProvider } from 'native-base';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StatusBar, AppState, Platform, useColorScheme } from 'react-native';
import {
  QueryClient,
  focusManager,
  onlineManager,
  QueryClientProvider,
} from '@tanstack/react-query';

import { theme } from '@styles/theme';

import { Navigation } from '@routes/index';

const queryClient = new QueryClient();

onlineManager.setEventListener(setOnline => {
  return NetInfo.addEventListener(state => {
    setOnline(!!state.isConnected);
  });
});

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange);

    return () => subscription.remove();
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}

export default App;
