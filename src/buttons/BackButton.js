import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appColors} from '../utils/appColors';
import {scale} from 'react-native-size-matters';

const BackButton = ({onBackPress, extraStyle}) => {
  return (
    <TouchableOpacity
      style={[styles.back, {...extraStyle}]}
      onPress={onBackPress}>
      <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  back: {
    backgroundColor: appColors.inActiveTabColor,
    height: scale(40),
    width: scale(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(15),
    alignSelf: 'flex-end',
  },
  backText: {
    color: appColors.white,
    fontSize: scale(14),
    fontWeight: '600',
  },
});
