import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import data from './data';

import Icon from './weatherIcon';

import WeatherDetail from './components/WeatherDetail';
import WeatherHourly from './components/WeatherHourly';
import WeatherSummary from './components/WeatherSummary';
import { Hour } from './components/Hour';

export default function App() {

  const [loaded] = useFonts(
    { icomoon: require('./assets/fonts/icomoon.ttf'), }
  );

  if(!loaded) {
    return null;
  }

  console.log(data);

  

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.text}>{data.current.temp}</Text>
      <WeatherSummary />

      <View>
        <Icon name="wi-alien" style={styles.icon} />
      </View>
  
      <WeatherDetail />
      <FlatList
        horizontal
        data={data.hourly}
        renderItem={({item}) => <Hour hour={item}/> }
        keyExtractor={(item, index) => index}
      />
      { /*
        data.hourly.map((hour) => {
          return <Hour pop={hour.pop} />;
        }) */
      }

      <WeatherHourly />

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
//    alignItems: 'center',
//    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 48
  },
  icon: {
    color: '#fff',
    fontSize: 74
  }
});
