import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StatementPage from './Statement';
import LandingPage from './Landing';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <Navigator
            headerMode='none'
            initialRouteName="LandingPage"
        >
            <Screen name="LandingPage" component={LandingPage} />
            <Screen name="StatementPage" component={StatementPage} />
        </Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Navigator headerMode="none">
                <Screen name='AppStack' component={AppStack} />
            </Navigator>
        </NavigationContainer>
    );
}
