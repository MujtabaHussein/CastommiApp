import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/Home'
import Login from '../pages/Login'
import LoginUserType from '../pages/LoginUserType'

const Stack = createNativeStackNavigator()

function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='UserType' component={LoginUserType} />
    </Stack.Navigator>
  )
}

export default Navigation
