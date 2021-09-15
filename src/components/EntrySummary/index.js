import React from 'react';
import {View, StyleSheet} from 'react-native';

import EntrySummaryChart from './EntrySummaryChart'
import EntrySummaryList from './EntrySummaryList';

const EntrySummary = () => {
  return (
    <View style={styles.contanier}>

      <EntrySummaryChart />
      <EntrySummaryList />
  
    </View>
  );
};
const styles = StyleSheet.create({
  contanier: {
    flex: 1,
  }
});

export default EntrySummary;