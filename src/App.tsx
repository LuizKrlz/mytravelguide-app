import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Onboarding from "./screens/Onboarding";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import HomeScreen from "./screens/HomeScreen";
import { CustomTabBarNavigator } from "./components/organisms/CustomTabBarNavigator";
import ExploreScreen from "./screens/ExploreScreen";
import NotificationScreen from "./screens/NotificationsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import CityDetailsScreen from "./screens/CityDetailsScreen";
import CityTourScreen from "./screens/CityTourScreen";
import { ThemeProvider } from "@shopify/restyle";
import theme from "./styles/theme";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBarNavigator {...props} />}
    >
      <Tab.Screen
        name="HomeTab"
        options={{ title: "Home" }}
        component={HomeScreen}
      />

      <Tab.Screen
        name="Explore"
        options={{ title: "Explore" }}
        component={ExploreScreen}
      />

      <Tab.Screen
        name="Notifications"
        options={{ title: "Notifications" }}
        component={NotificationScreen}
      />

      <Tab.Screen
        name="Favorites"
        options={{ title: "Favorites" }}
        component={FavoritesScreen}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Nunito-Black": require("../assets/fonts/nunito/Nunito-Black.ttf"),
    "Nunito-BlackItalic": require("../assets/fonts/nunito/Nunito-BlackItalic.ttf"),
    "Nunito-Bold": require("../assets/fonts/nunito/Nunito-Bold.ttf"),
    "Nunito-BoldItalic": require("../assets/fonts/nunito/Nunito-BoldItalic.ttf"),
    "Nunito-ExtraBold": require("../assets/fonts/nunito/Nunito-ExtraBold.ttf"),
    "Nunito-ExtraBoldItalic": require("../assets/fonts/nunito/Nunito-ExtraBoldItalic.ttf"),
    "Nunito-ExtraLight": require("../assets/fonts/nunito/Nunito-ExtraLight.ttf"),
    "Nunito-ExtraLightItalic": require("../assets/fonts/nunito/Nunito-ExtraLightItalic.ttf"),
    "Nunito-Italic": require("../assets/fonts/nunito/Nunito-Italic.ttf"),
    "Nunito-Light": require("../assets/fonts/nunito/Nunito-Light.ttf"),
    "Nunito-LightItalic": require("../assets/fonts/nunito/Nunito-LightItalic.ttf"),
    "Nunito-Regular": require("../assets/fonts/nunito/Nunito-Regular.ttf"),
    "Nunito-SemiBold": require("../assets/fonts/nunito/Nunito-SemiBold.ttf"),
    "Nunito-SemiBoldItalic": require("../assets/fonts/nunito/Nunito-SemiBoldItalic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Start" component={Onboarding} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />

            <Stack.Screen name="Home" component={TabRoutes} />

            <Stack.Screen name="City" component={CityDetailsScreen} />
            <Stack.Screen name="CityTour" component={CityTourScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
