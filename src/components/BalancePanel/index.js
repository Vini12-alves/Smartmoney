import React from 'react';
import {View, Button, StyleSheet} from 'react-native';


import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

const BalancePanel = () => {
  return (
    <View>
       
      <BalancePanelLabel />
      <BalancePanelChart />
      
    </View>
  );
};
const styles = StyleSheet.create({});

export default BalancePanel;