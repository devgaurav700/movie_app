import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Container from '../components/Container';
import {appColors} from '../utils/appColors';
import {scale} from 'react-native-size-matters';
import TabComp from '../components/TabComp';
import MovieListComp from '../components/movieListComp';
import {moviesCategories} from '../utils/mockData';

import WatchlistBtn from '../buttons/WatchlistBtn';
const MovieList = ({navigation}) => {
  return (
    <Container>
      <Text style={styles.headerTitle}>Movies Apps</Text>
      <Text style={styles.subTitle}>Find your movie</Text>
      <Text style={styles.subTitle}>Categories</Text>
      <ScrollView
        horizontal
        style={{maxHeight: scale(50)}}
        showsHorizontalScrollIndicator={false}>
        {moviesCategories.map((data, ind) => (
          <TabComp data={data} key={ind} ind={ind} />
        ))}
      </ScrollView>
      <FlatList
        data={[1, 2, 3]}
        keyExtractor={item => item.toString()}
        renderItem={() => (
          <MovieListComp
            onPressMovie={() => navigation.navigate('MovieDetails')}
          />
        )}
      />
      <WatchlistBtn onPress={() => navigation.navigate('WatchList')} />
    </Container>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  headerTitle: {
    color: appColors.white,
    fontSize: scale(22),
    fontWeight: '700',
    marginBottom: scale(10),
  },
  subTitle: {
    fontSize: scale(18),
    color: appColors.white,
    marginBottom: scale(10),
    fontWeight: '600',
  },
  tabStyle: {
    height: scale(50),
  },
});
