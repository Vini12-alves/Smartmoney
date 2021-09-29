import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

import BalancePanel from '../../components/BalancePanel/index';
import EntrySummaryList from '../../components/EntrySummary/EntrySummaryList';
import EntryList from '../../components/EntryList';

const Main = ({navigation}) => {
  return (
    <View style={styles.contanier}>
      <BalancePanel />
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
      <EntrySummaryList />
      <EntryList />
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
