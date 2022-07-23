import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

type HeaderProps = {
  title: string;
  icon?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ title, icon }) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: colors.primary,
      width: '100%',
      paddingLeft: '5%',
      paddingVertical: '5%',
    },
    title: {
      fontSize: 22,
      fontFamily: 'Poppins-SemiBold',
      color: colors.text,
      marginLeft: 15,
    },
  });

export default Header;
