import React from 'react'
import { Container, Content, Card, Header, CardItem, Body, Thumbnail, Text } from 'native-base';
import PropTypes from 'prop-types';


const Profile = ({name,location, birthDate}) =>(
	<Container>
        <Content>
          <Card>
            <CardItem >
              <Body style={{alignItems:'center'}}>
                <Thumbnail style={{height:300, width:300, borderRadius:150, marginBottom: 10}} source={{uri: 'https://static.givealittle.co.nz/assets/hero/v636483721036470000-6059269d-d8dd-44b9-9a35-a8430180fef8-800'}}/>
                <Text style={{fontSize:30}}>{name}</Text>
              </Body>
            </CardItem>
            <CardItem>
            	<Text>Location: {location}</Text>
            </CardItem>
            <CardItem>
            	<Text>Date of Birth: {birthDate}</Text>
            </CardItem>
            
          </Card>
        </Content>
      </Container>
);

Profile.propTypes = {

};


export default Profile;
