import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {getImage} from '../../utils/getImage';
import {appColors} from '../../utils/appColors';
import Watchlist from '../../assets/svg/watchlist1.svg';
import Star from '../../assets/svg/star.svg';
const MovieListComp = ({onPressMovie}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressMovie}>
      <Image source={getImage('avengers')} />
      <View style={styles.innerView}>
        <View style={styles.innerSubView}>
          <Text style={styles.keyName}>Title:</Text>
          <Text style={styles.keyName}>Avangers End Game</Text>
        </View>
        <View style={styles.innerSubView}>
          <Text style={styles.keyName}>Release Date:</Text>
          <Text style={styles.keyName}>2019-08-03</Text>
        </View>
        <View style={styles.innerSubView}>
          <Text style={styles.keyName}>Average Rating:</Text>
          <Text style={styles.keyName}>9.2</Text>
        </View>
      </View>
      <View style={styles.ratingsView}>
        <Watchlist width={20} fill={appColors.activeTabColor} />
        <Star width={20} />
        <Text style={styles.starRatings}>9.5</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieListComp;

const styles = StyleSheet.create({
  container: {
    height: scale(120),
    flexDirection: 'row',
    borderRadius: scale(10),
  },
  innerView: {
    marginLeft: scale(22),
    flex: 1,
  },
  innerSubView: {
    marginBottom: scale(10),
  },
  keyName: {
    fontSize: scale(12),
    fontWeight: '500',
    color: appColors.white,
  },
  ratingsView: {
    width: scale(35),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: scale(80),
  },
  starRatings: {
    fontSize: scale(12),
    fontWeight: '500',
    color: appColors.activeTabColor,
  },
});
