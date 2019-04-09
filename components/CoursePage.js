import React, { Component } from 'react';
import { Content, Container, Header, Left, Title, Right, Body, Card, CardItem,Text, View, Icon } from 'native-base';

import Videos from './Videos';

class CoursePage extends Component {
    render() {
    console.log(this.props.coursename);
     return (
            <Container>
                <Content>
                    <Header>
                        <Left>
                            <Icon name='ios-arrow-back' onPress={() => this.props.navigation.goBack()} />
                        </Left>
                        <Body>
                            <Title></Title>
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
    coursevideos: ["https://www.youtube.com/embed/Rq0uTxTQD5w", "https://www.youtube.com/embed/5GTbM5-ku-M", "https://www.youtube.com/embed/bP0zUTl3pGg"],
    coursename: "DummyCourse"
};

export default CoursePage;