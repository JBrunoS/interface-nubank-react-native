import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
    Container, TabsContainer, TabItem, TabText
}from './style'

export default function Tabs({ translateY }){
    return(
        <Container style={{
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange: [0, 30],
                    extrapolate: 'clamp'
                })
            }],
            opacity: translateY.interpolate({
                inputRange: [0, 350],
                outputRange: [1, 0.3],
                extrapolate: 'clamp'
            })
        }}>
            <TabsContainer >
                <TabItem>
                    <Icon name='settings-input-component' size={24} color='#FFF' />
                    <TabText>Ajustar limite</TabText>
                </TabItem>
                <TabItem>
                    <Icon name='lock' size={24} color='#FFF' />
                    <TabText>Desbloquear Cartão</TabText>
                </TabItem>
                <TabItem>
                    <Icon name='credit-card' size={24} color='#FFF' />
                    <TabText>Cartão Virtual</TabText>
                </TabItem>
                <TabItem>
                    <Icon name='arrow-upward' size={24} color='#FFF' />
                    <TabText>Transferir</TabText>
                </TabItem>
                <TabItem>
                    <Icon name='arrow-downward' size={24} color='#FFF' />
                    <TabText>Depositar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name='payment' size={24} color='#FFF' />
                    <TabText>Pagar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name='smartphone' size={24} color='#FFF' />
                    <TabText>Recarga de Celular</TabText>
                </TabItem>
                <TabItem>
                    <Icon name='forum' size={24} color='#FFF' />
                    <TabText>Cobrar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name='help-outline' size={24} color='#FFF' />
                    <TabText>Me Ajuda</TabText>
                </TabItem>
                <TabItem>
                    <Icon name='person-add' size={24} color='#FFF' />
                    <TabText>Indicar Amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icon name='sort' size={24} color='#FFF' />
                    <TabText>Organizar Atalhos</TabText>
                </TabItem>
                
                
            </TabsContainer>
        </Container>
    )
}