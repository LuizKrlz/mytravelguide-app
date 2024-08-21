import { WelcomeUI } from "./WelcomeUI";
import { useWelcomeScreen } from "./useWelcomeScreen";

export default function WelcomeScreen({ navigation }) {
  const props = useWelcomeScreen(navigation);

  return <WelcomeUI {...props} />;
}
