import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const EntryListItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ultimos Lançamentos</Text>
      <FlatList
        data={[
          {Key: 'Padaria Corneta: $20'},
          {Key: 'Supermercado : $12'},
          {Key: 'Posto Gasolina: $120'},
        ]}
        renderItem={({item}) => <Text>{item.Key}</Text>}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EntryListItem;
