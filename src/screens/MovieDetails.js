import {Image, StyleSheet, Text, ScrollView, View} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import {getImage} from '../utils/getImage';
import {scale} from 'react-native-size-matters';
import {appColors} from '../utils/appColors';
import TabComp from '../components/TabComp';
import {moviesCategories} from '../utils/mockData';
import AboutMovie from '../components/AboutMovie';
import BackButton from '../buttons/BackButton';
import WatchListIcon from '../assets/svg/watchlist1.svg';
const MovieDetails = ({navigation}) => {
  return (
    <Container innerViewStyle={{paddingHorizontal: 0}} isScrollable>
      <Image
        source={getImage('spidy')}
        style={styles.coverImg}
        resizeMode="contain"
      />
      <View style={styles.detailsView}>
        <View style={styles.row}>
          <Image
            source={getImage('spidy2')}
            style={styles.img}
            resizeMode="contain"
          />
          <Text style={styles.subTitle}>Spiderman No Way Home</Text>
        </View>
        <ScrollView
          horizontal
          style={styles.tabView}
          showsHorizontalScrollIndicator={false}>
          {moviesCategories.map(data => (
            <TabComp data={data} key={data} />
          ))}
        </ScrollView>
        <AboutMovie />
        <View style={{...styles.row, justifyContent: 'space-between'}}>
          <BackButton
            extraStyle={styles.backBtn}
            onBackPress={() => navigation.goBack()}
          />
          <View style={styles.watchlistSmallBtn}>
            <WatchListIcon fill={'#000'} />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  coverImg: {
    height: scale(200),
    width: '100%',
  },
  img: {
    height: scale(120),
    width: scale(120),
    marginTop: scale(-70),
  },
  detailsView: {
    padding: scale(15),
  },
  row: {
    flexDirection: 'row',
  },
  subTitle: {
    fontSize: scale(18),
    color: appColors.white,
    marginBottom: scale(10),
    fontWeight: '600',
    width: '60%',
  },
  tabView: {
    maxHeight: scale(50),
    marginTop: scale(20),
  },
  backBtn: {
    alignSelf: 'flex-start',
  },
  watchlistSmallBtn: {
    height: scale(40),
    width: scale(40),
    backgroundColor: appColors.activeTabColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(10),
  },
});
