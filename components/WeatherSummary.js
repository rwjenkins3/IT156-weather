import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react';
import heroImage from '../assets/moon-cloud-sm.jpg';

export default function WeatherSummary() {
  return (
    <View style={styles.heroContainer}>
      <Text style={styles.text}>Good Afternoon</Text>
      <Image source={heroImage} style={styles.hero} />
      <View style={styles.tempContainer}>
        <Text style={styles.highTemp}>46{'\u00b0'}F</Text>
        <Text style={styles.lowTemp}>/33{'\u00b0'}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        width: '90%',
        color: '#fff',
        fontSize: 24,
        fontWeight: '600',
        marginTop: 28,
        marginBottom: 4
    },

    tempContainer: {
      flexDirection: 'row',
      width: '90%',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },

    highTemp: {
      fontSize: 48,
      color: 'lightblue',
      fontWeight: '100',
      marginRight: 8
    },

    lowTemp: {
      fontSize: 26,
      color: 'lightblue',
      fontWeight: '100'
    },

    heroContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },

    hero: {
      width: '90%',
      height: undefined,
      aspectRatio: 1,
      borderRadius: 20,
      resizeMode: 'cover'
    }

})
