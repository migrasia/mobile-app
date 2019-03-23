import React, { Component }from 'react';
import { Container, Content} from 'native-base';
import CardItems from './CardItems';

const CoursesCat = () => (
  <Container>
        <Content>
            <CardItems coursecategory={'Law'} imgUri={''}/>
            <CardItems coursecategory={'Finance'} imgUri={''}/>
            <CardItems coursecategory={'Science'} imgUri={''}/>
            <CardItems coursecategory={'Technology'} imgUri={''}/>
            <CardItems coursecategory={'Language'} imgUri={''}/>
            <CardItems coursecategory={'Cooking'} imgUri={''}/>
        </Content>  
  </Container>
);

export default CoursesCat;
