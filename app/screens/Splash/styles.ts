import { StyleSheet } from 'react-native';

export const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 100,
    },
    title: {
      fontSize: 35,
      fontFamily: 'Poppins-Bold',
      color: colors.text,
    },
    icon: {
      marginBottom: 20,
    },
  });
