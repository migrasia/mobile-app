import React from 'react';
import { Text, View, TextInput, StyleSheet} from 'react-native';
import {Container, Content, Header, Form, Input, Item, Label, Button } from 'native-base'
class Login extends React.Component{
    render()
    {
      return(
          <Container style={styles.container}>
            <Form>
              <Item floatingLabel>
                <Label>Email </Label>
                <Input autoCorrect={false} autoCapitalize="none" />
                </Item>
              <Item floatingLabel style={{marginBottom: 10}}>
                <Label>Password </Label>
                <Input secureTextEntry = {true} autoCorrect={false} autoCapitalize="none" />
                </Item>
                <Button full rounded styles={ {marginTop: 20,} } onPress={()=>this.props.navigation.navigate('Drawer')}>
                <Text style={{color:'white'}}> Login </Text>
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