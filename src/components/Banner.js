import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Banner = () => {
  return (
    <View style={styles.bannerContainer}>
      {/* Background */}
      <Image source={require('../../assets/custom/Rectangle 63.png')} style={styles.bgImage} />

      {/* Vegetables Image */}
      <Image source={require('../../assets/custom/2771 1.png')} style={styles.vegetablesImage} />

      {/* Top Corner Leaves */}
      <Image source={require('../../assets/custom/pngfuel 1.png')} style={styles.topRightLeaf} />
      <Image source={require('../../assets/custom/pngfuel 2.png')} style={styles.bottomRightLeaf} />

      {/* Banner Text */}
      <Text style={styles.bannerText}>Fresh Vegetables</Text>
      <Text style={styles.discountText}>Get Up To 40% OFF</Text>

      {/* Dots Indicator */}
      <View style={styles.dotsContainer}>
        <View style={styles.activeDot}></View>
        <View style={styles.inactiveDot}></View>
        <View style={styles.inactiveDot}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    position: 'relative',
    width: '100%',
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  vegetablesImage: {
    position: 'absolute',
    left: 10,
    bottom: 5,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  topRightLeaf: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  bottomRightLeaf: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  bannerText: {
    position: 'absolute',
    top: 40,
    left: 150,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  discountText: {
    position: 'absolute',
    top: 70,
    left: 150,
    fontSize: 16,
    color: '#FF5722',
    fontWeight: 'bold',
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  activeDot: {
    width: 18,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FF5722',
  },
  inactiveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D3D3D3',
  },
});

export default Banner;
