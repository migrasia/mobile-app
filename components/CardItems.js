import React from 'react';
import { CardItem, Thumbnail, Text, Left, Body, View, Card } from 'native-base';

const CardItems = ({ coursecategory, imgUri }) => (
    <View>
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{ url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiAXkasEdKdzfzK2EXAzS7_N_ygUzAOoMkDN8sxNb_0-8xKzaq' }} />
                    <Body>
                        <Text>{coursecategory}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
            </CardItem>
        </Card>
    </View>
);

export default CardItems;
