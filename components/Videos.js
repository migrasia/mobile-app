import { WebView, View } from 'react-native';
import React, { Component } from 'react';

class Videos extends Component {
    render() {
        return (
            <View>
                <WebView
                    mediaPlaybackRequiresUserAction={true}
                    style={{ height: 240, width: 320, alignSelf: "center", alignContent: "center" }}
                    source={{ uri: this.props.url }}
                />
            </View>
        );
    }
}

export default Videos;
