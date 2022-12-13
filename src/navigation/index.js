import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthNavigation from './AuthNavigation';
import BottomTabNavigator from "./BottomTabNavigator";

export default () => {
    const userId = useSelector((state) => state.auth.userId);

    return (
        <NavigationContainer>
            {userId ? <BottomTabNavigator /> : <AuthNavigation />}
        </NavigationContainer>
    );
};
