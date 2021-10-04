import React from 'react';
import {ThemeProvider} from "styled-components";
import theme from './src/global/styles/theme'
import {Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, useFonts} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import {CategorySelect} from "./src/screens/CategorySelect";

export default function App() {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading/>
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <CategorySelect/>
            </ThemeProvider>
        </>
    );
}
