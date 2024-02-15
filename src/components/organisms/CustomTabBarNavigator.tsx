import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import theme from "../../styles/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Icon } from "../atoms";

const returnIcon = (index: number, isActive: boolean) => {
  switch (index) {
    case 1:
      return (
        <Icon.Explore color={isActive ? theme.fullWhite : theme.mediumBlack} />
      );

    case 2:
      return (
        <Icon.Notification
          color={isActive ? theme.fullWhite : theme.mediumBlack}
        />
      );

    case 3:
      return (
        <Icon.Favorite color={isActive ? theme.fullWhite : theme.mediumBlack} />
      );

    default:
      return (
        <Icon.Home color={isActive ? theme.fullWhite : theme.mediumBlack} />
      );
  }
};

export function CustomTabBarNavigator({
  state,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: insets.bottom,
        paddingHorizontal: 24,
        paddingVertical: 15,
        backgroundColor: theme.fullWhite,
      }}
    >
      {state.routes.map((route, index) => {
        const isActive = index === state.index;
        return (
          <TouchableOpacity
            style={
              isActive
                ? styles.active
                : { height: 46, justifyContent: "center" }
            }
            onPress={() =>
              route.name ? navigation.navigate(route.name) : undefined
            }
          >
            {returnIcon(index, isActive)}

            {isActive && (
              <Text
                style={[
                  {
                    marginLeft: 5,
                    color: theme.fullBlack,
                    fontSize: 13,
                    fontFamily: "Nunito-Bold",
                  },
                  isActive && { color: theme.fullWhite },
                ]}
              >
                {state.routeNames[index] === "HomeTab"
                  ? "Home"
                  : state.routeNames[index]}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  active: {
    height: 36,
    borderRadius: 12,
    backgroundColor: theme.brandAccent,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
});
