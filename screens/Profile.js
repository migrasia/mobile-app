import React from 'react'
import { AsyncStorage } from 'react-native'
import { Container, Content, Card, CardItem, Body, Thumbnail, Text, Header, Left, Right, Icon, Title, Button
   } from 'native-base';
import * as firebase from 'firebase';


class Profile extends React.Component{

  constructor(props){
    super(props)
    this.state = {user : null}
  }

  componentWillMount() {
    // get the current user from firebase
       const userData = firebase.auth().currentUser;
      this.setState({
        user: userData
      });
    }
  

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
                <Thumbnail style={{height:300, width:300, borderRadius:150, marginBottom: 10}} source={{uri: this.state.user.photoURL}}/>
                <Text style={{fontSize:30}}>{this.state.user.displayName}</Text>
              </Body>
            </CardItem>
            <CardItem>
            	<Text>Location: {this.props.location}</Text>
            </CardItem>
            <CardItem>
            	<Text>Date of Birth: {this.props.birthDate}</Text>
            </CardItem>
            <CardItem>
            	<Text>Date of Enrollment: {this.props.enrollmentDate}</Text>
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
