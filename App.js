import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
const Product = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        margin: 20,
        backgroundColor: 'offwhite',
        padding: 30,
        borderRadius: 15,
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOffset: { height: 5, width: 3 },
        shadowOpacity: 0.6,
      }}>
      <Image
        style={{ width: 250, height: 180, borderRadius: 20 }}
        source={{
          uri: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
        }}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>
        Nicon Digital Camera
      </Text>
      <Text style={{ margin: 10,color:'green' }}>$49.99</Text>
      <Text style={{color:'orange'}}>★★★★☆</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          borderRadius: 10,
          padding: 8,
          marginTop: 15,
        }}>
        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 15 }}>
          Add To Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Product;
