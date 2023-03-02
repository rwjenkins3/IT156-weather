import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Icon from '../weatherIcon';

export const DetailTile = ({iconName, title, data}) => {
  return (
    <View style={styles.tileContainer}>
        <Icon name={iconName} color='white' size={38} />
        <Text style={styles.textSmall}>{title}</Text>
        <Text style={styles.textSmall}>{data}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tileContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#333',
    borderRadius: 8,
    width: '24%',
    marginBottom: 8,
    aspectRatio: 1/1.2
  },
  textSmall: {
    color: 'white',
    fontSize: 14
  },

});
