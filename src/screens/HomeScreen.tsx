import { View, Text, Button } from "react-native";
import React from "react";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../navigation/AppStackNavigator";

type ScreenNavigationProp = NativeStackNavigationProp<AppStackParamList>;

interface Props {
  navigation: ScreenNavigationProp;
}

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to the library"
        onPress={() => navigation.navigate("Library")}
      />
      <Button title="Search.." onPress={() => navigation.navigate("Search")} />
    </View>
  );
};
