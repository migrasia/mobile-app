import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Content, Tabs, Tab, Container, Header, Left, Icon, Title, Right, Body, Text } from 'native-base';

import CoursesList from '../components/CoursesList';
import Error from '../components/Error';
import Loading from '../components/Loading';

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
    else if (error) return <Error content={error.message} />;
    const uniqueCategories = {};
    course.forEach(courses => uniqueCategories[courses.category] = 1);
    const categories = Object.keys(uniqueCategories);
    
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
                      <TouchableOpacity onPress={() => 
                        {
                          this.props.navigation.navigate('CoursePage', { coursename: courses.coursename, coursevideos:courses.structure });
                        }
                        }>
                        <CoursesList courseName={courses.coursename} imgUri={courses.icon} progress={Math.floor(Math.random() * 101)} />
                      </TouchableOpacity>
                    </View>
                  )
                })
              }
            </Tab>
            <Tab heading={`All Courses`}>
            {
              categories.map((category, index) => {
                const categoryCourses = course.filter(courses=>courses.category===category);
                return(
                  <View>
                    <View style={{ alignItems: 'center' }}>
                      <Text style={{ padding: 10, fontSize: 30 }}>{category}</Text>
                    </View>
                    
                    {
                      categoryCourses.map((catcourse, index)=>{
                        return(
                          <TouchableOpacity onPress={()=> {this.props.navigation.navigate('CoursePage', { coursename: catcourse.coursename, coursevideos:catcourse.structure });}}>
                            <CoursesList courseName={catcourse.coursename} imgUri={catcourse.icon} progress={-1} />
                          </TouchableOpacity>
                        )
                      })
                    }
                  </View>  
                )
              })
            }
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

export default graphql(COURSES_QUERY, { name: 'coursesQuery' })(Courses);