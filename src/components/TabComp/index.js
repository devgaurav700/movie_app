import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {scale} from 'react-native-size-matters';
import {appColors} from '../../utils/appColors';

const TabComp = ({data, ind}) => {
  const [selectedTab, setSelectedTab] = useState('');

  return (
    <Pressable
      style={{
        ...styles.container,
        backgroundColor:
          selectedTab === ind
            ? appColors.activeTabColor
            : appColors.inActiveTabColor,
      }}
      onPress={() => {
        setSelectedTab(ind);
        // alert(selectedTab);
      }}>
      <Text style={styles.name}>{data}</Text>
    </Pressable>
  );
};

export default TabComp;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: scale(32),
    minWidth: scale(70),
    borderRadius: scale(20),
    paddingHorizontal: scale(8),
    marginHorizontal: scale(5),
  },
  name: {
    fontSize: scale(12),
    fontWeight: '400',
    color: appColors.white,
  },
});
