import React, { Component } from 'react';
import { Image } from 'react-native';
import { Content, Container, Header, Left, Title, Right, Body, Card, CardItem,Text, View } from 'native-base';

import Videos from './Videos';

class CoursePage extends Component {
    render() {
        console.log(this.props);
        return (
            <Container>
                <Content>
                    <Header>
                        <Left>
                        </Left>
                        <Body>
                            <Title>{this.props.coursename}</Title>
                        </Body>
                        <Right />
                    </Header>
                        {
                               this.props.coursevideos.map((videos, index) => {
                                return (
                                    <View>
                                    <Card style={{ backgroundColor: '#fff', alignItems: 'center', padding: 30 }}>
                                        <CardItem>
                                                <Body style={{alignItems: 'center'}}>
                                                    <Text>Video {index + 1}</Text>
                                                </Body>
                                            
                                        </CardItem>
                                        <CardItem cardBody>
                                            <Videos url={videos} />
                                        </CardItem>
                                    </Card>
                                </View>
                                )
                              })
                        }
                </Content>
            </Container>
        );
    }
}

CoursePage.defaultProps = {
    videos: ["", "", ""],
    coursename: "DummyCourse"
};

export default CoursePage;