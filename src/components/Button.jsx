import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { themeContext } from "./../context/themeContext";
import { Styles } from "./../styles/GlobalStyles";

const Button = ({ title, onPress, isBlue, isGray }) => {
  const theme = useContext(themeContext);

  return (
    <TouchableOpacity
      style={
        isBlue
          ? Styles.btnBlue
          : isGray
          ? Styles.btnGray
          : theme === "light"
          ? Styles.btnLight
          : Styles.btnGray
      }
      onPress={onPress}
    >
      <Text
        style={
          isBlue || isGray
            ? Styles.smallTextLight
            : theme === "dark"
            ? Styles.smallTextLight
            : Styles.smallTextDark
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
