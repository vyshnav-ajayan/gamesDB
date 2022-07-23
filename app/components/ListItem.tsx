import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

type ListItemProps = {
  title: string;
  description?: string;
};

const ListItem: React.FC<ListItemProps> = ({ title, description }) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
        <Text style={styles.description}>{description}</Text>
      </Text>
    </View>
  );
};

const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: colors.background,
      width: '96%',
      paddingLeft: '5%',
      alignSelf: 'center',
      paddingVertical: '1%',
      borderRadius: 5,
      marginTop: 5,
    },
    title: {
      fontSize: 14,
      fontFamily: 'Poppins-SemiBold',
      color: colors.card,
    },
    description: {
      fontSize: 14,
      fontFamily: 'Poppins-Medium',
      color: colors.card,
    },
  });

export default ListItem;
