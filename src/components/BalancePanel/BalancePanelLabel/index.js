import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BalancePanelLabel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Salto Atual: </Text>
      <Text style={styles.value}>$2.102,78</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex: 1,
  }, 
  label:{
    fontSize: 20,
  },
  value:{ 
    fontSize:30,
  },
});

export default BalancePanelLabel;
