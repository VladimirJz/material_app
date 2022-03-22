/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";


import TopBar from "./Components/TopBar";
import theme from "./CustomProperties/Themes";
import MainScreen from "./Screens/MainScreen";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <TopBar />
      <MainScreen />

    </PaperProvider>
  );
}
