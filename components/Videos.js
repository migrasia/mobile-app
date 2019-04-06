import { WebView, View } from 'react-native';
import React, { Component } from 'react';

class Videos extends Component {
    render() {
        return (
            <View>
                <WebView
                    mediaPlaybackRequiresUserAction={true}
                    style={{ height: 240, width: 320, alignSelf: "center", alignContent: "center" }}
                    source={{ uri: 'https://www.youtube.com/embed/li8yILhFFZM?rel=0' }}
                />
            </View>
        );
    }
}

export default Videos;
