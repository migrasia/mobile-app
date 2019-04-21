import React, { Component } from 'react';
import { Card, CardItem, Thumbnail, Text, Left, Body, View } from 'native-base';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

class CoursesList extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ url: this.props.imgUri }} />
            <Body>
              <Text>{this.props.courseName}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>   
          {
            (this.props.progress>=0 &&
                <View>
                  <Text>Progress:</Text>
                  <Text></Text>
                  <ProgressBarAnimated
                  value={this.props.progress}
                  width={250}
                />
                </View> 
            )
          }
        </CardItem>
      </Card>
    );
  }
}

export default CoursesList;