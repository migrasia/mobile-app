import React, { Component } from "react";
import { Header, Left, Icon, Right, Button, Body, Title } from "native-base";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { DrawerActions } from 'react-navigation';

props.navigation.dispatch(DrawerActions.closeDrawer());
props.navigation.dispatch(DrawerActions.openDrawer());

 const CustomHeader = (props)=>(
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu'/>
              </Button>
            </Left>
            <Body style={{alignItems: 'center'}}>
              <Title>Profile</Title>
            </Body>
            <Right />
            </Header>
);


export default CustomHeader;
