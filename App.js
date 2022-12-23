import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Switch, SafeAreaView } from "react-native";
import { themeContext } from "./src/context/themeContext";
import { myColors } from "./src/styles/Colors";
import Keyboard from "./src/components/Keyboard";

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <themeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "black" }]
        }
      >
        <Switch
          value={theme === "dark"}
          onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <Keyboard />
      </SafeAreaView>
    </themeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
