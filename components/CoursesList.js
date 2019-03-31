import React from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

const CoursesList = ({ courseName, imgUri, progress }) => (
  <Content>
    <Card>
      <CardItem>
        <Left>
          <Thumbnail source={{ url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiAXkasEdKdzfzK2EXAzS7_N_ygUzAOoMkDN8sxNb_0-8xKzaq' }} />
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
  </Content>
);
export default CoursesList;
