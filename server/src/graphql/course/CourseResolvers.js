const resolvers = {
  async courses(parent, args, { firebase }) {
    const querySnapshot = await firebase.collection('courses').get();
    const courses= [];
    querySnapshot.forEach(doc => {
      courses.push({ id: doc.id, ...doc.data() });
    });
    return courses;
  },
};
export default resolvers;
