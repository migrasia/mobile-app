import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Content, Tabs, Tab, Container, Header, Left, Icon, Title, Right, Body } from 'native-base';

import CoursesList from '../components/CoursesList';
import CoursesCat from '../components/CoursesCat';
import Error from '../components/Error';
import Loading from '../components/Loading';
import CoursePage from '../components/CoursePage';
import { NavigationActions } from 'react-navigation';


const COURSES_QUERY = gql`
  query {
    course {
      coursename
      structure
      icon
      category
    }
  }  
`;

class Courses extends Component {
  render() {
    const { loading, error, course } = this.props.coursesQuery;
    if (loading) return <Loading />;
    if (error) return <Error content={error.message} />;
    console.log(this.props);
    return (
      <Container>
        <Content>
          <Header>
            <Left>
              <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
            </Left>
            <Body>
              <Title>Courses</Title>
            </Body>
            <Right />
          </Header>
          <Tabs>
            <Tab heading={`Enrolled`}>
              {
                course.map((courses, index) => {
                  return (
                    <View key={index}>
                      <TouchableOpacity>
                        <CoursesList courseName={courses.coursename} imgUri={courses.icon} location={'HKU'} progress={50} onPress={() => this.props.navigation.navigate('Profile')} />
                      </TouchableOpacity>
                    </View>
                  )
                })
              }
            </Tab>
            <Tab heading={`All Courses`}>
              <CoursesCat />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

export default graphql(COURSES_QUERY, { name: 'coursesQuery' })(Courses);