import React from 'react';
import { Content, Tabs, Tab} from 'native-base';
import CoursesList from './CoursesList';



const Courses = ({title}) =>(
	<Content>
    <Tabs>
      <Tab heading={`Enrolled`}>
        <CoursesList courseName={'Rights for Migrant Workers'} imgUri={'https://www.acluaz.org/sites/default/files/styles/metatag_og_image_1200x630/public/field_image/kyr.png?itok=u6_CSd7j'} location={'HKU'} progress={50} />
      </Tab>
      <Tab heading={`All Courses`}>
      </Tab>
    </Tabs>
  </Content>
);

export default Courses;