import React from "react";
import { AppProvider } from "./src/components/AppProvider";
import { AppStackNavigator } from "./src/navigation/AppStackNavigator";

export default function App() {
  return (
    <AppProvider>
      <AppStackNavigator></AppStackNavigator>
    </AppProvider>
  );
}
