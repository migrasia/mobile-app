import React, { Component } from "react";
<<<<<<< HEAD
import { Header, Left, Icon, Right, Button, Body, Title } from "native-base";
import {
=======
import { SafeAreaView } from "react-native";
import { Header, Left, Right, Icon } from "native-base";
import { 
>>>>>>> c8959c5b7512ed68616ed1ee03b73f303be55eb3
    View,
    Text,
    StyleSheet
} from "react-native";
<<<<<<< HEAD
import { DrawerActions } from 'react-navigation';

props.navigation.dispatch(DrawerActions.closeDrawer());
props.navigation.dispatch(DrawerActions.openDrawer());

 const CustomHeader = (props)=>(
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu'/>
              </Button>
            </Left>
            <Body style={{alignItems: 'center'}}>
              <Title>Profile</Title>
            </Body>
            <Right />
            </Header>
);


export default CustomHeader;
=======

class CustomHeader extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}/>
                    </Left>
                </Header>
            </View>
            </SafeAreaView>
        );
    }
}
export default CustomHeader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
>>>>>>> c8959c5b7512ed68616ed1ee03b73f303be55eb3
