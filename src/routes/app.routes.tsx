import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home } from '../views/Home';

import { Welcome } from '../views/Welcome';


const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return <Stack.Navigator screenOptions={{headerShown: false}}>

        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Home' component={Home} />


    </Stack.Navigator>}