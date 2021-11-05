import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';

const NewEntry = ({navigation}) => {
  const currentBalance = 2064.35;
  return (
    <View style={styles.contanier}>
      <BalanceLabel currentBalance = {currentBalance}/>

      <View>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Camera" />
      </View>

      <View>
        <Button title="Adicionar" />
        <Button title="Cancelar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    padding: 30,
  },
  input: {
    borderColor: '#000',
    borderWidth: 10,
  },
});
export default NewEntry;
