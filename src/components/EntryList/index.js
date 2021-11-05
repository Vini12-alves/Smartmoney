import React from 'react';
import {View, StyleSheet} from 'react-native';

import EntryListItem from './EntryListItem';

const EntryList = ({entries}) => {
  return (
    <View>
      
      <EntryListItem entries = {entries}/>

    </View>
  );
};

const styles= StyleSheet.create({});

export default EntryList;
