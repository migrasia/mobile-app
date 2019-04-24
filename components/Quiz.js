import React, { Component } from 'react';
import { Content, Left, Right, Body, Card, CardItem, Text, View, ListItem, Radio, Button } from 'native-base';

class Quiz extends Component {
    constructor() {
        super();
        this.state = {
            itemSelected: '',
        }
    }
    render() {
        return (
            <View>
                <Card style={{ backgroundColor: '#fff', padding: 30 }}>

                    <CardItem>
                        <Body style={{ alignItems: 'center' }}>
                            <Text>Question 1</Text>
                        </Body>
                    </CardItem>

                    <Text>When be draw drew ye. Defective in do recommend suffering. House it seven in spoil tiled court. Sister others marked fat missed did out use. Alteration possession dispatched collecting instrument travelling he or on. Snug give made at spot or late that mr?</Text>
                    <View>
                        <Content>
                            <ListItem onPress={() => this.setState({ itemSelected: 'itemOne' })}
                                selected={this.state.itemSelected == 'itemOne'}>
                                <Left>
                                    <Text>Daily Stand Up</Text>
                                </Left>
                                <Right>
                                    <Radio selected={false} />
                                </Right>
                            </ListItem>

                            <ListItem onPress={() => this.setState({ itemSelected: 'itemTwo' })}
                                selected={this.state.itemSelected == 'itemTwo'}>
                                <Left>
                                    <Text>Discussion with Client</Text>
                                </Left>
                                <Right>
                                    <Radio selected={false} />
                                </Right>
                            </ListItem>

                            <ListItem onPress={() => this.setState({ itemSelected: 'itemThree' })}
                                selected={this.state.itemSelected == 'itemThree'}>
                                <Left>
                                    <Text>knad;vlqndf</Text>
                                </Left>
                                <Right>
                                    <Radio selected={false} />
                                </Right>
                            </ListItem>

                        </Content>
                    </View>

                    <Content>
                        <View style={{ alignItems: 'center' }}>
                            <Button block success><Text>Submit</Text></Button>
                        </View>
                    </Content>

                </Card>
            </View>
        );
    }
}




export default Quiz;