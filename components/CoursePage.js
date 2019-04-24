import React, { Component } from 'react';
import { Content, Container, Header, Left, Title, Right, Body, Card, CardItem, Text, View, Icon } from 'native-base';
import Videos from './Videos';
import Quiz from './Quiz';

class CoursePage extends Component {
    render() {
        const coursename = this.props.navigation.getParam('coursename');
        const coursevideos = this.props.navigation.getParam('coursevideos');
        return (
            <Container>
                <Content>
                    <Header>
                        <Left>
                            <Icon name='ios-arrow-back' onPress={() => this.props.navigation.goBack()} />
                        </Left>
                        <Body style={{ flex: 3 }}>
                            <Title>{JSON.stringify(coursename).replace(/['"]+/g, '')}</Title>
                        </Body>
                        <Right />
                    </Header>
                    {
                        coursevideos.map((videos, index) => {
                            return (
                                <View>
                                    <Card style={{ backgroundColor: '#fff', alignItems: 'center', padding: 30 }}>
                                        <CardItem>
                                            <Body style={{ alignItems: 'center' }}>
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
                    <Quiz/>
                </Content>
            </Container>
        );
    }
}

export default CoursePage;