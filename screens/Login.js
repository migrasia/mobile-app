import React from 'react';
import { Text, View, Button } from 'react-native';

class Login extends React.Component{
    render(){
      return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello Ji</Text>
        <Button title="Login"
        onPress={()=>this.props.navigation.navigate('Drawer')}
        />
    </View>
      );
    }
  }

export default Login;