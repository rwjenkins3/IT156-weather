import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react';
import heroImage from '../assets/moon-cloud-sm.jpg';
import { FontConstants, ColorConstants, SizeConstants } from '../globalStyles';

import data from '../data';

export default function WeatherSummary() {

  let windDirection = "";
  let d = data.current.wind_deg;
  switch (d) {
    case ( d > 315 || d < 45):
      windDirection = "North";
      break;
    case ( d >= 45 && d < 135):
      windDirection = "East";
      break;
    case ( d>=135 && d<225):
      windDirection = "South";
      break;
    default:
      windDirection = "West";

  }



  return (
    <View style={styles.heroContainer}>
      <Text style={styles.text}>Good Afternoon</Text>
      <Image source={heroImage} style={styles.hero} />
      <View style={styles.tempContainer}>
        <Text style={styles.highTemp}>{Math.round(data.daily[0].temp.max)}{'\u00b0'}F</Text>
        <Text style={styles.lowTemp}>/{Math.round(data.daily[0].temp.min)}{'\u00b0'}F</Text>
      </View>
      <View>
        { data.current.weather[0].main === 'Clear' ? 
          (<Text style={styles.textSmall}>Clear skies today with a tempurature of {Math.round(data.current.temp)}{'\u00b0'}F.</Text>) : 
          (<Text>At least partly cloudy skies today with a tempurature of {Math.round(data.current.temp)}{'\u00b0'}F.</Text>) 
        }
        <Text style={styles.textSmall}>Winds of {Math.round(data.current.wind_speed)}mph from the {windDirection}.</Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        width: '90%',
        color: ColorConstants.normal,
        fontSize: 32,
        fontWeight: '600',
        marginTop: 28,
        marginBottom: 4
    },

    textSmall: {
      color: 'white',
      fontSize: 14
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
      fontSize: 36,
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
