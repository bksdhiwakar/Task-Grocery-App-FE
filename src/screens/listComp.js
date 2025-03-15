import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HorizontalList = ({ title, data, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetails}>{item.details}</Text>
            <View style={{}}>
              <Text style={styles.price}>₹ {item.price}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#FF6347',
    fontWeight: 'bold',
  },
  list: {
    paddingLeft: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
    width: 173.32,
    height: 248.51,
    alignItems: 'center',
    shadowColor: '#000',
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  itemDetails: {
    fontSize: 12,
    color: 'gray',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
  addButton: {
    backgroundColor: '#FF6347',
    borderRadius: 20,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HorizontalList;
