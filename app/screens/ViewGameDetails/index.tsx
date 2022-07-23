import React from 'react';
import { View, FlatList, Text, SafeAreaView } from 'react-native';
import Header from 'app/components/Header';
import ImageCard from 'app/components/ImageCard';
import GamesCard from 'app/components/GamesCard';
import ListItem from 'app/components/ListItem';
import NavigationService from 'app/navigation/NavigationService';
import { useTheme } from '@react-navigation/native';
import { makeStyles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Moment from 'moment';

const ViewGameDetails: React.FC = (props: any) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);
  const goBack = () => NavigationService.goBack();
  const gameData = props.route.params?.game;

  const renderItem = (item: any) => {
    return <ImageCard imageCardInfo={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Games'}
        icon={
          <Icon
            name={'arrow-left'}
            size={22}
            color={colors.text}
            onPress={() => goBack()}
          />
        }
      />
      <View style={styles.container}>
        <GamesCard gameInfo={gameData} />
        <View style={styles.horizontalLine} />
        {gameData?.released ? (
          <ListItem
            title={'Released : '}
            description={Moment(gameData?.released).format('DD/MM/YYYY')}
          />
        ) : null}
        {gameData?.updated ? (
          <ListItem
            title={'Updated : '}
            description={Moment(gameData?.updated).format('DD/MM/YYYY')}
          />
        ) : null}
        <Text style={styles.title}>Screenshots</Text>
        <FlatList
          contentContainerStyle={styles.screenshotsContainer}
          data={gameData?.short_screenshots}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default ViewGameDetails;
