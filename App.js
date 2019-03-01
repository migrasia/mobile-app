import React from 'react';
import Courses from './screens/Courses';
import Profile from './screens/Profile';
import Login from './screens/Login';
import { SafeAreaView, ScrollView, View, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems, createStackNavigator } from 'react-navigation';



export default class App extends React.Component{
  render(){
    return(
      <AppDrawerNavigator/>
    );
  }
}




const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style = {{height: 150, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('./assets/logo.png')} style={{height: 120, width: 120, borderRadius: 60,}} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)


const AppDrawerNavigator = createDrawerNavigator({
  Profile: {
    screen: (props) => <Profile {...props} name={'Firstname LastName'} location={'Hong Kong'} birthDate={'18th June, 1999'}/>
  },
  Courses: (props) => <Courses {...props} />
},
{
  contentComponent: CustomDrawerComponent
}
)

const AppStackNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Drawer: {
    screen: AppDrawerNavigator
  }
})

