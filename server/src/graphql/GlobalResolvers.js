import courseResolvers from './course/CourseResolvers';

const globalResolvers = {
  Query: {
    course: courseResolvers.courses,
  },
};

export default globalResolvers;
