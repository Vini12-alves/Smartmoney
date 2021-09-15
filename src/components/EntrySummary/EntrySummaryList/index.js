import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const EntrySummaryList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>

      <FlatList 
        data={[
            {Key: 'Alimentação: $201'},
            {Key: 'Combustivel: $12'},
            {Key: 'Aluguel: $120'},
            {Key: 'Lazer: $250'},
            {Key: 'Outros: $1200'},
        ]}
        renderItem={({item}) => <Text>{item.Key}</Text>}></FlatList>
    </View>
  );};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    fontSize: 22,
    fontWeight: 'bold',
    marginTop:10,
    marginBottom: 10,


  }
});

export default EntrySummaryList;
