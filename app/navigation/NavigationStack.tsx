import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './NavigationService';

import Home from 'app/screens/Home';
import Splash from 'app/screens/Splash';
import ViewGameDetails from 'app/screens/ViewGameDetails';

import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

interface IProps {
  theme: Theme;
}

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ViewDetails" component={ViewGameDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
