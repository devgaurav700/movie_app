import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import {appColors} from '../utils/appColors';
import {scale} from 'react-native-size-matters';
import MovieListComp from '../components/movieListComp';
import BackButton from '../buttons/BackButton';

const WatchList = ({navigation}) => {
  return (
    <Container>
      <Text style={styles.headerTitle}>Movies Apps</Text>
      <Text style={styles.subTitle}>Your watch list</Text>
      <FlatList
        data={[1, 2, 3]}
        keyExtractor={item => item.toString()}
        renderItem={() => <MovieListComp />}
      />
      <BackButton onBackPress={() => navigation.goBack()} />
    </Container>
  );
};

export default WatchList;

const styles = StyleSheet.create({
  headerTitle: {
    color: appColors.white,
    fontSize: scale(22),
    fontWeight: '700',
    marginBottom: scale(20),
  },
  subTitle: {
    fontSize: scale(18),
    color: appColors.white,
    marginBottom: scale(10),
    fontWeight: '600',
  },
});
