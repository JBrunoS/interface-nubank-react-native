import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from '../src/pages/Main/index'

export default function Routes(){
    const stack = createStackNavigator();
    return(
        <NavigationContainer>
            <stack.Navigator headerMode="none" >
                <stack.Screen name='home' component={Main} />
            </stack.Navigator>
        </NavigationContainer>
    )
}