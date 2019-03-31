import React from 'react';
import { View, Button } from 'react-native';
import { Container, Content, Body, Header, Left, Right, Icon, Title } from 'native-base';
import { NavigationActions } from 'react-navigation';

class Logout extends React.Component{
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
                 onPress={()=>this.props.navigation.navigate('LoginNav', {}, NavigationActions.navigate({ routeName: 'Login' }))}
                 />
                </View>
              </Container>
          </Content>
      );
    }
  }

export default Logout;


