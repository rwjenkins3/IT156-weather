import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { DetailTile } from './DetailTile'

import data from '../data'

export default function WeatherDetail() {
  return (
    <View>
      <Text style={styles.text}>Detail</Text>
      <View style={styles.detailContainer}>
        <DetailTile iconName="wi-thermometer" title="Feels Like" data={data.current.feels_like} />
        <DetailTile iconName="wi-thermometer" title="Feels Like" data={data.current.feels_like}  />
        <DetailTile iconName="wi-thermometer" title="Feels Like" data={data.current.feels_like}  />
        <DetailTile iconName="wi-thermometer" title="Feels Like" data={data.current.feels_like}  />
        <DetailTile iconName="wi-thermometer" title="Feels Like" data={data.current.feels_like}  />
        <DetailTile iconName="wi-thermometer" title="Feels Like" data={data.current.feels_like}  />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff'
    },
    detailContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }

})