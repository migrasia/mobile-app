import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { Header, Left, Right, Icon } from "native-base";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

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