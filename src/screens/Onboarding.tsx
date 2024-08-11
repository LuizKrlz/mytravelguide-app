import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { OnboardFlow } from "react-native-onboard";
import IonicIcons from "@expo/vector-icons/Ionicons";
import theme from "../styles/theme";

export default function Onboarding({ navigation }) {
  const handleGoToWelcome = () => navigation.navigate("Welcome");
  return (
    <OnboardFlow
      paginationColor={theme.mediumBlack}
      paginationSelectedColor={theme.brandAccent}
      titleStyle={styles.title}
      subtitleStyle={styles.subtitle}
      primaryButtonStyle={styles.primaryButton}
      PrimaryButtonComponent={(props) => (
        <View style={styles.containerButton}>
          <TouchableOpacity onPress={props.goToNextPage} {...props}>
            <IonicIcons name="arrow-forward" size={20} color={"white"} />
          </TouchableOpacity>
        </View>
      )}
      pages={[
        {
          title: "Register your moments",
          subtitle:
            "Discover the places in your trip in the world and register great moments.",
          imageUri: Image.resolveAssetSource(
            require("../../assets/onboarding_one.png")
          ).uri,
        },
        {
          title: "Share your experiences",
          subtitle:
            "Share your trips and places that you visited and improve other experiences",
          imageUri: Image.resolveAssetSource(
            require("../../assets/onboarding_two.png")
          ).uri,
        },
        {
          title: "Remember always",
          subtitle:
            "Always available to remebember that moment, and feels again the energy",
          imageUri: Image.resolveAssetSource(
            require("../../assets/onboarding_three.png")
          ).uri,
        },
      ]}
      type={"fullscreen"}
      onDone={handleGoToWelcome}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Nunito-Bold",
    fontSize: 28,
    color: theme.colors.black,
    lineHeight: 40,
  },
  subtitle: {
    fontFamily: "Nunito-Regular",
    fontSize: 16,
    color: theme.colors.secondary,
    paddingHorizontal: 16,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    width: 65,
    height: 65,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  containerButton: {
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 20,
  },
});
