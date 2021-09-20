import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BalanceLabel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Salto Atual: </Text>
      <Text style={styles.value}>$2.102,78</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
  },
  value: {
    fontSize: 30,
  },
});

export default BalanceLabel;
