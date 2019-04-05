import { WebView, View } from 'react-native';
import React, { Component } from 'react';
import { Content, Container, Header, Left, Icon, Title, Right, Body } from 'native-base';


class Videos extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Header>
                        <Left>
                            <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
                        </Left>
                        <Body>
                            <Title>Videos</Title>
                        </Body>
                        <Right />
                    </Header>
                    <View>
                    <WebView
                            mediaPlaybackRequiresUserAction={true}
                            style={{ height: 240, width: 320, alignSelf: "center", alignContent: "center" }}
                            source={{ uri: 'https://www.youtube.com/embed/li8yILhFFZM?rel=0' }}
                        />
                    </View>

                </Content>
            </Container >
        );
    }
}

export default Videos;
