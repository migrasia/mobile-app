import React from 'react'
import { Container, Content, Card, CardItem, Body, Thumbnail, Text, Header, Left, Right, Icon, Title, Button } from 'native-base';
import PropTypes from 'prop-types';

class Profile extends React.Component{
  render(){
    return(
      <Container>
        <Content>
          <Header>
            <Left>
              <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()}/>
            </Left>
            <Body>
              <Title>Profile</Title>
            </Body>
            <Right/>
          </Header>
          <Card>
            <CardItem >
              <Body style={{alignItems:'center'}}>
                <Thumbnail style={{height:300, width:300, borderRadius:150, marginBottom: 10}} source={{uri: 'https://static.givealittle.co.nz/assets/hero/v636483721036470000-6059269d-d8dd-44b9-9a35-a8430180fef8-800'}}/>
                <Text style={{fontSize:30}}>{this.props.name}</Text>
              </Body>
            </CardItem>
            <CardItem>
            	<Text>Location: {this.props.location}</Text>
            </CardItem>
            <CardItem>
            	<Text>Date of Birth: {this.props.birthDate}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

Profile.defaultProps ={
  name: 'First Last',
  location: 'Hong Kong',
  birthDate: '18th June, 1999'
};


export default Profile;
