import * as React from "react";
import { View } from "react-native";
import { Text,TextInput } from "react-native-paper";
import Clock from '../Components/Clock';
const RecentRoute = () =>  { return (
 <View>
     <Clock></Clock>
 <TextInput

 placeholder="PIN"
 keyboardType="numeric"
/>
</View>
)
};

export default RecentRoute;
