import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexBoxLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to my Soul Society
      </Text>

      <View style={styles.boxContainer}>
        <View style={[styles.box, { backgroundColor: 'black' }]} /> {/* Kotak 1 */}
        <View style={[styles.box, { backgroundColor: 'blue' }]} /> {/* Kotak 2 */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Latar belakang abu-abu terang
    alignItems: 'center', // Mengatur elemen secara horizontal
    justifyContent: 'center', // Mengatur elemen secara vertikal
    padding: 20, // Memberikan ruang di sekitar kontainer
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 20, // Memberikan jarak antara teks dan kotak
  },
  boxContainer: {
    flexDirection: 'row', // Mengatur kotak secara horizontal
    justifyContent: 'space-between', // Jarak merata antar kotak
    width: '100%', // Pastikan kotak memenuhi lebar layar
  },
  box: {
    width: 100,
    height: 100,
  },
});

export default FlexBoxLayout;