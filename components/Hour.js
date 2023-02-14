import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SizeConstants } from '../globalStyles';


export const Hour = ({hour}) => {

    return (
    <View style={styles.container}>
        <Text style={styles.info}>
            {hour.pop}
        </Text>
        <Text style={styles.info}>
            {hour.temp}
        </Text>
        <Text style={styles.info}>
            {hour.weather[0].main}
        </Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 160,
        backgroundColor: 'darkgrey',
        borderRadius: SizeConstants.borderRadius,
        marginRight: SizeConstants.paddingSmall,
        padding: SizeConstants.paddingRegular
    },
    info: {
        color: 'white',
        fontSize: 18
    }
});
