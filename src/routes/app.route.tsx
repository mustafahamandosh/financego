import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Dashboard} from "../screens/Dashboard";
import {Register} from "../screens/Register";
import {useTheme} from "styled-components";
import {Platform} from "react-native";
import {MaterialIcons} from '@expo/vector-icons'

const {Navigator, Screen} = createBottomTabNavigator()

export function AppRoutes() {
    const theme = useTheme()
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secondary_color,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 88,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0
                }
            }}
        >
            <Screen name="List" component={Dashboard}
                    options={{
                        tabBarIcon: (({size, color}) =>
                                <MaterialIcons
                                    name='format-list-bulleted'
                                    size={size}
                                    color={color}
                                />
                        )
                    }}/>
            <Screen name="Create" component={Register}
                    options={{
                        tabBarIcon: (({size, color}) =>
                                <MaterialIcons
                                    name='attach-money'
                                    size={size}
                                    color={color}
                                />
                        )
                    }}
            />
            <Screen name="Summary" component={Dashboard}
                    options={{
                        tabBarIcon: (({size, color}) =>
                                <MaterialIcons
                                    name='pie-chart'
                                    size={size}
                                    color={color}
                                />
                        )
                    }}
            />
        </Navigator>
    )
}
