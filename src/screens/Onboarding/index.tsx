import OnboardingUI from "./OnboardingUI";
import { useOnboardingScreen } from "./useOnboardingScreen";

export default function OnboardingScreen({ navigation }) {
  const props = useOnboardingScreen(navigation);

  return <OnboardingUI {...props} />;
}
