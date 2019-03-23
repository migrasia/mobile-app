import { gql } from 'apollo-server';

const CourseTypes = gql`
  type Course {
    coursename: String
  }
`;

export default CourseTypes;
