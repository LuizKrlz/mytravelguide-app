import IonicIcons from "@expo/vector-icons/Ionicons";
import { Box, Link } from "../components/atoms";
import { ExternalLayout } from "../components/layouts";
import { Input } from "../components/atoms/Input";
import { Typography } from "../components/atoms/Typography";
import { ButtonIcon } from "../components/atoms/ButtonIcon";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function RegisterScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const handleBack = () => navigation.goBack();

  const handleGoToSignIn = () => navigation.navigate("Login");

  return (
    <ExternalLayout handleBack={handleBack}>
      <Typography mt="xl" variant="header">
        Create Account
      </Typography>

      <Box gap="xl" mt="xl">
        <Input placeholder="Name" />
        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input placeholder="Password" secureTextEntry />
      </Box>

      <Box
        flex={1}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mt="xl"
      >
        <Typography variant="header">Register</Typography>
        <ButtonIcon onPress={() => {}}>
          <IonicIcons name="arrow-forward" size={30} color={"white"} />
        </ButtonIcon>
      </Box>

      <Box mt="xl" style={{ paddingBottom: insets.bottom + 10 }}>
        <Link onPress={handleGoToSignIn}>Sign in</Link>
      </Box>
    </ExternalLayout>
  );
}

export default RegisterScreen;
