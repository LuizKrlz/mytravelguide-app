import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import type { Theme } from "../../styles/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, Icon } from "../atoms";
import { useTheme } from "@shopify/restyle";
import { Typography } from "../atoms/Typography";
import { CustomTabBarButton } from "./CustomTabBarButton";

const returnIcon = (index: number, isActive: boolean, theme: Theme) => {
  switch (index) {
    case 1:
      return (
        <Icon.Explore
          color={isActive ? theme.colors.white : theme.colors.secondary}
        />
      );

    case 2:
      return (
        <Icon.Notification
          color={isActive ? theme.colors.white : theme.colors.secondary}
        />
      );

    case 3:
      return (
        <Icon.Favorite
          color={isActive ? theme.colors.white : theme.colors.secondary}
        />
      );

    default:
      return (
        <Icon.Home
          color={isActive ? theme.colors.white : theme.colors.secondary}
        />
      );
  }
};

export function CustomTabBarNavigator({
  state,
  navigation,
}: BottomTabBarProps) {
  const theme = useTheme<Theme>();
  const insets = useSafeAreaInsets();

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      px="xl"
      py="s"
      bg="background"
      style={{
        paddingBottom: insets.bottom,
      }}
    >
      {state.routes.map((route, index) => {
        const title =
          state.routeNames[index] === "HomeTab"
            ? "Home"
            : state.routeNames[index];

        return (
          <CustomTabBarButton
            key={route.key}
            isActive={index === state.index}
            onPress={() =>
              route.name ? navigation.navigate(route.name) : undefined
            }
            size={title.length > 10 ? "m" : "s"}
          >
            {({ isActive }) => (
              <>
                {returnIcon(index, isActive, theme)}

                {isActive && (
                  <Typography
                    style={{
                      fontFamily: "Nunito-Bold",
                      fontSize: 16,
                      color: "white",
                    }}
                  >
                    {state.routeNames[index] === "HomeTab"
                      ? "Home"
                      : state.routeNames[index]}
                  </Typography>
                )}
              </>
            )}
          </CustomTabBarButton>
        );
      })}
    </Box>
  );
}
