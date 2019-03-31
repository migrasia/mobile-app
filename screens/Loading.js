import { ActivityIndicator, View } from 'react-native';
import React from 'react';

const About = () => (
  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
    <ActivityIndicator size="large"/>
  </View>
);

export default About;