import { gql } from 'apollo-server';
import CourseTypes from './course/CourseTypes';

const queryTypes = gql`
  type Query {
    course: [Course!]!
  }
`;

const globalQuery = [queryTypes, CourseTypes];

export default globalQuery;
