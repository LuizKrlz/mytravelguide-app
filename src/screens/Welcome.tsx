import { Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import theme from "../styles/theme";
import { Button, Box } from "../components/atoms";
import { Typography } from "../components/atoms/Typography";

function WelcomeScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  const handleGoToLogin = () => navigation.navigate("Login");

  return (
    <Box
      flex={1}
      justifyContent="flex-end"
      bg="white"
      position="relative"
      style={{ paddingTop: insets.top }}
    >
      <Box flex={1} p="m">
        <Image
          width={105}
          height={40}
          source={{
            uri: Image.resolveAssetSource(require("../../assets/logo.png")).uri,
          }}
        />

        <Box mt="xl">
          <Typography variant="header">Enjoy your moments</Typography>
          <Box alignItems="center" flexDirection="row" gap="s">
            <Typography variant="header" style={{ color: theme.colors.black }}>
              with
            </Typography>
            <Typography variant="header" color="primary">
              travelm
            </Typography>
          </Box>
        </Box>

        <Typography color="secondary" variant="paragraph-one-regular" mt="l">
          Register all places, take a lot of photos and keep your memories in
          your palm hand.
        </Typography>

        <Button
          onPress={handleGoToLogin}
          style={{
            marginTop: 40,
          }}
          title="Explore"
        />
      </Box>
      <Image
        height={500}
        style={{ zIndex: -1 }}
        source={{
          uri: Image.resolveAssetSource(require("../../assets/welcome.png"))
            .uri,
        }}
      />
    </Box>
  );
}

export default WelcomeScreen;
