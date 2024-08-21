import IonicIcons from "@expo/vector-icons/Ionicons";
import {
  Box,
  ButtonIcon,
  Link,
  Typography,
  Input,
} from "../../components/atoms";
import { ExternalLayout } from "../../components/layouts";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useForgotPasswordScreen } from "./useForgotPasswordScreen";

export function ForgotPasswordUI({
  handleBack,
  handleGoToSignIn,
}: ReturnType<typeof useForgotPasswordScreen>) {
  const insets = useSafeAreaInsets();

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
