import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import theme from "../styles/theme";
import { ButtonPrimary } from "../components/atoms";

function WelcomeScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  const handleGoToLogin = () => navigation.navigate("Login");

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        justifyContent: "flex-end",
        backgroundColor: theme.fullWhite,
        position: "relative",
      }}
    >
      <View style={{ flex: 1, padding: 16 }}>
        <Image
          width={105}
          height={40}
          source={{
            uri: Image.resolveAssetSource(require("../../assets/logo.png")).uri,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: 40,
          }}
        >
          <Text
            style={{ color: theme.fullBlack, fontSize: 28, fontWeight: "bold" }}
          >
            Enjoy your moments with
          </Text>
          <Text
            style={{
              color: theme.brandAccent,
              fontSize: 28,
              fontWeight: "bold",
            }}
          >
            travelm
          </Text>
        </View>

        <Text style={{ color: theme.mediumBlack, fontSize: 16, marginTop: 20 }}>
          Register all places, take a lot of photos and keep your memories in
          your palm hand.
        </Text>

        <ButtonPrimary
          onPress={handleGoToLogin}
          style={{
            maxWidth: 150,
          }}
        >
          Explore
        </ButtonPrimary>
      </View>
      <Image
        height={500}
        style={{ zIndex: -1 }}
        source={{
          uri: Image.resolveAssetSource(require("../../assets/welcome.png"))
            .uri,
        }}
      />
    </View>
  );
}

export default WelcomeScreen;
