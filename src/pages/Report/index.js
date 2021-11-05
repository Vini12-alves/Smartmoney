import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummaryList from '../../components/EntrySummary/EntrySummaryList';
import EntryListItem from '../../components/EntryList/EntryListItem';

const Report = () => {
  const currentBalance = 2065.35;
  return (
    <View style={styles.contanier}>
      <BalanceLabel  currentBalance= {currentBalance}/>
      <View>
        <Picker>
          <Picker.Item label="Todas categorias"  />
        </Picker>
        <Picker>
          <Picker.Item label="Ultimos 7 dias" />
        </Picker>
      </View>
      <EntrySummaryList />
      <EntryListItem />

      <Button title="Salvar" />
      <Button title="Fechar" />
    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    //flex:1,
    padding: 10,
  },
});

export default Report;
