import { StyleSheet, SafeAreaView, Text, ScrollView, View } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import Profile from '../screens/Profile';
import Courses from '../screens/Courses';
import React from 'react';
import { Image } from 'react-native';

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style = {{height: 150, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('../assets/logo.png')} style={{height: 120, width: 120, borderRadius: 60,}} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Profile: (props) => <Profile {...props.navigation.state.params} name='FirstName' location='Sheung Wan' birthDate='1920' />,
  Courses: Courses
},
{
  contentComponent: CustomDrawerComponent
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppDrawerNavigator;
