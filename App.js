import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DataTable } from 'react-native-paper';
import Pressable from './components/Button';



SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const customerImage = require('./assets/Images/AddCustomer.png');

//May try and continue working to see if this can be my pressable instead of just Edit
const editImage = require('./assets/Images/EditIcon.jpg');

 function AddCustomer() {
  const [text, onChangeText] = React.useState();
  return (
    <ScrollView style={styles.scrollStyle}>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image source={customerImage} style={styles.image} />
      </View>
      <View style={styles.spacingContainer}>
            <View style={styles.labelContainer}>
                <Text style={styles.textLabel}>First Name</Text>
            </View>
            <View style={styles.inputContainer}>
            <TextInput></TextInput>
            </View>
        </View>
        <View style={styles.spacingContainer}>
            <View style={styles.labelContainer}>
                <Text style={styles.textLabel}>Last Name</Text>
            </View>
            <View style={styles.inputContainer}>
            <TextInput></TextInput>
            </View>
        </View>
        <View style={styles.spacingContainer}>
            <View style={styles.labelContainer}>
                <Text style={styles.textLabel}>Address</Text>
            </View>
            <View style={styles.inputContainer}>
            <TextInput></TextInput>
            </View>
        </View>
        <View style={styles.spacingContainer}>
            <View style={styles.labelContainer}>
                <Text style={styles.textLabel}>City</Text>
            </View>
            <View style={styles.inputContainer}>
            <TextInput></TextInput>
            </View>
        </View>
        <View style={styles.spacingContainer}>
            <View style={styles.labelContainer}>
                <Text style={styles.textLabel}>State</Text>
            </View>
            <View style={styles.inputContainer}>
            <TextInput></TextInput>
            </View>
        </View>
        <View style={styles.spacingContainer}>
            <View style={styles.labelContainer}>
                <Text style={styles.textLabel}>Email</Text>
            </View>
            <View style={styles.inputContainer}>
            <TextInput></TextInput>
            </View>
        </View>
        <View style={styles.spacingContainer}>
            <View style={styles.labelContainer}>
                <Text style={styles.textLabel}>Phone Number</Text>
            </View>
            <View style={styles.inputContainer}>
            <TextInput></TextInput>
            </View>
        </View>
        <View style={styles.spacingContainer}>
        <Pressable style={styles.button} label="Add Customer" />
        </View>
    </View>
    </ScrollView>
  );
}

function SearchCustomer() {
  return (
    <ScrollView style={styles.scrollStyle}>
    <View style={styles.tableContainer}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title></DataTable.Title>
          <DataTable.Title>First Name</DataTable.Title>
          <DataTable.Title>Last Name</DataTable.Title>
          <DataTable.Title>Email</DataTable.Title>
          <DataTable.Title>Phone</DataTable.Title>
        </DataTable.Header>
        
        {/* for each will happen here so that we can loop through all of the items that are added and put them into their own rows */}
        <DataTable.Row style={styles.rowHeight}>
          <DataTable.Cell style={styles.cellWidth}><Pressable style={styles.button} theme="small" label="Edit" /></DataTable.Cell>
          <DataTable.Cell style={styles.cellWidth}>Zane</DataTable.Cell>
          <DataTable.Cell style={styles.cellWidth}>Morgan</DataTable.Cell>
          <DataTable.Cell style={styles.cellWidth}>zm469692@southeast.edu</DataTable.Cell>
          <DataTable.Cell style={styles.cellWidth}>402-555-5555</DataTable.Cell>
        </DataTable.Row>

      </DataTable>
    </View>
    </ScrollView>
  );
}

//This will be used to pass data from search button to edit page
function EditCustomer() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='CustomerID'></TextInput>
      <TextInput style={styles.input} placeholder='First Name'></TextInput>
      <TextInput style={styles.input} placeholder='Last Name'></TextInput>
      <TextInput style={styles.input} placeholder='Address'></TextInput>
      <TextInput style={styles.input} placeholder='City'></TextInput>
      <TextInput style={styles.input} placeholder='State'></TextInput>
      <TextInput style={styles.input} placeholder='Email'></TextInput>
      <TextInput style={styles.input} placeholder='Phone Number'></TextInput>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Add Customer" component={AddCustomer} options={{ }} />
        <Drawer.Screen name="Search Customer" component={SearchCustomer} options={{ }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default DrawerNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelContainer: {
    backgroundColor: "white",
    alignSelf: "flex-start",
    marginStart: 5,
    zIndex: 1,
    shadowColor: "white",
    position: "absolute",
    top: -12,
},
inputContainer: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    zIndex: 0,
    width: 350,
},
tableContainer: {
  flex: 1,
  backgroundColor: '#fff',
  paddingHorizontal: 15,
},
textLabel:
{
  fontSize: 16,
},
spacingContainer: {
  marginBottom: 15,
},
image: {
  width: 170,
  height: 200,
},
imageContainer: {
  paddingTop: 25,
  paddingBottom: 25,
},
scrollStyle: {
  backgroundColor: '#fff',
},
cellWidth: {
  maxwidth: 250,
  height: 100,
  textAlign: 'center',
},
editImage:
{
width: 50,
height: 50,
},
rowHeight: {
  height: 100,
}
});
