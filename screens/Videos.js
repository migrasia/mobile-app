import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';
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

                    <VideoPlayer
                        videoProps={{
                            shouldPlay: true,
                            resizeMode: Video.RESIZE_MODE_CONTAIN,
                            source: {
                                uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
                            },
                        }}
                        isPortrait={true}
                        playFromPositionMillis={0}
                    />

                </Content>
            </Container>
        );
    }
}

export default Videos;
