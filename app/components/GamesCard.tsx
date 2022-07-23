import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';

type GamesCardProps = {
  gameInfo: any;
  onPress?: (item: any) => any;
};

const GamesCard: React.FC<GamesCardProps> = ({ gameInfo, onPress }) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={() => onPress && onPress({ item: gameInfo })}>
      <Image
        style={styles.image}
        resizeMode={'cover'}
        source={{
          uri: gameInfo.background_image,
        }}
      />
      <View style={styles.cardContainer}>
        <Text style={styles.boldText} numberOfLines={2}>
          {gameInfo.name}
        </Text>
        <Text
          style={styles.mediumText}
          numberOfLines={
            2
          }>{`Total reviews: ${gameInfo.reviews_text_count}`}</Text>
        <Text
          style={styles.mediumText}
          numberOfLines={2}>{`Total ratings: ${gameInfo.ratings_count}`}</Text>
        <View style={styles.subContainer}>
          <View style={styles.userContainer}>
            <Icon
              name={'plus-thick'}
              size={16}
              color={colors.card}
              style={styles.icon}
            />
            <Text style={styles.semiBoldText}>{gameInfo.added}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={styles.semiBoldText}>{gameInfo.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.text,
      padding: '2%',
      width: '100%',
      marginVertical: 5,
      flexDirection: 'row',
      borderRadius: 5,
    },
    userContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.secondary,
      width: '30%',
      paddingVertical: 2,
      borderRadius: 3,
    },
    cardContainer: {
      flex: 1,
      paddingLeft: '4%',
      justifyContent: 'space-between',
      paddingVertical: '2%',
    },
    image: {
      width: 100,
      height: '100%',
      borderRadius: 5,
      elevation: 5,
    },
    boldText: {
      fontSize: 16,
      fontFamily: 'Poppins-SemiBold',
      color: colors.card,
    },
    semiBoldText: {
      fontSize: 12,
      fontFamily: 'Poppins-Medium',
      color: colors.card,
    },
    mediumText: {
      fontSize: 14,
      color: colors.card,
      fontFamily: 'Poppins-Medium',
    },
    ratingContainer: {
      borderWidth: 1,
      borderColor: colors.secondary,
      paddingVertical: 3,
      width: '25%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
    },
    subContainer: {
      marginTop: 3,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    },
    icon: {
      paddingRight: 5,
    },
  });

export default GamesCard;
