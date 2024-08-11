import { StyleSheet } from "react-native";
import theme from "../styles/theme";
import IonicIcons from "@expo/vector-icons/Ionicons";
import { Box, Link } from "../components/atoms";
import { ExternalLayout } from "../components/layouts";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Typography } from "../components/atoms/Typography";
import { Input } from "../components/atoms/Input";
import { ButtonIcon } from "../components/atoms/ButtonIcon";

function ForgotPasswordScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const handleBack = () => navigation.goBack();

  const handleGoToSignIn = () => navigation.navigate("Login");

  return (
    <ExternalLayout handleBack={handleBack}>
      <Typography mt="xl" variant="header">
        Reset a new Password
      </Typography>

      <Box mt="xl">
        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </Box>

      <Box
        flex={1}
        flexDirection="row"
        mt="xl"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="header">Send Code</Typography>
        <ButtonIcon onPress={() => {}}>
          <IonicIcons name="arrow-forward" size={30} color={"white"} />
        </ButtonIcon>
      </Box>

      <Box style={{ paddingBottom: insets.bottom + 10 }}>
        <Link onPress={handleGoToSignIn}>Sign in</Link>
      </Box>
    </ExternalLayout>
  );
}

const styles = StyleSheet.create({
  containerSignin: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
  },
  containerInput: {
    flex: 1,
    marginTop: 100,
    justifyContent: "center",
    maxHeight: 200,
    gap: 30,
  },
  title: {
    color: theme.fullBlack,
    fontSize: 28,
    fontFamily: "Nunito-Bold",
    marginTop: 40,
  },
  titleMark: {
    color: theme.brandAccent,
    fontSize: 28,
    fontFamily: "Nunito-Bold",
  },
  input: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 15,
    height: 50,
    borderBottomColor: theme.mediumBlack,
    borderBottomWidth: 1,
  },
  signInTitle: {
    fontSize: 28,
    fontFamily: "Nunito-Bold",
    color: theme.fullBlack,
  },
  signInButton: {
    backgroundColor: theme.brandAccent,
    width: 65,
    height: 65,
    borderRadius: 32.5,
    alignItems: "center",
    justifyContent: "center",
  },
  containerLinks: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
  },
});

export default ForgotPasswordScreen;
