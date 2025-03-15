import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Button,
  TouchableOpacity,
  FlatListComponent,
} from 'react-native';
import * as Location from 'expo-location';
import HorizontalList from './listComp';

export default function HomeScreen() {
  const [locationName, setLocationName] = useState('');
  const [loading, setLoading] = useState(false);

  const exclusiveOffers = [
    {
      id: 1,
      name: 'Organic Bananas',
      details: '7pcs, Priceg',
      price: 30,
      image: require('../../assets/custom/apple.png'),
    },
    {
      id: 2,
      name: 'Red Apple',
      details: '1kg, Priceg',
      price: 250,
      image: require('../../assets/custom/banana.jpg'),
    },
    {
      id: 3,
      name: 'Green Grapes',
      details: '500g, Priceg',
      price: 120,
      image: require('../../assets/custom/apple.png'),
    },
  ];

  const getLocation = async () => {
    setLoading(true);
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location access is required to fetch your position.');
        setLoading(false);
        return;
      }

      const locationData = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = locationData.coords;

      // Reverse geocoding to get location name
      const address = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (address.length > 0) {
        const { city, region, country, district } = address[0];
        setLocationName(`${district || 'Unknown'}, ${city || 'Unknown'}, ${country || 'Unknown'}`);
      } else {
        setLocationName('Location not found');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch location. Please try again.');
      console.error('Location Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../../assets/custom/logo-O.png')} resizeMode='contain' style={styles.logo} />
        {loading ? (
          <ActivityIndicator size='small' color='#FF5733' />
        ) : locationName ? (
          <TouchableOpacity style={styles.locationContainer} onPress={getLocation}>
            <Image source={require('../../assets/custom/Exclude.png')} />
            <Text style={styles.text}>{locationName}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.errorText} onPress={getLocation}>
            <Text>Location not available</Text>
          </TouchableOpacity>
        )}
      </View>
      {/* Search Section */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchPlaceholder}>Search Store</Text>
      </View>

      {/* Banner Section */}
      <View style={styles.bannerContainer}>
        <Image source={require('../../assets/custom/Rectangle 63.png')} style={styles.bannerBackground} />

        <Image source={require('../../assets/custom/2771 1.png')} style={styles.vegetablesImage} />

        <Image source={require('../../assets/custom/pngfuel 1.png')} style={styles.floatingLeaves} />

        <Image source={require('../../assets/custom/pngfuel 2.png')} style={styles.lettuceImage} />

        <View style={styles.textContainer}>
          <Text style={styles.bannerTitle}>Fresh Vegetables</Text>
          <Text style={styles.bannerSubtitle}>Get Up To 40% OFF</Text>
        </View>

        <View style={styles.indicatorContainer}>
          <View style={styles.activeDot} />
          <View style={styles.inactiveDot} />
          <View style={styles.inactiveDot} />
        </View>
      </View>
      <HorizontalList title='Exclusive Offer' data={exclusiveOffers} onPress={(item) => alert(item.name)} />
      <HorizontalList title='Best Selling' data={exclusiveOffers} onPress={(item) => alert(item.name)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    padding: 10,
  },
  searchPlaceholder: {
    color: '#888',
    fontSize: 16,
  },
  text: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 18,
  },
  logo: {
    width: 34,
    height: 34,
    marginBottom: 5,
  },
  bannerContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerBackground: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  vegetablesImage: {
    position: 'absolute',
    left: 10,
    bottom: 5,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  floatingLeaves: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  lettuceImage: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  textContainer: {
    position: 'absolute',
    top: 30,
    left: '35%',
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  bannerSubtitle: {
    fontSize: 16,
    color: '#FF5733',
    marginTop: 5,
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  activeDot: {
    width: 18,
    height: 6,
    backgroundColor: '#FF5733',
    borderRadius: 5,
  },
  inactiveDot: {
    width: 6,
    height: 6,
    backgroundColor: '#D3D3D3',
    borderRadius: 3,
  },
});
