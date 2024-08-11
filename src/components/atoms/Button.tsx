import { createBox, useTheme } from "@shopify/restyle";
import { Pressable, PressableProps } from "react-native";
import { Theme } from "../../styles/theme";
import { Typography } from "./Typography";

type TButtonProps = PressableProps & {
  title: string;
};

const ButtonContainer = createBox<Theme>();

export function Button({ title, style, ...rest }: TButtonProps) {
  const theme = useTheme();

  return (
    <Pressable {...rest} style={{ ...style, alignSelf: "baseline" }}>
      <ButtonContainer
        alignItems="center"
        justifyContent="center"
        bg="primary"
        height={50}
        borderRadius={25}
        px="xl"
      >
        <Typography variant="paragraph-one-bold" color="white">
          {title}
        </Typography>
      </ButtonContainer>
    </Pressable>
  );
}
