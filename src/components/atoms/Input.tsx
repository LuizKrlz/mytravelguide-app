import { useTheme } from "@shopify/restyle";
import { TextInput, TextInputProps } from "react-native";
import { Theme } from "../../styles/theme";

export function Input(props: TextInputProps) {
  const theme = useTheme<Theme>();

  return (
    <TextInput
      {...props}
      style={{
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.secondary,
        fontFamily: "Nunito-SemiBold",
        fontSize: 16,
        fontWeight: "semibold",
      }}
    />
  );
}
