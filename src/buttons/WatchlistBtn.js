import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {appColors} from '../utils/appColors';
import WatchList from '../assets/svg/watchlist.svg';
const WatchlistBtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.watchListBtn}>
      <Text style={styles.watchListTxt}>Watch List</Text>
      <WatchList height={scale(18)} width={scale(18)} fill={'#000'} />
    </TouchableOpacity>
  );
};

export default WatchlistBtn;

const styles = StyleSheet.create({
  watchListBtn: {
    height: scale(40),
    paddingHorizontal: scale(20),
    width: scale(120),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(15),
    backgroundColor: appColors.activeTabColor,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  watchListTxt: {
    fontSize: scale(14),
    color: appColors.black,
    marginRight: scale(5),
    fontSize: scale(14),
    fontWeight: '600',
  },
});
