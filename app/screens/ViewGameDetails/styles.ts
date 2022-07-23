import { StyleSheet } from 'react-native';

export const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.text,
    },
    horizontalLine: {
      backgroundColor: colors.background,
      height: 1,
      width: '100%',
    },
    gamesDetailsContainer: {
      flex: 1,
    },
    itemContainer: {
      marginVertical: '2%',
      width: '30%',
    },
    screenshotsContainer: {
      height: '25%',
    },
    title: {
      fontSize: 22,
      fontWeight: '500',
      color: colors.card,
      textAlign: 'left',
      paddingVertical: 5,
      paddingLeft: 10,
      fontFamily: 'Poppins-SemiBold',
    },
  });
