import React from 'react';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import { SafeAreaView, ScrollView, View, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Courses from './screens/Courses';
import CoursePage from './components/CoursePage';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Logout from './screens/Logout';

const graphQLURI = `https://test-migrasia.herokuapp.com/`;

const client = new ApolloClient({
  uri: graphQLURI,
  onError: ({ networkError, graphQLErrors }) => {
    if (networkError) console.log(networkError);
    if (graphQLErrors) console.log(graphQLErrors);
  },
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppStackNavigator />
      </ApolloProvider>
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 150, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./assets/logo.png')} style={{ height: 120, width: 120, borderRadius: 60, }} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const CourseNav = createStackNavigator({
  Courses: { 
    screen: (props)=> <Courses {...props}/> 
  },
  CoursePage: { 
    screen: (props) => <CoursePage {...props} /> 
  }
},
  {
    navigationOptions: { 
      header: null 
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Profile: {
    screen: (props) => <Profile {...props} name={'Firstname LastName'} location={'Hong Kong'} birthDate={'18th June, 1999'} enrollmentDate={'29th August, 2018'} />
  },
  Courses: {
    screen: CourseNav
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
}, {
    initialRouteName: "LoginNav"
  })
