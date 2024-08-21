import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Box,
  Link,
  ButtonIcon,
  Input,
  Typography,
} from "../../components/atoms";
import { ExternalLayout } from "../../components/layouts";

import { useLoginScreen } from "./useLoginScreen";

export function LoginScreenUI({
  handleBack,
  handleGoToForgotPassword,
  handleGoToRegister,
  onSubmit,
}: ReturnType<typeof useLoginScreen>) {
  const insets = useSafeAreaInsets();

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
