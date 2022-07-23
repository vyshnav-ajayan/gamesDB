import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import NavigationService from 'app/navigation/NavigationService';
import { makeStyles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Splash: React.FC = () => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  useEffect(() => {
    setTimeout(() => {
      NavigationService.navigate('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Icon
        name={'gamepad-square'}
        size={50}
        style={styles.icon}
        color={'white'}
      />
      <Text style={styles.title}>GAMES DB</Text>
    </View>
  );
};

export default Splash;
