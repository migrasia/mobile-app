import React from 'react';
import { View, Button } from 'react-native';
import { Container, Content, Body, Header, Left, Right, Icon, Title } from 'native-base';
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase'



class Logout extends React.Component{

  logout = () => {
    firebase.auth()
    .signOut()
    .then(() => {
      this.props.navigation.navigate('LoginNav', {}, NavigationActions.navigate({ routeName: 'Login' }));
    })
    .catch((error)=> {alert(error)});
   
  }

    render(){
      return(
          <Content>
              <Container>
              <Header>
            <Left>
              <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()}/>
            </Left>
            <Body>
              <Title>Logout</Title>
            </Body>
            <Right/>
          </Header>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Logout"
                 onPress= {() => this.logout()}
                 />
                </View>
              </Container>
          </Content>
      );
    }
  }

export default Logout;


