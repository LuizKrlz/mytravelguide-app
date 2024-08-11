import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { Theme } from "../../styles/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, Icon } from "../atoms";
import { useTheme } from "@shopify/restyle";
import { Typography } from "../atoms/Typography";

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
      bg="background"
      style={{
        paddingBottom: insets.bottom,
      }}
    >
      {state.routes.map((route, index) => {
        const isActive = index === state.index;
        return (
          <TouchableOpacity
            style={
              isActive
                ? {
                    backgroundColor: theme.colors.primary,
                    flexDirection: "row",
                    alignItems: "center",
                    padding: theme.spacing.s,
                    borderRadius: 10,
                    gap: theme.spacing.s,
                  }
                : { height: 46, justifyContent: "center" }
            }
            onPress={() =>
              route.name ? navigation.navigate(route.name) : undefined
            }
          >
            {returnIcon(index, isActive, theme)}

            {isActive && (
              <Typography
                style={{
                  fontFamily: "Nunito-Bold",
                  fontSize: 13,
                  color: "white",
                }}
              >
                {state.routeNames[index] === "HomeTab"
                  ? "Home"
                  : state.routeNames[index]}
              </Typography>
            )}
          </TouchableOpacity>
        );
      })}
    </Box>
  );
}
