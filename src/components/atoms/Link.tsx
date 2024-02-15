import { StyleSheet, Text, TouchableOpacity } from "react-native";
import theme from "../../styles/theme";

export function Link({ children, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Nunito-Bold",
    fontSize: 16,
    textDecorationColor: theme.fullBlack,
    textDecorationLine: "underline",
  },
});
