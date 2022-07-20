import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {appColors} from '../../utils/appColors';

const AboutMovie = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.aboutMovieTxt}>About Movie</Text>
      <View style={styles.devider} />
      <View style={styles.overViewContainer}>
        <Text style={styles.overViewTxt}>Overviews:</Text>
        <Text style={[styles.overViewTxt, {fontWeight: '400'}]}>
          From DC Comics comes the Suicide Squad, an antihero team of
          incarcerated supervillains who act as deniable assets for the United
          States government, undertaking high-risk black ops missions in
          exchange for commuted prison sentences.
        </Text>
        <View style={styles.overViewContainer}>
          <Text style={styles.overViewTxt}>Release Date:</Text>
          <Text style={[{...styles.overViewTxt, fontWeight: '400'}]}>
            2019-08-03
          </Text>
        </View>

        <View style={styles.row}>
          <View style={styles.overViewContainer}>
            <Text style={styles.overViewTxt}>Average Rating:</Text>
            <Text style={[{...styles.overViewTxt, fontWeight: '400'}]}>
              9.2
            </Text>
          </View>
          <View style={{...styles.overViewContainer, marginLeft: scale(80)}}>
            <Text style={styles.overViewTxt}>Rate Count:</Text>
            <Text style={[{...styles.overViewTxt, fontWeight: '400'}]}>
              1466
            </Text>
          </View>
        </View>
        <View style={styles.overViewContainer}>
          <Text style={styles.overViewTxt}>Popularity:</Text>
          <Text style={[{...styles.overViewTxt, fontWeight: '400'}]}>
            48.261451
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AboutMovie;

const styles = StyleSheet.create({
  container: {
    marginVertical: scale(20),
  },
  aboutMovieTxt: {
    fontSize: scale(14),
    fontWeight: '500',
    lineHeight: scale(21),
    color: appColors.white,
  },
  devider: {
    marginTop: scale(10),
    height: scale(4),
    backgroundColor: '#3A3F47',
    width: scale(90),
  },
  overViewContainer: {
    marginTop: scale(10),
  },
  overViewTxt: {
    fontSize: scale(12),
    fontWeight: '500',
    color: appColors.white,
    lineHeight: scale(18),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
