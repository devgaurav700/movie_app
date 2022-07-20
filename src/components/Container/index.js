import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {appColors} from '../../utils/appColors';
// import {appColors} from '../../utils/appColors';
// import CustomHeader from '../CustomHeader';

function Container({
  children,
  isScrollable,
  title,
  leftIcon,
  rightIcon,
  showHeader,
  showLeftIcon,
  showRightIcon,
  onLeftIconPress,
  onRightIconPress,
  innerViewStyle,
}): Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={appColors.primary}
      />
      <View style={[styles.container]}>
        {isScrollable ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[styles.innerView, {...innerViewStyle}]}>
              {children}
            </View>
          </ScrollView>
        ) : (
          <View style={[styles.innerView, {...innerViewStyle}]}>
            {children}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.primary,
  },
  innerView: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  light: {
    backgroundColor: appColors.primary,
  },
  dark: {
    backgroundColor: appColors.primary,
  },
  headerBottom: {
    height: scale(40),
    backgroundColor: appColors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(10),
  },
  headerBottomTxt: {
    fontSize: scale(14),
    color: appColors.primary,
  },
});
export default Container;
