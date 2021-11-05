import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

import BalancePanel from '../../components/BalancePanel/index';
import EntrySummaryList from '../../components/EntrySummary/EntrySummaryList';
import EntryList from '../../components/EntryList';

const Main = ({navigation}) => {
  const currentBalance = 2064.34

  const entriesGrouped = [
  {Key:  '1', description: 'Alimentação', amount: 201},
  {Key: '2', description: 'Combustivel' , amount:12},
  {Key: '3', description: 'Aluguel', amount: 120},
  {Key: '4', description: 'Lazer' , amount: 250},
  {Key: '5', description: 'Outros' , amount: 120},
]

  const entries=[
    {Key: '1', description: 'Padaria Corneta', amount: 20},
    {Key: '2', description: 'Supermercado', amount: 15},
    {Key: '3', description: 'Posto Gasolina', amount: 220},
  ]
  return (
    <View style={styles.contanier}>
      <BalancePanel currentBalance = {currentBalance} />
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
      <EntrySummaryList entriesGrouped= {entriesGrouped}/>
      <EntryList entries= {entries} />
    </View>
  );
};
const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    padding: 10,
  },
});

export default Main;
