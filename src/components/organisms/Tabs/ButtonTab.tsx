import { Pressable } from "react-native";
import { Typography } from "../../atoms/Typography";
import { Box } from "../../atoms";

export function ButtonTab({ title, isActive, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Box alignItems="center" justifyContent="center">
        <Typography
          variant="paragraph-two-semibold"
          color={isActive ? "primary" : "secondary"}
        >
          {title}
        </Typography>
        <Box
          width={4}
          height={4}
          borderRadius={2}
          bg={isActive ? "primary" : "white"}
        />
      </Box>
    </Pressable>
  );
}
