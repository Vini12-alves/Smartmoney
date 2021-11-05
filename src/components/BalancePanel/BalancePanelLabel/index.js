import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BalancePanelLabel = ({currentBalance}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Salto Atual: </Text>
      <Text style={styles.value}>{currentBalance} </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    //flex: 1,
    alignItems: 'center',
  }, 
  label:{
    fontSize: 20,
  },
  value:{ 
    fontSize:30,
  },
});

export default BalancePanelLabel;
