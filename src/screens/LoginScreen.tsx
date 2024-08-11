import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, Link } from "../components/atoms";
import { ExternalLayout } from "../components/layouts";
import { Typography } from "../components/atoms/Typography";
import { Input } from "../components/atoms/Input";
import { ButtonIcon } from "../components/atoms/ButtonIcon";

function LoginScreen({ navigation }) {
  const handleBack = () => navigation.goBack();
  const insets = useSafeAreaInsets();

  const onSubmit = () => {
    navigation.navigate("Home");
  };

  const handleGoToRegister = () => navigation.navigate("Register");
  const handleGoToForgotPassword = () => navigation.navigate("ForgotPassword");

  return (
    <ExternalLayout handleBack={handleBack}>
      <Box flexWrap="wrap" mt="xl">
        <Typography variant="paragraph-one-semibold" fontSize={44}>
          Welcome to
        </Typography>
        <Box flexDirection="row" alignItems="center" gap="s">
          <Typography variant="paragraph-one-semibold" fontSize={44}>
            word
          </Typography>
          <Typography
            variant="paragraph-one-semibold"
            fontSize={44}
            color="primary"
          >
            explorer!
          </Typography>
        </Box>
      </Box>
      <Box gap="l" mt="xl">
        <Input
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Input placeholder="Password" secureTextEntry />
      </Box>
      <Box
        flex={1}
        mt="xl"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="header">Sign in</Typography>
        <ButtonIcon onPress={onSubmit}>
          <Ionicons name="arrow-forward" size={30} color={"white"} />
        </ButtonIcon>
      </Box>
      <Box
        style={{ paddingBottom: insets.bottom + 10 }}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link onPress={handleGoToRegister}>Register</Link>
        <Link onPress={handleGoToForgotPassword}>Forgot Password</Link>
      </Box>
    </ExternalLayout>
  );
}

export default LoginScreen;
