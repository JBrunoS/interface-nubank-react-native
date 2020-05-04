import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'


import { Animated } from 'react-native'
import { PanGestureHandler, State} from 'react-native-gesture-handler'

import Header from '../../components/Headers/index'
import Tabs from '../../components/Tabs/index'
import Menu from '../../components/Menu/index'

import {
    Container, Content, Card, CardHeader, CardCounter, CardFooter, Title, Description, Annotation
} from './style'


export default function Main(){
    let offset = 0;
    const translateY = new Animated.Value(0);
    const animatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY,
                }
            }
        ],
        {
            useNativeDriver: true
        },
    )

    function onHandlerStateChanged(event) {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            let opened = false;
            const { translationY } = event.nativeEvent;


            offset += translationY;

            if (translationY >= 100) {
                opened = true;   
            }else{
                translateY.setValue(offset)
                translateY.setOffset(0);
                offset = 0;
            }

                Animated.timing(translateY, {
                    toValue: opened ? 380 : 0,
                    duration: 350,
                    useNativeDriver: true,
                }).start(() => {
                    offset = opened ? 380 : 0 ;
                    translateY.setOffset(offset);
                    translateY.setValue(0);
                });
        }
    }
    return(
        <Container>
            <Header />
            <Content>
                <Menu translateY={translateY} />
                <PanGestureHandler
                    onGestureEvent={animatedEvent}
                    onHandlerStateChange={onHandlerStateChanged}
                >
                    <Card
                        style={{
                            transform: [{
                                translateY: translateY.interpolate({
                                    inputRange: [-200, 0, 380],
                                    outputRange: [-50, 0, 380],
                                    extrapolate: 'clamp'
                                }),
                            }],
                        }}
                    >
                        <CardHeader>
                            <Icon name='attach-money' size={28} color="#000" />
                            <Icon name='visibility-off' size={28} color="#000" />
                        </CardHeader>
                        <CardCounter>
                            <Title>Saldo Disponível</Title>
                            <Description>R$ 100,00</Description>
                        </CardCounter>
                        <CardFooter>
                            <Icon name='smartphone' size={25} color='#999' />
                            <Annotation>Transferência de R$ 20,00 recebida de João Bruno</Annotation>
                        </CardFooter>
                    </Card>
                </PanGestureHandler>
            </Content>
            <Tabs translateY={translateY} />
        </Container>
    );
}