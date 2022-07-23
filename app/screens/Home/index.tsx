import React, { useEffect, useState } from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import Header from 'app/components/Header';

import { useDispatch, useSelector } from 'react-redux';
import * as gamesActions from 'app/store/actions/gamesActions';
import { IGamesListState } from 'app/models/reducers/games';
import { ILoading } from 'app/models/reducers/loading';
import { makeStyles } from './styles';
import { ActivityIndicator } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import NavigationService from 'app/navigation/NavigationService';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GamesCard from 'app/components/GamesCard';

interface IState {
  gamesListReducer: IGamesListState;
}

interface ILoadingState {
  loadingReducer: ILoading;
}

const Home: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  const gamesData = useSelector(
    (state: IState) => state.gamesListReducer?.games,
  );
  const initialFetch = useSelector(
    (state: IState) => state.gamesListReducer?.completeInitialFetch,
  );
  const isLoading = useSelector(
    (state: ILoadingState) => state.loadingReducer.isLoading,
  );

  const dispatch = useDispatch();

  const gotoDetails = ({ item }) =>
    NavigationService.navigate('ViewDetails', { game: item });

  useEffect(() => {
    dispatch(gamesActions.requestGameList(pageNumber));
  }, [pageNumber]);

  const onEnd = () => {
    setPageNumber(pageNumber + 1);
  };

  const renderItem = item => {
    return <GamesCard gameInfo={item} onPress={gotoDetails} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Games'}
        icon={
          <Icon
            name={'gamepad-square'}
            size={25}
            style={styles.icon}
            color={'white'}
          />
        }
      />
      <View style={styles.dataContainer}>
        {isLoading && !initialFetch ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        ) : (
          <FlatList
            style={styles.gamesListContainer}
            contentContainerStyle={styles.itemContainer}
            data={gamesData}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={item => item.id}
            onEndReached={onEnd}
            onEndReachedThreshold={3}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
