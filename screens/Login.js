import React from 'react';
import { Text, View, TextInput, StyleSheet} from 'react-native';
import {Container, Content, Header, Form, Input, Item, Label, Button } from 'native-base'
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA_0d1eCp0ajEsK3e9Xw-NT4sE0G3cRFJ4",
  authDomain: "empoweru-b520c.firebaseapp.com",
  databaseURL: "https://empoweru-b520c.firebaseio.com",
  projectId: "empoweru-b520c",
  storageBucket: "empoweru-b520c.appspot.com",
  messagingSenderId: "443347823798"
};

firebase.initializeApp(firebaseConfig);

class Login extends React.Component{

    constructor(props) {
      super(props)
      this.state=({
        email: '',
        password: ''
      })
    }
      signUpUser =(email, password) => {
        try {
          if (this.state.password.length < 6) {
            alert("Password should atleast be 6 characters")
            return;
          }
          firebase.auth().createUserWithEmailAndPassword(email,password)
          alert("Registration Successful! Try loging in now.")
        }
        catch(error) {
          console.log(error.toString());
        }

      }
      loginUser = (email, password) => {
        try{
          firebase.auth().signInWithEmailAndPassword(email, password)
          alert("Login Successfull!");
          this.props.navigation.navigate('Drawer');
        }
        catch(error) {
           console.log(error.toString())
        }
        
      }
    
    render()
    {
      return(
          <Container style={styles.container}>
            <Form>

            <Item floatingLabel style={{marginBottom: 10}}>
                <Label>Email </Label>
                <Input 
                  autoCorrect={false} 
                  autoCapitalize="none" 
                  onChangeText = {(email)=> this.setState({email})} />
                </Item>
               
              
              <Item floatingLabel style={{marginBottom: 10}}>
                <Label>Password </Label>
                <Input 
                  secureTextEntry = {true}
                  autoCorrect={false} 
                  autoCapitalize="none" 
                  onChangeText = {(password)=> this.setState({password})} />
                </Item>
               
                <Button full rounded style={ {marginTop: 10} } onPress={()=>this.loginUser(this.state.email, this.state.password)}>
                <Text style={{color:'white'}}> Login </Text>
                 </Button>

                 <Button full rounded style={ {marginTop: 10,} } onPress={()=>this.signUpUser(this.state.email, this.state.password)}>
                <Text style={{color:'white'}}> Register </Text>
                 </Button>

                 <Button full rounded style={ {marginTop: 10,} } onPress={()=>this.loginWithFacebook()}>
                <Text style={{color:'white'}}> Sign in with Facebook </Text>
                 </Button>


            </Form>
            </Container>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
  })
export default Login;