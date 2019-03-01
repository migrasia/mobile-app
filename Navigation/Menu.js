import React from 'react';
import Courses from './screens/Courses';
import Profile from './screens/Profile';
import Login from './screens/Login';
import { SafeAreaView, ScrollView, View, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Content, Header, Icon, Left, Header } from 'native-base';





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
  Profile: Profile,
  Courses: Courses
},
{
  contentComponent: CustomDrawerComponent,
  initialRouteName: Profile
}
)
const Menu= () => {
  let pressMenu
  return(
    <Content>
      <Header>
      <Left>
          <Icon
            name="menu"
            onPress={() => {
              pressMenu.dispatch(DrawerActions.toggleDrawer())
                }}
           />
        </Left>
      />
      </Header>
      <Menu
         ref={navigatorRef => { pressMenu = navigatorRef}}
      />
  </Content>
  )
}
export default Menu;