import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { VocabularyList } from "./VocabularyList";
import { HomePage } from "./HomePage";
import { TeachMe } from "./TeachMe";
import { PastTests } from "./PastTests";
import { MainStackParamList } from "../NavigationParamList";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => {
    return (
        <BaseNavigationContainer>
            <StackNavigator.Navigator<MainStackParamList>
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#2196F3",
                    },
                    headerTintColor: "white",
                    headerShown: true,
                }}
            >
                <StackNavigator.Screen
                    name="Home"
                    component={HomePage}
                    options={{
                        title: "English Vocabulary"
                    }}
                />
                <StackNavigator.Screen
                    name="TeachMe"
                    component={TeachMe}
                    options={{
                        title: "Teach Me"
                    }}
                />
                <StackNavigator.Screen
                    name="PastTests"
                    component={PastTests}
                    options={{
                        title: "Past Tests"
                    }}
                />
                <StackNavigator.Screen
                    name="Vocabulary"
                    component={VocabularyList}
                    options={{
                        title: "Word Bank"
                    }}
                />
            </StackNavigator.Navigator>
        </BaseNavigationContainer>
    );
};