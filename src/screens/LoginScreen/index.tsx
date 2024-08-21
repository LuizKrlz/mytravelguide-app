import { LoginScreenUI } from "./LoginScreenUI";
import { useLoginScreen } from "./useLoginScreen";

export default function LoginScreen({ navigation }) {
  console.log(navigation);
  const props = useLoginScreen(navigation);

  return <LoginScreenUI {...props} />;
}
