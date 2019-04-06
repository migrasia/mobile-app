import React from 'react';
import { Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

const CoursesList = ({ courseName, imgUri, progress }) => (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail source={{ url: imgUri }} />
          <Body>
            <Text>{courseName}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Text> Progress  </Text>
        <ProgressBarAnimated
          value={progress}
          width={250}
        />
      </CardItem>
    </Card>
);
export default CoursesList;
