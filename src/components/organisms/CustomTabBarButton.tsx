import { useTheme } from "@shopify/restyle";
import { Pressable } from "react-native";
import type { Theme } from "../../styles/theme";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const widths = {
  s: 100,
  m: 130,
};

type TCustomTabBarButtonProps = {
  isActive: boolean;
  onPress(): void;
  children({ isActive }: { isActive: boolean }): ReactNode;
  size: "s" | "m";
};

export function CustomTabBarButton({
  onPress,
  isActive,
  children,
  size = "s",
}: TCustomTabBarButtonProps) {
  const ref = useRef<Animated.View>(null);
  const theme = useTheme<Theme>();
  const width = useSharedValue(0);

  const widthSelected = widths[size];

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, {
        duration: 400,
      }),
    };
  });

  useEffect(() => {
    if (isActive) {
      width.value = widthSelected;
    }

    return () => {
      width.value = 0;
    };
  }, [isActive, widthSelected]);

  return (
    <Pressable onPress={onPress}>
      <Animated.View
        style={[
          {
            height: 40,
            backgroundColor: isActive
              ? theme.colors.primary
              : theme.colors.white,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            padding: theme.spacing.s,
            gap: 6,
          },
          animatedStyle,
        ]}
      >
        {children({ isActive })}
      </Animated.View>
    </Pressable>
  );
}
