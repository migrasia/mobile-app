import React from 'react';
import { Content, Tabs, Tab, Container } from 'native-base';
import CoursesList from '../components/CoursesList';
import CustomHeader from '../components/CustomHeader';


const Courses = ({title}) =>(
	<Container>
	<Content>
		<CustomHeader/>
    <Tabs>
      <Tab heading={`Enrolled`}>
        <CoursesList courseName={'Rights for Migrant Workers'} imgUri={'https://www.acluaz.org/sites/default/files/styles/metatag_og_image_1200x630/public/field_image/kyr.png?itok=u6_CSd7j'} location={'HKU'} progress={50} />
      </Tab>
      <Tab heading={`All Courses`}>
      </Tab>
    </Tabs>
  </Content>
	</Container>
);

export default Courses;
