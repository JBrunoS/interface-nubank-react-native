import React from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'

import {Container, Code, Nav, NavItem, NavText, LogOut, TextLogout} from './style'

export default function Menu({ translateY }) {
    return(
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1],
            })
        }}>
            <Code>
                
            </Code>
            <Nav>
                <NavItem>
                    <Icon name='help-outline' size={20} color='#FFF' />
                    <NavText>Me Ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name='person-outline' size={20} color='#FFF' />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name='monetization-on' size={20} color='#FFF' />
                    <NavText>Configurar Conta</NavText>
                </NavItem>
                <NavItem>
                    <Icon name='credit-card' size={20} color='#FFF' />
                    <NavText>Configurar Cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name='store' size={20} color='#FFF' />
                    <NavText>Pedir Conta PJ</NavText>
                </NavItem>
                <NavItem>
                    <Icon name='smartphone' size={20} color='#FFF' />
                    <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>
            <LogOut>
                <TextLogout>SAIR DA CONTA</TextLogout>
            </LogOut>
            

        </Container>
    )
}