import React from 'react';
import { SafeAreaView, ScrollView, View, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Courses from './screens/Courses';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Logout from './screens/Logout';


export default class App extends React.Component{
  render(){
    return(
      <AppStackNavigator/>
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
    screen: (props) => <Profile {...props} name={'Firstname LastName'} location={'Hong Kong'} birthDate={'18th June, 1999'} enrollmentDate={'29th August, 2018'}/>
  },
  Courses: {
    screen: (props) => <Courses {...props} />
  },
  Logout: {
    screen: (props) => <Logout {...props} />
  }  
},
{
  contentComponent: CustomDrawerComponent
}
)

const LoginNavigator = createStackNavigator({
  Login: {
    screen: Login
  }
})

const AppStackNavigator = createSwitchNavigator({
  LoginNav: {
    screen: LoginNavigator
  },
  Drawer: {
    screen: AppDrawerNavigator
  }
},{
  initialRouteName: "LoginNav"
})

