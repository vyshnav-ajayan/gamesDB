import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';

type ImageCardProps = {
  imageCardInfo: any;
};

const ImageCard: React.FC<ImageCardProps> = ({ imageCardInfo }) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode={'cover'}
        source={{
          uri: imageCardInfo.image,
        }}
      />
    </View>
  );
};

const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.text,
      margin: 5,
      flexDirection: 'row',
      borderRadius: 5,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 5,
      elevation: 5,
    },
  });

export default ImageCard;
