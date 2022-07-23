import { StyleSheet } from 'react-native';

export const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    dataContainer: { flex: 1, backgroundColor: colors.background },
    icon: { marginRight: '4%' },
    gamesListContainer: {
      flex: 1,
      width: '100%',
    },
    itemContainer: {
      marginVertical: '2%',
      width: '92%',
      alignSelf: 'center',
    },
    loaderContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
