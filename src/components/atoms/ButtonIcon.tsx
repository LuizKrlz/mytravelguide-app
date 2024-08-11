import { Pressable } from "react-native";
import { PropsWithChildren } from "react";

import { Box } from "./Box";

type TButtonIconProps = PropsWithChildren<{
  onPress: () => void;
}>;

export function ButtonIcon({ children, onPress }: TButtonIconProps) {
  return (
    <Pressable style={{ alignSelf: "baseline" }} onPress={onPress}>
      <Box bg="primary" p="m" borderRadius={35}>
        {children}
      </Box>
    </Pressable>
  );
}
