import { StyleSheet, Animated } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(Animated.ScrollView).attrs({
    showsVerticalScrollIndicator: false,
})`
    margin: 0 30px;
`

export const Code = styled.View `
    background: #FFF;
    padding: 10px;
    align-self: center;
`

export const Nav = styled.View `
    margin-top: 30px;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-top-color: rgba(255, 255, 255, 0.8);
`
export const NavItem = styled.View `
    flex-direction: row;
    align-items: center;
    padding: 12px;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: rgba(255, 255, 255, 0.8);

`
export const NavText = styled.Text `
font-size: 15px;
color: #FFF;
margin-left: 20px;

`
export const LogOut = styled.TouchableOpacity `
    border-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const TextLogout = styled.Text `
    font-size: 15px;
    font-weight: bold;
    color: #FFF
`