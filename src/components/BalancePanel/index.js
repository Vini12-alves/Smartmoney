import React from 'react';
import {View, Button, StyleSheet} from 'react-native';


import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

const BalancePanel = ({currentBalance}) => {

  return (
    <View>
       
      <BalancePanelLabel currentBalance= {currentBalance}/> 
      <BalancePanelChart />
      
    </View>
  );
};
const styles = StyleSheet.create({});

export default BalancePanel;