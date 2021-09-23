import React from 'react';
import {View, StyleSheet} from 'react-native';


import BalancePanel from '../../components/BalancePanel/index';
import EntrySummaryList from '../../components/EntrySummary/EntrySummaryList';
import EntryList from '../../components/EntryList';



const Main = () =>{
  return (
    <View style={styles.contanier}>
      <BalancePanel />
    
      <EntrySummaryList />
      <EntryList />
      
    </View>
  );
};
const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    padding:10,    
  },
});

export default Main;