import React, { Component } from 'react';
import { Content, Tabs, Tab, Container, Header, Left, Icon, Title, Right, Body} from 'native-base';
import CoursesList from '../components/CoursesList';
import CoursesCat from '../components/CoursesCat';

class Courses extends Component{
  
  render(){
    return(
      <Container>
      <Content>
        <Header>
          <Left>
            <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()}/>
          </Left>
          <Body>
            <Title>Courses</Title>
          </Body>
          <Right/>
        </Header>
        <Tabs>
          <Tab heading={`Enrolled`}>
            <CoursesList courseName={'Rights for Migrant Workers'} imgUri={'https://www.acluaz.org/sites/default/files/styles/metatag_og_image_1200x630/public/field_image/kyr.png?itok=u6_CSd7j'} location={'HKU'} progress={50} />
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

export default Courses;
