import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const artInstituteImage = require('./assets/images/art.png')
const magnificentMileImage = require('./assets/images/mile.png')
const navyPierImage = require('./assets/images/pier.png')
const waterTowerImage = require('./assets/images/water.png')
const willisTowerImage = require('./assets/images/willis.png')

function ArtInstitute() {
  return (
    <View style={styles.container}>
      <Image source={artInstituteImage} style={styles.image} />     
    </View>
  );
}

function MagnificentMile() {
  return (
    <View style={styles.container}>
      <Image source={magnificentMileImage} style={styles.image} />     
    </View>
  );
}

function NavyPier() {
  return (
    <View style={styles.container}>
      <Image source={navyPierImage} style={styles.image} />     
    </View>
  );
}

function WaterTower() {
  return (
    <View style={styles.container}>
      <Image source={waterTowerImage} style={styles.image} />     
    </View>
  );
}

function WillisTower() {
  return (
    <View style={styles.container}>
      <Image source={willisTowerImage} style={styles.image} />     
    </View>
  );
}

const Drawer = createDrawerNavigator();

function drawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ArtInstitute">
        <Drawer.Screen name="ArtInstitute" component={ArtInstitute} options={{ title: 'Art Institute of Chicago',}} />
        <Drawer.Screen name="MagnificentMile" component={MagnificentMile} options={{ title: 'Magnificent Mile',}} />
        <Drawer.Screen name="NavyPier" component={NavyPier} options={{ title: 'Navy Pier',}} />
        <Drawer.Screen name="WaterTower" component={WaterTower} options={{ title: 'Water Tower',}} />
        <Drawer.Screen name="WillisTower" component={WillisTower} options={{ title: 'Willis Tower',}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default drawerNavigation;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 480,
    width: 320,
  },
});