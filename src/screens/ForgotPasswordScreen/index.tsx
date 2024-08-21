import { ForgotPasswordUI } from "./ForgotPasswordUI";
import { useForgotPasswordScreen } from "./useForgotPasswordScreen";

export default function ForgotPasswordScreen({ navigation }) {
  const props = useForgotPasswordScreen(navigation);

  return <ForgotPasswordUI {...props} />;
}
